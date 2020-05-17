import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';
import {
  Fab, Icon
} from '@material-ui/core';
import firebase from 'firebase/app';
import { CloudUploadOutlined } from '@material-ui/icons';
import { SText, Content } from '../../components';
import DataTable from '../../components/Tables/DataTable';
// import { vendorList } from './mockData';
import AddReport from './AddReport';
import Upload from './Upload';
// import { firestore as db } from '../../_services';
import { setAlert } from '../../_store/actions';

const db = firebase.firestore();

const groupColumns = [
  { columnName: '#', keyName: 'sn' },
  { columnName: 'State', keyName: 'state' },
  { columnName: 'County', keyName: 'county' },
  { columnName: 'Latitude', keyName: 'latitude' },
  { columnName: 'Longitude', keyName: 'longitude' },
  { columnName: 'Urbanization', keyName: 'urbanization' },
  { columnName: 'Total', keyName: 'total' },
  { columnName: 'Confirmed', keyName: 'confirmed' },
  { columnName: 'Deaths', keyName: 'deaths' },
  { columnName: 'Last Update', keyName: 'updated' }
];

const perPage = 10;

const Reports = (props) => {
  const { dispatch } = props;
  const [openView, setOpenView] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [page, setPage] = useState(0);
  const [last, setLast] = useState(null);
  const [first, setFirst] = useState(null);

  useEffect(() => {
    getReports();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const collection = db.collection('covid_report').orderBy('updated', 'desc');

  const getReports = async () => {
    setLoading(true);
    await collection.limit(perPage)
      .get()
      .then((querySnapshot) => {
        const lastItem = querySnapshot.docs[querySnapshot.docs.length - 1];
        const firstItem = querySnapshot.docs[0];
        setLast(lastItem);
        setFirst(firstItem);
        const response = [];
        querySnapshot.forEach((doc) => {
          response.push(doc.data());
        });
        setReports(response);
      })
      .catch(() => {
        dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to get Report' }));
      });
    setLoading(false);
  };

  const getNext = async () => {
    setLoading(true);
    await collection.startAfter(last).limit(perPage)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 0) {
          return;
        }
        const lastItem = querySnapshot.docs[querySnapshot.docs.length - 1];
        const firstItem = querySnapshot.docs[0];
        setLast(lastItem);
        setFirst(firstItem);
        setPage(prev => prev + 1);
        const response = [];
        querySnapshot.forEach((doc) => {
          response.push(doc.data());
        });
        setReports(response);
      })
      .catch(() => {
        dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to get Report' }));
      });
    setLoading(false);
  };

  const getPrev = async () => {
    setLoading(true);
    await collection.endBefore(first).limit(perPage)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 0) {
          return;
        }
        const lastItem = querySnapshot.docs[querySnapshot.docs.length - 1];
        const firstItem = querySnapshot.docs[0];
        setLast(lastItem);
        setFirst(firstItem);
        setPage(prev => prev - 1);
        const response = [];
        querySnapshot.forEach((doc) => {
          response.push(doc.data());
        });
        setReports(response);
      })
      .catch(() => {
        dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to get Report' }));
      });
    setLoading(false);
  };

  const submitReport = () => {
    setOpenView(false);
    getReports();
  };

  const uploadReport = () => {
    setOpenUpload(false);
    getReports();
  };

  const closeViewDialog = () => {
    setOpenView(false);
  };

  const closeUploadDialog = () => {
    setOpenUpload(false);
  };

  const reportList = reports.map((report, index) => ({
    ...report,
    sn: index + 1 + (page * perPage)
  }));

  const counties = reports.map(report => report.county);
  const cases = reports.map(report => report.confirmed);

  return (
    <>
      <Content fadeIn minHeight="70vh" flex align="center" justify="center">
        <Content id="worktime" width="90%" bg="#ffffff" borderBox vmargin="2em" shadow borderR="0.4em">
          <Content flex horizontal padding="2em" justify="space-between" borderBox>
            <SText color="#444444" size="32px" weight="700">Reports</SText>
            <Content flex horizontal justify="flex-end">
              <Fab color="primary" aria-label="edit" onClick={() => setOpenView(true)} style={{ color: '#ffffff' }}>
                <Icon>add</Icon>
              </Fab>
              <Fab color="primary" aria-label="edit" onClick={() => setOpenUpload(true)} style={{ color: '#ffffff', marginLeft: '1em' }}>
                <CloudUploadOutlined />
              </Fab>
            </Content>
          </Content>
          <DataTable minHeight="70vh" tableData={reportList} columns={groupColumns} loading={loading} pagination nextPage={getNext} prevPage={getPrev} />
        </Content>
        <Content vmargin="3em" width="90%" flex bg="#ffffff" borderR="0.4em" borderBox padding="1em" shadow>
          <Content flex horizontal tmargin="2em" hpadding="2em" justify="space-between" borderBox>
            <SText color="#444444" size="32px" weight="700" width="80%">County vs Cases</SText>
          </Content>
          <Plot
            data={[
              { type: 'bar', x: counties, y: cases },
            ]}
            style={{ width: '100%' }}
          />
        </Content>
      </Content>
      <AddReport open={openView} handleClose={() => closeViewDialog()} submit={submitReport} />
      <Upload open={openUpload} handleClose={() => closeUploadDialog()} submit={uploadReport} />
    </>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Reports);
