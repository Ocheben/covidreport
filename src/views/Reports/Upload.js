/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment, CircularProgress, Icon
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { CloudUploadOutlined, CloudDownloadOutlined } from '@material-ui/icons';
import { ExcelRenderer } from 'react-excel-renderer';
import {
  Content, Input, StyledButton, SText
} from '../../components';
import { firestore } from '../../_services';
import { setAlert } from '../../_store/actions';

const db = firestore;

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Upload = (props) => {
  const {
    open, handleClose, submit, dispatch
  } = props;
  const [loading, setLoading] = useState(false);
  const [uploadFileName, setUploadFileName] = useState('');
  const [invalidFile, setInvalidFile] = useState(false);
  const [records, setRecords] = useState([]);
  const fileInput = React.createRef();

  const renderFile = (fileObj) => {
    // just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, res) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } else {
        // setDataLoaded(true);
        parseRecords(res.rows);
      }
    });
  };

  const parseRecords = (rows) => {
    const recordsArr = [];
    const columns = rows[0];
    for (let i = 1; i < rows.length; i += 1) {
      const obj = {};
      for (let j = 0; j < columns.length; j += 1) {
        obj[columns[j]] = String(rows[i][j]) || 'N/A';
      }
      recordsArr.push(obj);
    }
    setRecords(recordsArr);
    // setRecords(recordsArr);
    // setFormInputs(prev => ({ ...prev, records: recordsArr }));
  };

  const fileHandler = (event) => {
    if (event.target.files.length) {
      const fileObj = event.target.files[0];
      const fileName = fileObj.name;

      // check for file extension and pass only if it is .xlsx and display error message otherwise
      const extensionName = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
      if (extensionName === 'csv') {
        setUploadFileName(fileName);
        setInvalidFile(false);
        renderFile(fileObj);
      } else {
        dispatch(setAlert({ open: true, variant: 'error', message: 'File should be CSV' }));
        setUploadFileName('');
        setInvalidFile(true);
      }
    }
  };

  const downloadTemplate = () => {
    const rows = [
      ['state', 'county', 'latitude', 'longitude', 'urbanization', 'total', 'confirmed', 'deaths']
    ];

    const csvContent = `data:text/csv;charset=utf-8,${
      rows.map(e => e.join(',')).join('\n')}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'report_template.csv');
    document.body.appendChild(link); // Required for FF

    link.click();
  };

  const handleSubmit = async () => {
    setLoading(true);
    const batch = db.batch();
    for (let i = 0; i < records.length; i++) {
      const docRef = db.collection('covid_report').doc();
      batch.set(docRef, { ...records[i], updated: new Date().toISOString() });
    }
    await batch.commit().then(() => {
      dispatch(setAlert({ open: true, variant: 'info', message: 'Report Uploaded Successfully' }));
      submit();
    }).catch(() => {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to upload reports' }));
    });
    setLoading(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <SText color="#444444" size="25px" weight="700">
          Upload Report
        </SText>
      </DialogTitle>
      <DialogContent dividers>
        <Content flex justify="center" align="center" bmargin="1em">
          <Content flex horizontal vmargin="0.5em" justify="space-between" width="90%">
            <Input
              label="Upload File*"
              type="text"
              variant="outlined"
              name="uploadFileName"
              width="65%"
              error={invalidFile}
              helperText={invalidFile ? 'Invalid file format' : ''}
              value={uploadFileName}
              onClick={() => fileInput.current.click()}
            // onChange={({ target }) => setPassword(target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon style={{ color: '#666666' }}>attach_file</Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <>
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={() => exportToExcel(template)}
                      >
                        <CloudUploadOutlined />
                      </IconButton>
                      <input
                        type="file"
                        hidden
                        onChange={fileHandler}
                        ref={fileInput}
                        // eslint-disable-next-line no-param-reassign
                        onClick={({ target }) => { target.value = null; }}
                      />
                    </>
                  </InputAdornment>
                )
              }}
            />
            <StyledButton
              color="primary"
              width="30%"
              variant="contained"
              onClick={downloadTemplate}
            >
              <Content rmargin="0.3em" width="60%" flex justify="space-between" style={{ color: '#ffffff' }} horizontal align="center">
                <CloudDownloadOutlined />
                {' '}
                Template
              </Content>
            </StyledButton>
          </Content>
        </Content>
        <Content flex horizontal align="flex-end" vmargin="1em" justify="flex-end" height="20%" mobWidth="100%" mobHeight="20%">
          <StyledButton
            width="7em"
            style={{ color: '#ffffff', marginRight: '0.5em' }}
            variant="contained"
            onClick={handleClose}
          >
            <SText color="#ffffff" size="14px" weight="700">Cancel</SText>

          </StyledButton>
          <StyledButton
            color="primary"
            width="7em"
            style={{ color: '#ffffff' }}
            variant="contained"
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : <SText color="#ffffff" size="14px" weight="700">Upload</SText>}

          </StyledButton>
        </Content>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Upload);
