import Logo from '../assets/icone.jpg';

export default () => (`
  <nav class="navbar navbar-expand-lg bg-black p-2">
    <div class="container-fluid">
      <a class="navbar-brand text-light " href="#"><img src="${Logo}" width="60">  Chatbot-io</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2 p-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success px-2" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
`);
