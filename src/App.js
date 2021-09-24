import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header.js";
import List from "./components/List"

function App() {
  const myFormat = { inputOne: "",
                 inputTwo: "",
                 inputGenre: "",
                 inputRating: "",
                 list: [{ key: 1, title: "hey ya", artist: "whitney"}, {key: 2, title: "ms jackson", artist: "whitney"}],
                }

  const [displaySongs, setDisplaySongs] = useState(myFormat);

  //dadelijk editen

  return (
    <div className="App">
      <Header {...displaySongs} setter={(v) => setDisplaySongs(v)}/>
      <List {...displaySongs} setter={(v) => setDisplaySongs(v)} />
    </div>
  );
}

export default App;
