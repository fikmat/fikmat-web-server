import { Example } from './scenes/example.js';

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);

async function getData() {
  return fetch('http://localhost:3000/api/data/get/game1')
    .then((response) => response.json())
    .then((responseJson) => { return responseJson });
}

async function setData(data) {
  return fetch('http://localhost:3000/api/data/set/game1', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((responseJson) => { return responseJson });
}

let data = await getData();
console.log('current score is ' + data.score);

data.score = Math.round(Math.random() * 100)
data = await setData(data);
console.log('score updated to ' + data.score);
