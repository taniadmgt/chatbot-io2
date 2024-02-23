import chatbot from './views/chatbot';
import input from './views/input';
import navbar from './views/nav';
import bots from './views/bots';

import weather from weather; 

const Search = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.i = 0 ; 

    this.run();
  }

  onKeyUp() {
    const elInputSearch = document.querySelector('.input-search');
    const elDisplayInput = document.querySelector('div-display');

    elInputSearch.addEventListener('keyup', (event) => {
      const keyWord = elInputSearch.value;
      if (event.key = "Enter" || event.key === 13) {
        const newDiv = document.createElement("div");
        newDiv.id = `input${this.i}`;
        newDiv.innerHTML = keyWord;
        elDisplayInput.appendChild(newDiv);
        elInputSearch.value = '';  
        this.sayHello (keyWord);  
        this.i +=1; 
      }
    });

  }

  sayHello (input) {
    const elDisplayInput = document.querySelector('div-display');

    if ( input === "salutation" ) {
      const newDiv = document.createElement("div");
      newDiv.id = `response${this.i}`;
      newDiv.innerHTML = "salutation";
      elDisplayInput.appendChild(newDiv);
    }
  }

  render() {
    return `
    <header>
      ${navbar()}
    </header>
    <main>
      ${bots()}   
      ${chatbox()}
      ${input()}  
    </main>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.onKeyUp();
  }
};

export default chatbot;