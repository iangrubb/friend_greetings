import logo from './logo.svg';
import './App.css';

import Greeting from './Greeting'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function App() {

  const friends = [
    {name: "Ray",
    color: "red", 
    background: "#dcc5c5"},
    {name: "Oscar",
    color: "orange", 
    background: "#ece1cb"},
    {name: "Gwen",
    color: "green", 
    background: "#bfe6bf"},
    {name: "Bob",
    color: "blue", 
    background: "#bebedc"},
    {name: "Marie",
    color: "magenta", 
    background: "#e4bfe4"},
  ]

  const randomFriends = shuffle(friends)

  return (
    <div className="App">
      <h1>Hello, <span className="world">World</span></h1>
      {randomFriends.map(f => <Greeting {...f} />)}
    </div>
  );
}

export default App;
