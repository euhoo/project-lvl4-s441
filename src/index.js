import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import chat from './components/index';

// import faker from 'faker';
// import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { gon } = window;
chat(gon);