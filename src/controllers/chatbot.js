import viewNav from '../views/nav';
import viewBar from '../views/bar';
import viewListBots from '../views/chatbot/list-bots';
import viewMessage from '../views/chatbot/message-me';
import viewMessageBots from '../views/chatbot/message-bots';

const Chatbox = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      <div class="row">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="row">
        <div class="col-3">
          ${viewListBots()}
        </div>
        <div class="col-9 overflow-hidden bg-gradient">
          ${viewMessageBots()}
          ${viewMessage()}
          ${viewBar()}
        </div> 
      </div>   
    `;
  }

  // onKeyUp() {
  //   const elInputSearch = document.querySelector('.input-search');
  //   const elDisplayInput = document.querySelector('div-display');

  //   elInputSearch.addEventListener('keyup', (event) => {
  //     const keyWord = elInputSearch.value;
  //     if (event.keyWord === keyWord) {
  //       const newDiv = document.createElement('div');
  //       newDiv.id = `input${this.i}`;
  //       newDiv.innerHTML = keyWord;
  //       elDisplayInput.appendChild(newDiv);
  //       elInputSearch.value = '';
  //       this.sayHello(keyWord);
  //       this.i += 1;
  //     }
  //   });
  // }

  sayHello(input) {
    const elDisplayInput = document.querySelector('div-display');

    if (input === 'salutation') {
      const newDiv = document.createElement('div');
      newDiv.id = `response${this.i}`;
      newDiv.innerHTML = 'salutation';
      elDisplayInput.appendChild(newDiv);
    }
  }

  run() {
    this.el.innerHTML = this.render();
    // this.onKeyUp();
  }
};

export default Chatbox;
