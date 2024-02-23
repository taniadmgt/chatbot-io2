export default () => {
  const {
    name: { first, last },
    picture: { large }, 
    description: { string },
  } = data.user
};

return `
<div class="row col-12">
<div class="row card col-3" id="chatlist">
  <ol class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div id="benoit">
        <div><img src="https://static.wikia.nocookie.net/mario/images/7/7e/Bowser_-_Mario_Party_10.png/revision/latest?cb=20180403191653&path-prefix=fr" alt="placeholder" class="img-thumbnail rounded-circle" width="60"/></div>
        <div><h6>Benoit</h6><p>Bonjour!</p></div>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div id="benoit">
        <div><img src="https://static.wikia.nocookie.net/mario/images/b/bc/NSMBGoomba.png/revision/latest?cb=20170428120903&path-prefix=fr" alt="placeholder" class="img-thumbnail rounded-circle" width="60"/></div>
        <div><h6>Killian</h6><p>Aurevoir!</p></div>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div id="benoit">
        <div><img src="https://www.nautiljon.com/images/jeuxvideo_persos/00/79/toad_1897.webp" alt="placeholder" class="img-thumbnail rounded-circle" width="60"/></div>
        <div><h6>Ange</h6><p>Je suis en retard!</p></div>
      </div>
    </li>
  </ol>
`