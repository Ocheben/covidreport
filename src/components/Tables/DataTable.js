import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FastForwardOutlined, FirstPageOutlined, LastPage, ChevronLeft, ChevronRight
} from '@material-ui/icons';
import { IconButton, CircularProgress } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Content, colors } from '../styledComponents';
import Input from '../Input';
import { LogoLoader } from '../loaders';
import { NoDataIcon } from '../icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 0,
    // height: '30vh'
  },
  tableHead: {
    position: 'sticky',
    top: 0,
    background: '#ffffff',
    fontWeight: '600',
    fontSize: '17px',
    color: '#444444'
  },
  tableBody: {
    // height: '30vh',
    // display: 'block'
  }
}));

const DataTable = (props) => {
  const classes = useStyles();
  const {
    columns, tableData, pageAction, nextPage, prevPage, currentPage, loading, submit, totalPages, pagination, minHeight, height
  } = props;

  const [pageValue, setPageValue] = useState(currentPage);
  useEffect(() => {
    setPageValue(currentPage);
  }, [currentPage]);

  const dataKeyNames = columns.map(column => column.keyName);
  // const columnCount = dataKeyNames.length;
  const tableHead = tableData.length && (columns.map(column => (
    <TableCell align="left" key={column.columnName} className={classes.tableHead}>{column.columnName}</TableCell>
  )));
  // const tableDataList = tableData.length
  // && (tableData.map((item, index) => {
  //   const tabledata = [];
  //   for (let i = 0; i < columnCount; i + 1) {
  //     tabledata.push(<TableCell align="right" key={i}>{item[dataKeyNames[i]]}</TableCell>);
  //   }
  //   return (
  //     <tr key={item.sn}>
  //       {tabledata}
  //     </tr>
  //   );
  // }));
  const tableDataList = [];
  // eslint-disable-next-line array-callback-return
  tableData.map((item) => {
    tableDataList.push(columns.map((column, idx) => <TableCell align="left" key={column.keyName}>{item[dataKeyNames[idx]]}</TableCell>));
  });
  // tableData.map((item, index) => {
  //   const tabledata = [];
  //   for (let i = 0; i < columns.length; i + 1) {
  //     tabledata.push(<TableCell align="right" key={i}>{item[dataKeyNames[i]]}</TableCell>);
  //   }
  //   return tableDataList.push(
  //     <tr key={item.sn}>
  //       {tabledata}
  //     </tr>
  //   );
  // });

  return (
    <Content minHeight={minHeight || 0} height={height || 'auto'} overflow="auto" flex justify={tableData.length === 0 || loading ? 'flex-end' : 'space-between'}>
      {
        loading
        && (
          <Content height="100%" bg="#ffffff88" flex justify="center" position="absolute" style={{ zIndex: 1100 }} align="center">
            {/* <LogoLoader height="80px" color="#0b2d40" /> */}
            <CircularProgress style={{ color: colors.primary }} size={50} />
          </Content>
        )
      }
      {
        (!loading && tableData.length === 0)
        && (
          <Content height="100%" flex justify="center" position="absolute" style={{ zIndex: 1100 }} align="center">
            <NoDataIcon height="100px" color={colors.primary} />
          </Content>
        )
      }
      {
        (!loading && tableData.length > 0)
        && (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {tableHead}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody} classes={{ root: classes.tableBody }} style={{ height: '30vh', overflow: 'auto' }}>
              {
                tableDataList.length
                  ? tableDataList.map(item => (
                    <TableRow key={item}>
                      {item}
                    </TableRow>
                  ))
                  : <TableRow>No Result found</TableRow>
              }
            </TableBody>
          </Table>
        )
      }
      {
        pagination
        && (
          <Content height="4em" align="center" flex>
            <Content flex horizontal justify="flex-end" width="90%" align="center">
              {/* <IconButton onClick={() => pageAction(0)} disabled={currentPage === 1}>
                <FirstPageOutlined />
              </IconButton> */}
              <IconButton onClick={() => prevPage()}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={() => nextPage()}>
                <ChevronRight />
              </IconButton>
              {/* <IconButton onClick={() => pageAction(-1)} disabled={currentPage === totalPages}>
                <LastPage />
              </IconButton> */}
            </Content>
          </Content>
        )
      }
    </Content>
  );
};

export default DataTable;
