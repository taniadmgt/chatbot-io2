import Router from './router';
import Chatbot from './controllers/chatbot';

import './index.scss';

const routes = [{
  url: '/chatbot',
  controller: Chatbot
}];

new Router(routes);
