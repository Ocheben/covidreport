/* eslint-disable import/prefer-default-export */
export const APIS = {
  baseUrl: 'https://sams.com.ng',
  calculateSub: {
    method: 'GET',
    path: '/sams-web/api/v2/subscriptions/calculation/'
  },
  login: {
    method: 'POST',
    path: '/sams-api/resources/auth/token'
  },
  initSignup: {
    method: 'POST',
    path: '/sams-api/resources/registration/email'
  },
  initReset: {
    method: 'POST',
    path: '/sams-api/resources/auth/initreset'
  },
  passwordReset: {
    method: 'POST',
    path: '/sams-api/resources/auth/passwordreset'
  },
  verifyOtp: {
    method: 'POST',
    path: '/sams-api/resources/registration'
  },
  getDashboard: {
    method: 'GET',
    path: ({
      personnel, date, location, employeeType
    }) => `/sams-api/resources/dashboard/${personnel}?date=${date}${location ? `&location=${location}` : ''}${employeeType ? `&employeeType=${employeeType}` : '&employeeType=0'}`
  },
  getCallout: {
    method: 'GET',
    path: ({
      date, location, type
    }) => `/sams-api/resources/dashboard/callout?date=${date}${location ? `&location=${location}` : ''}${type ? `&type=${type}` : '&type=0'}`
  },
  getMapData: {
    method: 'GET',
    path: ({
      personnel, date, location, employeeType
    }) => `/sams-api/resources/dashboard/map?date=${date}${location ? `&location=${location}` : ''}${employeeType ? `&employeeType=${employeeType}` : '&employeeType=0'}`
  },
  getPercent: {
    method: 'GET',
    path: (data) => {
      const {
        startdate, enddate, location, worktime, workgroup, employee, includeSaturdays, includeSundays, page, searchname, download, reportType, employeeType
      } = data;
      return `/sams-api/resources/${reportType || 'percentage'}${download ? '/download' : ''}?employeeType=${employeeType || 0}&startdate=${startdate}&enddate=${enddate}${location ? `&location=${location}` : ''}${worktime ? `&worktime=${worktime}` : ''}${workgroup ? `&workgroup=${workgroup}` : ''}${employee ? `&employee=${employee}` : ''}${includeSaturdays ? `&includeSaturdays=${includeSaturdays}` : ''}${includeSundays ? `&includeSundays=${includeSundays}` : ''}${searchname ? `&searchname=${searchname}` : ''}${page ? `&page=${page}&action=next` : ''}`;
    }
  },
  getParams: {
    method: 'GET',
    path: '/sams-api/resources/get/parameters'
  },
  getWorkTime: {
    method: 'GET',
    path: '/sams-api/resources/worktime'
  },
  getWorkGroup: {
    method: 'GET',
    path: '/sams-api/resources/workgroups'
  },
  getLocation: {
    method: 'GET',
    path: '/sams-api/resources/locations'
  },
  getEmployees: {
    method: 'GET',
    path: (data) => {
      const {
        workgroup, worktime, location, captureStatus, searchname, page, active
      } = data;
      return `/sams-api/resources/employees/record${page ? `?page=${page}&action=next` : '?page=0'}${workgroup ? `&workgroup=${workgroup}` : ''}${worktime ? `&worktime=${worktime}` : ''}${location ? `&location=${location}` : ''}${captureStatus ? `&captured=${captureStatus}` : ''}${active ? `&active=${active}` : ''}${searchname ? `&searchname=${searchname}` : ''}`;
    }
  },
  getGuardians: {
    method: 'GET',
    path: (data) => {
      const {
        search, page
      } = data;
      return `/sams-api/resources/guardians${page ? `?page=${page}&action=next` : '?page=0'}${search ? `&search=${search}` : ''}`;
    }
  },
  getWards: {
    method: 'GET',
    path: guardianId => `/sams-api/resources/guardians/wards/${guardianId || ''}`
  },
  getStudents: {
    method: 'GET',
    path: (data) => {
      const {
        workgroup, worktime, location, captureStatus, page
      } = data;
      return `/sams-api/resources/students/${workgroup || 0}/${worktime || 0}/${location || 0}/${captureStatus || 2}${page ? `?page=${page}&action=next` : '?page=0'}`;
    }
  },
  addEmployee: {
    method: 'POST',
    path: '/sams-api/resources/employees'
  },
  addGuardian: {
    method: 'POST',
    path: '/sams-api/resources/guardians'
  },
  addStudent: {
    method: 'POST',
    path: '/sams-api/resources/students'
  },
  getOutOfOffice: {
    method: 'GET',
    path: '/sams-api/resources/outofoffice'
  },
  getAbsentees: {
    method: 'GET',
    path: (data) => {
      const {
        location, worktime, workgroup, page, searchname, outofoffice
      } = data;
      return `/sams-api/resources/absentees?page=${page || 0}&action=next${location ? `&location=${location}` : ''}${outofoffice ? `&outofoffice=${outofoffice}` : ''}${worktime ? `&worktime=${worktime}` : ''}${workgroup ? `&workgroup=${workgroup}` : ''}${searchname ? `&search=${searchname}` : ''}`;
    }
  },
  addAbsentee: {
    method: 'POST',
    path: '/sams-api/resources/absentees'
  },
  getSub: {
    method: 'GET',
    path: '/sams-api/resources/subscription'
  },
  getSubCost: {
    method: 'POST',
    path: '/sams-api/resources/subscription/fees'
  },
  getTerminals: {
    method: 'GET',
    path: page => `/sams-api/resources/terminal${page ? `?page=${page}&action=next` : '?page=0'}`
  },
  getAllEmployees: {
    method: 'GET',
    path: '/sams-api/resources/get/employee'
  }
};
