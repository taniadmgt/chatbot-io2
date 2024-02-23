import Router from './router';
import Chatbot from './controllers/chatbot';

import './index.css';

const routes = [{
  url: '/chatbot',
  controller: Chatbot
}];

new Router(routes);
