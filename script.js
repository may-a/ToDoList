const createListItem = (e) => {
  const input = document.querySelector('input').value;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const button = document.createElement('a');

  li.className = 'ph3 pv3 bb b--light-silver';
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);

  button.innerHTML = 'Complete';
  button.className = 'f6 link dim br1 ba ph3 pv2 mb2 dib dark-green';
  li.appendChild(button);

  li.onclick = () => {
    li.className = 'strike ph3 pv3 bb b--light-silver';
  }
  button.onclick = () => {
    ul.removeChild(li);
  }
}

const removeListItem = () => {
  console.log('remove list item');
}

// const clearField = () => {
//   document.querySelector('input').reset();
// }
