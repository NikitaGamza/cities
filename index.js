let char = null;
let collection = [];

const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); //предотвращает автоотправку?
  const city = document.getElementById('main__inp').value;
  if (collection.includes(city.toLowerCase())) {
    alert('Этот город уже был назван');
  } else if (
    (char == null || char == city[0].toLowerCase()) &&
    document.getElementById('main__inp').value != ''
  ) {
    let player = document.getElementById('player');
    if (player.innerHTML == '1') {
      player.innerHTML = '2';
    } else {
      player.innerHTML = '1';
    }

    let message = document.createElement('p');
    message.innerHTML = city;
    if (player.innerHTML == '1') {
      message.className = 'left';
    } else {
      message.className = 'right';
    }
    let chat = document.getElementById('main__chat');
    char = city[city.length - 1].toLowerCase();

    chat.appendChild(message);
    collection.push(city.toLowerCase());
  } else {
    alert(
      'Первая буква города должна совпадать с последней буквой предыдущего. Название города не должно быть пустым'
    );
  }
});

// function sayCity() {
const city = document.getElementById('main__inp').value;
if (collection.includes(city)) {
  alert('Этот город уже был назван');
} else if (
  (char == null || char == city[0].toLowerCase()) &&
  document.getElementById('main__inp').value != ''
) {
  let player = document.getElementById('player');
  if (player.innerHTML == '1') {
    player.innerHTML = '2';
  } else {
    player.innerHTML = '1';
  }

  let message = document.createElement('p');
  message.innerHTML = city;
  if (player.innerHTML == '1') {
    message.className = 'left';
  } else {
    message.className = 'right';
  }
  let chat = document.getElementById('main__chat');
  char = city[city.length - 1].toLowerCase();

  chat.appendChild(message);
  collection.push(city);
} else {
  alert(
    'Первая буква города должна совпадать с последней буквой предыдущего. Название города не должно быть пустым'
  );
}
// }
