import Router from './router';
import Chatbot from './controllers/chatbot';

import './index.scss';

const routes = [{
  url: '/',
  controller: Chatbot
}];

new Router(routes);
