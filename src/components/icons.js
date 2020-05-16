/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Content } from './styledComponents';

export const AtIcon = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    fill={color}
    width={size || '20px'}
    height={size || '20px'}
  >
    <g>
      <g>
        <path
          d="M255,0C114.06,0,0,114.05,0,255c0,139.895,113.025,257,255,257c140.644,0,257-115.914,257-257C512,112.87,394.743,0,255,0
			z M255,482.2C130.935,482.2,29.8,380.168,29.8,255C29.8,130.935,130.935,29.8,255,29.8c125.168,0,227.2,101.135,227.2,225.2
			C482.2,380.168,380.168,482.2,255,482.2z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M255,90c-90.981,0-165,74.019-165,165c0,91.323,73.867,167,165,167c36.874,0,74.175-12.393,102.339-34.001
			c6.573-5.043,7.813-14.459,2.77-21.032c-5.043-6.573-14.46-7.813-21.032-2.77C316.048,381.866,285.403,392.2,255,392.2
			c-74.439,0-135-61.658-135-137.2c0-74.439,60.561-135.2,135-135.2c75.542,0,137,60.761,137,135.2v15c0,16.542-13.458,30-30,30
			s-30-13.458-30-30c0-7.43,0-67.164,0-75c0-8.284-6.716-15-15-15s-15,6.716-15,15v0.951C288.454,185.622,272.068,180,255,180
			c-41.355,0-75,33.645-75,75s33.645,75,75,75c22.423,0,43.059-9.622,57.735-25.812C323.583,319.772,341.615,330,362,330
			c33.084,0,60-26.916,60-60v-15C422,163.746,346.21,90,255,90z M255,300.2c-24.813,0-45-20.387-45-45.2s20.187-45.2,45-45.2
			c25.477,0,47,20.807,47,45.2S280.477,300.2,255,300.2z"
        />
      </g>
    </g>
  </svg>
);

export const LockIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="-66 0 512 512"
    fill={color}
    width={size || '20px'}
    height={size || '20px'}
  >
    <g id="surface1">
      <path d="M 340 197.007812 L 340 150 C 340 67.289062 272.710938 0 190 0 C 107.289062 0 40 67.289062 40 150 L 40 197.007812 C 17.203125 201.652344 0 221.855469 0 246 L 0 302.769531 C 0 308.292969 4.476562 312.769531 10 312.769531 C 15.523438 312.769531 20 308.292969 20 302.769531 L 20 246 C 20 229.457031 33.457031 216 50 216 L 330 216 C 346.542969 216 360 229.457031 360 246 L 360 462 C 360 475.035156 351.640625 486.152344 340 490.28125 L 340 430 C 340 424.476562 335.523438 420 330 420 C 324.476562 420 320 424.476562 320 430 L 320 492 L 50 492 C 33.457031 492 20 478.542969 20 462 L 20 383 C 20 377.476562 15.523438 373 10 373 C 4.476562 373 0 377.476562 0 383 L 0 462 C 0 489.570312 22.429688 512 50 512 L 330 512 C 357.570312 512 380 489.570312 380 462 L 380 246 C 380 221.855469 362.796875 201.652344 340 197.007812 Z M 114 196 L 114 150 C 114 108.09375 148.09375 74 190 74 C 231.90625 74 266 108.09375 266 150 L 266 196 Z M 286 196 L 286 150 C 286 97.066406 242.933594 54 190 54 C 137.066406 54 94 97.066406 94 150 L 94 196 L 60 196 L 60 150 C 60 78.316406 118.316406 20 190 20 C 261.683594 20 320 78.316406 320 150 L 320 196 Z M 286 196 " />
      <path d="M 10 352.488281 C 12.628906 352.488281 15.210938 351.421875 17.070312 349.558594 C 18.929688 347.699219 20 345.121094 20 342.488281 C 20 339.859375 18.929688 337.277344 17.070312 335.421875 C 15.210938 333.558594 12.628906 332.488281 10 332.488281 C 7.371094 332.488281 4.789062 333.558594 2.929688 335.421875 C 1.070312 337.277344 0 339.859375 0 342.488281 C 0 345.121094 1.070312 347.699219 2.929688 349.558594 C 4.789062 351.421875 7.371094 352.488281 10 352.488281 Z M 10 352.488281 " />
      <path d="M 190 458 C 206.542969 458 220 444.542969 220 428 L 220 374.898438 C 235.023438 364.953125 244.128906 348.234375 244.128906 329.914062 C 244.128906 300.140625 219.902344 275.914062 190.128906 275.914062 C 160.351562 275.914062 136.128906 300.140625 136.128906 329.914062 C 136.128906 348.101562 145.132812 364.757812 160 374.726562 L 160 428 C 160 444.542969 173.457031 458 190 458 Z M 156.128906 329.914062 C 156.128906 311.164062 171.378906 295.914062 190.128906 295.914062 C 208.875 295.914062 224.128906 311.164062 224.128906 329.914062 C 224.128906 342.789062 216.980469 354.410156 205.476562 360.25 C 202.117188 361.953125 200 365.398438 200 369.167969 L 200 428 C 200 433.515625 195.515625 438 190 438 C 184.484375 438 180 433.515625 180 428 L 180 369.035156 C 180 365.292969 177.910156 361.863281 174.582031 360.148438 C 163.199219 354.28125 156.128906 342.695312 156.128906 329.914062 Z M 156.128906 329.914062 " />
      <path d="M 330 399 C 332.640625 399 335.210938 397.929688 337.070312 396.070312 C 338.929688 394.210938 340 391.640625 340 389 C 340 386.359375 338.929688 383.789062 337.070312 381.929688 C 335.210938 380.070312 332.640625 379 330 379 C 327.371094 379 324.789062 380.070312 322.929688 381.929688 C 321.070312 383.789062 320 386.371094 320 389 C 320 391.628906 321.070312 394.210938 322.929688 396.070312 C 324.789062 397.929688 327.371094 399 330 399 Z M 330 399 " />
    </g>
  </svg>
);

export const EmployeeIcon = ({ color, size }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    fill={color}
    width={size || '20px'}
    height={size || '20px'}
  >
    <g>
      <g>
        <path d="M310.7,260.177l-38.202-14.735l-21.927-21.926c-1.426-1.426-3.292-2.158-5.173-2.191v-17.918
          c10.377-11.025,17.75-25.021,20.668-40.801c0.006-0.007,0.013-0.015,0.02-0.021c1.91,0.113,3.838-0.027,5.744-0.417
          c10.306-2.11,17.787-11.678,17.787-22.751v-5.743c0-6.491-2.668-12.44-6.996-16.653c7.033-37.871,1.355-68.717-16.492-89.326
          C248.923,7.826,221.183-1.664,185.905,0.239c-32.856,1.776-53.958,16.993-60.433,22.358c-9.112,1.184-35.099,7.751-35.099,44.089
          c0,20.121,3.269,36.855,5.565,46.131c-7.733,3.615-12.934,11.686-12.934,20.942v5.657c0,11.073,7.48,20.641,17.788,22.751
          c1.904,0.39,3.835,0.53,5.743,0.417c0.007,0.007,0.014,0.015,0.02,0.022c2.918,15.779,10.291,29.775,20.668,40.8v17.918
          c-1.881,0.033-3.747,0.765-5.173,2.191l-21.926,21.926l-42.969,16.574c-20.664,7.97-33.951,28.193-33.065,50.323l6.103,152.379
          c0.162,4.037,3.485,7.2,7.489,7.2c0.102,0,0.204-0.002,0.306-0.006c4.139-0.166,7.359-3.655,7.194-7.794L39.079,311.74
          c-0.162-4.05,0.349-8.009,1.442-11.754l24.362,24.362c6.935,6.935,10.754,16.156,10.754,25.963v114.108c0,4.142,3.358,7.5,7.5,7.5
          s7.5-3.358,7.5-7.5V350.311c0-13.814-5.379-26.802-15.148-36.57L48,286.252c3.852-4.455,8.797-8.019,14.554-10.24l40.091-15.464
          l30.606,45.908c3.71,5.566,9.656,9.136,16.313,9.795c0.741,0.073,1.48,0.109,2.216,0.109c4.091,0,8.051-1.145,11.505-3.247
          l-6.573,150.979c-0.18,4.138,3.028,7.639,7.167,7.819c0.111,0.005,0.222,0.007,0.332,0.007c3.992,0,7.312-3.146,7.487-7.174
          l6.095-139.989h17.043l6.095,139.989c0.175,4.027,3.495,7.174,7.487,7.174c0.11,0,0.221-0.002,0.332-0.007
          c4.138-0.18,7.347-3.681,7.167-7.819l-6.573-150.979c3.454,2.102,7.413,3.247,11.504,3.247c0.735,0,1.475-0.036,2.215-0.109
          c6.651-0.657,12.597-4.228,16.308-9.794l30.606-45.908l35.323,13.625c0.888,0.342,1.8,0.504,2.698,0.504
          c3.01,0,5.851-1.826,6.999-4.803C316.489,266.01,314.564,261.669,310.7,260.177z M121.289,159.797
          c-1.356-7.377-8.192-12.728-15.553-12.192c-0.632,0.045-1.284,0.001-1.937-0.132c-3.304-0.676-5.795-4.14-5.795-8.056v-5.657
          c0-3.832,2.579-7.286,5.871-7.864c2.771-0.486,5.424,0.532,7.106,2.725c1.397,1.821,3.259,3.123,5.39,3.767
          c3.113,0.939,6.549,0.388,9.19-1.477c6.096-4.303,11.263-9.761,15.356-16.221c2.217-3.499,1.178-8.133-2.32-10.35
          c-3.501-2.219-8.133-1.178-10.35,2.32c-2.334,3.683-5.126,6.919-8.329,9.656c-2.552-2.248-5.568-3.857-8.808-4.744
          c-2.009-7.565-5.737-24.366-5.737-44.887c0-12.215,3.786-20.805,11.254-25.528c5.813-3.678,11.951-3.819,11.953-3.82
          c1.918,0,3.784-0.755,5.177-2.073c0.192-0.183,19.642-18.247,52.957-20.047c30.478-1.651,54.017,6.063,68.074,22.296
          c14.24,16.445,18.933,41.712,13.692,73.323c-2.254-0.105-4.753,0.059-7.238,0.495l-7.516-18.051
          c-1.439-3.456-5.208-5.321-8.828-4.371c-0.732,0.192-73.627,18.791-104.363-19.472c-2.593-3.229-7.314-3.745-10.544-1.15
          c-3.229,2.594-3.745,7.314-1.15,10.544c31.177,38.815,93.263,30.113,113.46,26.035l5.842,14.03
          c2.389,5.736,8.499,8.869,14.526,7.449c2.363-0.557,4.934-0.658,6.056-0.435c3.358,0.668,5.89,4.005,5.89,7.763v5.743
          c0,3.917-2.492,7.38-5.794,8.056c-0.655,0.134-1.305,0.178-1.938,0.132c-7.358-0.538-14.198,4.815-15.552,12.193
          c-5.764,31.378-33.109,54.152-65.021,54.152C154.397,213.949,127.052,191.175,121.289,159.797z M156.872,299.24
          c-1.541,1.54-3.668,2.301-5.834,2.085c-2.167-0.214-4.102-1.376-5.31-3.188l-30.834-46.252l12.8-12.8l47.644,41.688
          L156.872,299.24z M178.441,309.756l0.495-11.368l7.373-7.374l7.374,7.374l0.495,11.368H178.441z M186.309,270.442l-44.088-38.577
          v-15.947c12.772,8.276,27.951,13.032,44.088,13.032s31.316-4.756,44.087-13.032v15.947L186.309,270.442z M226.892,298.136
          c-1.209,1.813-3.144,2.975-5.311,3.189c-1.274,0.129-3.724,0.022-5.832-2.085l-18.466-18.467l47.643-41.688l12.8,12.8
          L226.892,298.136z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M487.951,352.193c0-17.396-14.152-31.548-31.548-31.548H407.79v-16.548c0-12.976-10.557-23.532-23.532-23.532H336.16
          c-12.976,0-23.532,10.557-23.532,23.532v16.548h-48.613c-17.396,0-31.548,14.152-31.548,31.548v22.267
          c0,8.209,2.764,16.092,8.016,23.382v83.424c0,16.946,13.787,30.733,30.733,30.733h177.987c16.946,0,30.733-13.787,30.733-30.733
          v-83.424c5.252-7.291,8.016-15.174,8.016-23.383L487.951,352.193L487.951,352.193z M327.627,304.096L327.627,304.096
          c0.001-4.705,3.829-8.532,8.533-8.532h48.097c4.705,0,8.532,3.828,8.532,8.532v16.548h-65.162V304.096z M472.95,374.461
          c0,12.874-12.182,25.641-33.097,35.178v-1.332c0-4.142-3.358-7.5-7.5-7.5h-32.064c-4.142,0-7.5,3.358-7.5,7.5v24.048
          c0,12.976,10.557,23.532,23.532,23.532s23.532-10.557,23.532-23.532v-6.414c9.738-3.896,18.145-8.43,25.081-13.467v68.793
          c0.001,8.675-7.056,15.732-15.732,15.732H271.216c-8.675,0-15.733-7.058-15.733-15.733v-68.793
          c6.936,5.037,15.342,9.571,25.081,13.468v6.414c0,12.976,10.557,23.532,23.532,23.532c11.145,0,20.499-7.791,22.918-18.211
          c10.769,1.439,21.895,2.179,33.195,2.179c2.74,0,5.517-0.044,8.253-0.131c4.14-0.131,7.39-3.594,7.258-7.734
          c-0.131-4.14-3.564-7.401-7.734-7.258c-2.579,0.082-5.195,0.123-7.778,0.123c-11.119,0-22.046-0.757-32.581-2.232v-14.316
          c0-4.142-3.358-7.5-7.5-7.5h-32.064c-4.142,0-7.5,3.358-7.5,7.5v1.332c-20.915-9.537-33.097-22.305-33.097-35.178v-22.267
          c0-9.125,7.423-16.548,16.548-16.548h192.388c9.125,0,16.548,7.423,16.548,16.548V374.461z M424.855,415.806v16.548
          c0,4.705-3.828,8.532-8.532,8.532s-8.532-3.828-8.532-8.532v-16.548H424.855z M295.563,432.354v-16.548h17.064v16.548
          c0,4.705-3.828,8.532-8.532,8.532S295.563,437.059,295.563,432.354z"
        />
      </g>
    </g>
  </svg>
);

export const ReportIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    fill={color}
    width={size || '20px'}
    height={size || '20px'}
  >
    <g>
      <g>
        <path d="M472,336c0.057-61.798-49.993-111.943-111.792-112c-0.069,0-0.139,0-0.208,0c-5.357,0.038-10.705,0.466-16,1.28V40
          c0-4.418-3.582-8-8-8h-96V16c0-8.837-7.163-16-16-16h-96c-8.837,0-16,7.163-16,16v16H16c-4.418,0-8,3.582-8,8v432
          c0,4.418,3.582,8,8,8h320c4.418,0,8-3.582,8-8v-25.28c47.793,7.345,94.814-17.221,116.08-60.648
          C467.927,370.548,472.01,353.395,472,336L472,336z M448.194,298.019c0.258,0.598,0.509,1.198,0.754,1.801l-85.004,26.58
          l-41.904-78.552C370.731,226.866,427.212,249.328,448.194,298.019z M128,16h96v48h-96V16z M328,464H24V48h88v16
          c0,8.837,7.163,16,16,16h96c8.837,0,16-7.163,16-16V48h88v180.888c-7.164,2.063-14.1,4.845-20.704,8.304
          c-54.562,29.083-75.217,96.891-46.134,151.453c14.08,26.414,38.151,46.09,66.838,54.634V464z M360,432L360,432
          c-53.019-0.016-95.987-43.009-95.971-96.029c0.01-32.576,16.538-62.924,43.899-80.603l45.016,84.4l0.056,0.08
          c0.128,0.232,0.312,0.416,0.456,0.632c0.262,0.411,0.559,0.799,0.888,1.16l0.104,0.112c0.179,0.147,0.366,0.283,0.56,0.408
          c0.372,0.303,0.771,0.571,1.192,0.8c0.08,0.04,0.136,0.112,0.224,0.16l85.488,42.744C424.607,414.562,393.512,432.076,360,432z
          M449.08,371.6l-67.752-33.88l10.856-3.4l61.528-19.2c1.522,6.856,2.289,13.857,2.288,20.88
          C456.013,348.202,453.663,360.291,449.08,371.6z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M154.48,120.736c-21.624-27.87-61.748-32.933-89.618-11.309c-4.917,3.815-9.25,8.329-12.862,13.397l6.504,4.656
          l-6.512-4.656c-20.563,28.711-13.957,68.656,14.755,89.219C77.61,219.823,90.638,224.004,104,224c35.33-0.04,63.96-28.67,64-64
          C168.033,145.765,163.271,131.933,154.48,120.736z M112,112.744c9.114,1.538,17.58,5.709,24.352,12l-12.92,10.048
          c-3.384-2.654-7.274-4.589-11.432-5.688V112.744z M103.846,144.007c4.981-0.023,9.686,2.287,12.714,6.241
          c2.207,2.773,3.418,6.208,3.44,9.752c0,8.837-7.163,16-16,16s-16-7.163-16-16C87.959,151.208,95.054,144.047,103.846,144.007z
          M96,112.8v16.296c-4.592,1.203-8.86,3.411-12.496,6.464l-13.256-9.464C77.262,119.123,86.254,114.48,96,112.8z M95.721,207.003
          C72.858,203,56.134,183.211,56,160c0.003-7.269,1.675-14.44,4.888-20.96l13.344,9.528C72.783,152.207,72.026,156.084,72,160
          c-0.022,17.638,14.258,31.954,31.896,31.976c14.587,0.018,27.332-9.849,30.968-23.976h16.416
          C146.708,194.112,121.834,211.575,95.721,207.003z M134.856,152c-0.411-1.576-0.946-3.117-1.6-4.608l13.008-10.112
          c2.494,4.591,4.205,9.566,5.064,14.72H134.856z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect x="200" y="104" width="104" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="200" y="136" width="104" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="200" y="168" width="104" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="200" y="200" width="56" height="16" />
      </g>
    </g>
    <g>
      <g>
        <path d="M72,392H48c-4.418,0-8,3.582-8,8v40c0,4.418,3.582,8,8,8h24c4.418,0,8-3.582,8-8v-40C80,395.582,76.418,392,72,392z
          M64,432h-8v-24h8V432z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M120,360H96c-4.418,0-8,3.582-8,8v72c0,4.418,3.582,8,8,8h24c4.418,0,8-3.582,8-8v-72C128,363.582,124.418,360,120,360z
          M112,432h-8v-56h8V432z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M168,320h-24c-4.418,0-8,3.582-8,8v112c0,4.418,3.582,8,8,8h24c4.418,0,8-3.582,8-8V328C176,323.582,172.418,320,168,320z
          M160,432h-8v-96h8V432z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M216,280h-24c-4.418,0-8,3.582-8,8v152c0,4.418,3.582,8,8,8h24c4.418,0,8-3.582,8-8V288C224,283.582,220.418,280,216,280z
          M208,432h-8V296h8V432z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect x="40" y="240" width="64" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="40" y="264" width="64" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect x="40" y="288" width="32" height="16" />
      </g>
    </g>
  </svg>
);

export const NoDataIcon = ({
  color, className, width, height
}) => (
  <div className={className}>
    <Content flex justify="center">
      <svg
        id="f20e0c25-d928-42cc-98d1-13cc230663ea"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 820.16 780.81"
      >
        <defs>
          <linearGradient id="07332201-7176-49c2-9908-6dc4a39c4716" x1="539.63" y1="734.6" x2="539.63" y2="151.19" gradientTransform="translate(-3.62 1.57)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="gray" stopOpacity="0.25" />
            <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
            <stop offset="1" stopColor="gray" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="0ee1ab3f-7ba2-4205-9d4a-9606ad702253" x1="540.17" y1="180.2" x2="540.17" y2="130.75" gradientTransform="translate(-63.92 7.85)" />
          <linearGradient id="abca9755-bed1-4a97-b027-7f02ee3ffa09" x1="540.17" y1="140.86" x2="540.17" y2="82.43" gradientTransform="translate(-84.51 124.6) rotate(-12.11)" />
          <linearGradient id="2632d424-e666-4ee4-9508-a494957e14ab" x1="476.4" y1="710.53" x2="476.4" y2="127.12" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" />
          <linearGradient id="97571ef7-1c83-4e06-b701-c2e47e77dca3" x1="476.94" y1="156.13" x2="476.94" y2="106.68" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" />
          <linearGradient id="7d32e13e-a0c7-49c4-af0e-066a2f8cb76e" x1="666.86" y1="176.39" x2="666.86" y2="117.95" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" />
        </defs>
        <title>no data</title>
        <rect x="317.5" y="142.55" width="437.02" height="603.82" transform="translate(-271.22 62.72) rotate(-12.11)" fill="#e0e0e0" />
        <g opacity="0.5">
          <rect x="324.89" y="152.76" width="422.25" height="583.41" transform="translate(-271.22 62.72) rotate(-12.11)" fill="url(#07332201-7176-49c2-9908-6dc4a39c4716)" />
        </g>
        <rect x="329.81" y="157.1" width="411.5" height="570.52" transform="translate(-270.79 62.58) rotate(-12.11)" fill="#fafafa" />
        <rect x="374.18" y="138.6" width="204.14" height="49.45" transform="translate(-213.58 43.93) rotate(-12.11)" fill={color ? '#daa520' : 'url(#0ee1ab3f-7ba2-4205-9d4a-9606ad702253)'} />
        <path d="M460.93,91.9c-15.41,3.31-25.16,18.78-21.77,34.55s18.62,25.89,34,22.58,25.16-18.78,21.77-34.55S476.34,88.59,460.93,91.9ZM470.6,137A16.86,16.86,0,1,1,483.16,117,16.66,16.66,0,0,1,470.6,137Z" transform="translate(-189.92 -59.59)" fill="url(#abca9755-bed1-4a97-b027-7f02ee3ffa09)" />
        <rect x="375.66" y="136.55" width="199.84" height="47.27" transform="translate(-212.94 43.72) rotate(-12.11)" fill={color || '#0b2d40'} />
        <path d="M460.93,91.9a27.93,27.93,0,1,0,33.17,21.45A27.93,27.93,0,0,0,460.93,91.9ZM470.17,135a16.12,16.12,0,1,1,12.38-19.14A16.12,16.12,0,0,1,470.17,135Z" transform="translate(-189.92 -59.59)" fill={color || '#0b2d40'} />
        <rect x="257.89" y="116.91" width="437.02" height="603.82" fill="#e0e0e0" />
        <g opacity="0.5">
          <rect x="265.28" y="127.12" width="422.25" height="583.41" fill={color || 'url(#2632d424-e666-4ee4-9508-a494957e14ab)'} />
        </g>
        <rect x="270.65" y="131.42" width="411.5" height="570.52" fill="#fff" />
        <rect x="374.87" y="106.68" width="204.14" height="49.45" fill={color ? '#daa520' : 'url(#97571ef7-1c83-4e06-b701-c2e47e77dca3)'} />
        <path d="M666.86,118c-15.76,0-28.54,13.08-28.54,29.22s12.78,29.22,28.54,29.22,28.54-13.08,28.54-29.22S682.62,118,666.86,118Zm0,46.08a16.86,16.86,0,1,1,16.46-16.86A16.66,16.66,0,0,1,666.86,164Z" transform="translate(-189.92 -59.59)" fill="url(#7d32e13e-a0c7-49c4-af0e-066a2f8cb76e)" />
        <rect x="377.02" y="104.56" width="199.84" height="47.27" fill={color || '#0b2d40'} />
        <path d="M666.86,118a27.93,27.93,0,1,0,27.93,27.93A27.93,27.93,0,0,0,666.86,118Zm0,44.05A16.12,16.12,0,1,1,683,145.89,16.12,16.12,0,0,1,666.86,162Z" transform="translate(-189.92 -59.59)" fill={color || '#0b2d40'} />
        <g opacity="0.5">
          <rect x="15.27" y="737.05" width="3.76" height="21.33" fill={color || '#234253'} />
          <rect x="205.19" y="796.65" width="3.76" height="21.33" transform="translate(824.47 540.65) rotate(90)" fill={color || '#234253'} />
        </g>
        <g opacity="0.5">
          <rect x="451.49" width="3.76" height="21.33" fill={color || '#234253'} />
          <rect x="641.4" y="59.59" width="3.76" height="21.33" transform="translate(523.63 -632.62) rotate(90)" fill={color || '#234253'} />
        </g>
        <path d="M961,832.15a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45,4.61,4.61,0,0,1,5.57-2.57,2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,961,832.15Z" transform="translate(-189.92 -59.59)" fill="#4d8af0" opacity="0.5" />
        <path d="M326.59,627.09a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45A4.61,4.61,0,0,1,325,631.4a2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,326.59,627.09Z" transform="translate(-189.92 -59.59)" fill="#91a0a9" opacity="0.5" />
        <path d="M855,127.77a4.61,4.61,0,0,1-2.57-5.57,2.22,2.22,0,0,0,.1-.51h0a2.31,2.31,0,0,0-4.15-1.53h0a2.22,2.22,0,0,0-.26.45,4.61,4.61,0,0,1-5.57,2.57,2.22,2.22,0,0,0-.51-.1h0a2.31,2.31,0,0,0-1.53,4.15h0a2.22,2.22,0,0,0,.45.26,4.61,4.61,0,0,1,2.57,5.57,2.22,2.22,0,0,0-.1.51h0a2.31,2.31,0,0,0,4.15,1.53h0a2.22,2.22,0,0,0,.26-.45,4.61,4.61,0,0,1,5.57-2.57,2.22,2.22,0,0,0,.51.1h0a2.31,2.31,0,0,0,1.53-4.15h0A2.22,2.22,0,0,0,855,127.77Z" transform="translate(-189.92 -59.59)" fill="#91a0a9" opacity="0.5" />
        <circle cx="812.64" cy="314.47" r="7.53" fill={color || '#0b2d40'} opacity="0.5" />
        <circle cx="230.73" cy="746.65" r="7.53" fill="#4d8af0" opacity="0.5" />
        <circle cx="735.31" cy="477.23" r="7.53" fill={color || '#0b2d40'} opacity="0.5" />
        <circle cx="87.14" cy="96.35" r="7.53" fill="#4d8af0" opacity="0.5" />
        <circle cx="7.53" cy="301.76" r="7.53" fill={color || '#0b2d40'} opacity="0.5" />
      </svg>
    </Content>
    <Content flex justify="center">
      <h5 style={{ fontSize: '0.8em', color: '#444444' }}>No Record Available</h5>
    </Content>
  </div>

);
