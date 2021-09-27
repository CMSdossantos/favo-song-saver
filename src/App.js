import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header.js";
import List from "./components/List"

class App extends Component {
  constructor(){
    super()
    this.state = { title: "",
                 artist: "",
                 inputGenre: "",
                 inputRating: "",
                 list: [{ key: 1, title: "hey ya", artist: "whitney"}, {key: 2, title: "ms jackson", artist: "whitney"}],
                }
    this.handleChange = this.handleChange.bind(this)
    this.addSong = this.addSong.bind(this)
  }
  

  handleChange(event) {
    const {name,value} = event.target
    this.setState({ [name] : value})
  }

  addSong(){
    const tempList = this.state.list;
    const getIDs = tempList.map((ele) => ele.key )
    const getUniqKey = () => {
      for(let i=0; i<= getIDs.length; i++){
        if(!getIDs.includes(i+1)){ return i+1}
      }
    }

    tempList.push(
      { key: getUniqKey(),
        title: this.state.title,
        artist: this.state.artist
      })

    this.setState({list: tempList})

    console.log(getUniqKey());
  }

  

  //dadelijk editen
  render(){
      return (
        <div className="App">
          <Header state={this.state} handle={this.handleChange} addSong={this.addSong} />
          <List data={this.state}  />
        </div>
      )
  }
  
}

export default App;
