import './index.scss';
import Router from './router';
import Chatbox from './controllers/chatbot';

const routes = [{
  url: './chatbot',
  controller: Chatbox
}];

new Router(routes);
