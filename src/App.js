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
    list: [{ key: 1, title: "hey ya", artist: "whitney", inputGenre: "Rock",inputRating: "3"},
    {key: 2, title: "ms jackson", artist: "whitney", inputGenre: "R&B",inputRating: "4"}]
  }
    
    this.handleChange = this.handleChange.bind(this)
    this.addSong = this.addSong.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
    
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
        artist: this.state.artist,
        inputGenre: this.state.inputGenre,
        inputRating: this.state.inputRating,
      })

    this.setState({list: tempList})
  }

deleteSong(id){
    const tempList2 = this.state.list;
    const decreasedList = tempList2.filter((ele) => ele.key !== id)
    
    this.setState({list: decreasedList})
  }

  

  render(){
      return (
        <div className="app">
          <Header state={this.state} handle={this.handleChange} addSong={this.addSong} />
          <List data={this.state} deleteSong={this.deleteSong}  />
          
        </div>
      )
  }
  
}

export default App;
