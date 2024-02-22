export default (data) => {
  const {
    name: { first, last },
    picture: { large }, 
    description: { string },
  } = data.user
};

return `
  <ul class="list-group">
    <li class="list-group-item">First bot</li>
    <li class="list-group-item">Second bot</li>
    <li class="list-group-item">Third bot</li>
  </ul>
`