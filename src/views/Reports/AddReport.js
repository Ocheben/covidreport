/* eslint-disable max-len */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
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

const AddReport = (props) => {
  const {
    open, handleClose, submit, dispatch
  } = props;
  const [loading, setLoading] = useState(false);
  const [formInputs, setFormInputs] = useState({});

  const handleSubmit = async () => {
    if (Object.entries(formInputs).length !== 8) {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Incomplete Form' }));
      return;
    }
    setLoading(true);
    // const uid = Math.random()
    //   .toString(36)
    //   .substring(2, 7);

    await db.collection('covid_report').add({
      ...formInputs,
      updated: new Date().toISOString()
    }).then(() => {
      dispatch(setAlert({ open: true, variant: 'info', message: 'Report Added Successfully' }));
      submit();
      setFormInputs({});
    }).catch(() => {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Error Adding Report' }));
    });
    setLoading(false);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <SText color="#444444" size="25px" weight="700">
          Add Report
        </SText>
      </DialogTitle>
      <DialogContent dividers>
        <Content flex justify="center" align="center" bmargin="1em">
          <Content flex horizontal vmargin="0.5em" justify="space-between" width="90%">
            <Input
              label="State"
              type="text"
              width="48%"
              variant="outlined"
              name="state"
              value={formInputs.state}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, state: target.value }))}
            />
            <Input
              label="County"
              type="text"
              width="48%"
              variant="outlined"
              name="county"
              value={formInputs.county}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, county: target.value }))}
            />
          </Content>
          <Content flex horizontal vmargin="0.5em" justify="space-between" width="90%">
            <Input
              label="Latitude"
              type="number"
              step="any"
              width="48%"
              variant="outlined"
              name="latitude"
              value={formInputs.latitude}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, latitude: target.value }))}
            />
            <Input
              label="longitude"
              type="number"
              step="any"
              width="48%"
              variant="outlined"
              name="longitude"
              value={formInputs.longitude}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, longitude: target.value }))}
            />
          </Content>
          <Content flex horizontal vmargin="0.5em" justify="space-between" width="90%">
            <Input
              label="Urbanization"
              type="text"
              width="48%"
              variant="outlined"
              name="urbanization"
              value={formInputs.urbanization}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, urbanization: target.value }))}
            />
            <Input
              label="Total"
              type="number"
              width="48%"
              variant="outlined"
              name="total"
              value={formInputs.total}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, total: target.value }))}
            />
          </Content>
          <Content flex horizontal vmargin="0.5em" justify="space-between" width="90%">
            <Input
              label="Confirmed"
              type="number"
              width="48%"
              variant="outlined"
              name="confirmed"
              value={formInputs.confirmed}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, confirmed: target.value }))}
            />
            <Input
              label="Deaths"
              type="number"
              width="48%"
              variant="outlined"
              name="deaths"
              value={formInputs.deaths}
              onChange={({ target }) => setFormInputs(prev => ({ ...prev, deaths: target.value }))}
            />
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
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : <SText color="#ffffff" size="14px" weight="700">Add</SText>}

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

export default connect(mapStateToProps)(AddReport);
