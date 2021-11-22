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
    filterGenre: "",
    filterRating: "",
    list: [{ key: 1, title: "love you", artist: "whitney", inputGenre: "Rock",inputRating: "3"},
    {key: 2, title: "ms jackson", artist: "outcast", inputGenre: "RnB",inputRating: "4"}],
    dataBase: [{ key: 1, title: "love you", artist: "whitney", inputGenre: "Rock",inputRating: "3"},
    {key: 2, title: "ms jackson", artist: "outcast", inputGenre: "RnB",inputRating: "4"}]
  }
    
    this.handleChange = this.handleChange.bind(this)
    this.addSong = this.addSong.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
    this.filterSong = this.filterSong.bind(this)
    
  }
  
  handleChange(event) {
    const {name,value} = event.target
    this.setState({ [name] : value})
  }

addSong(){
    const tempList = this.state.dataBase;
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

    this.setState({
      title: "",
      artist: "",
      inputGenre: "",
      inputRating: "",
      list: tempList, dataBase: tempList})
  }

deleteSong(id){
    const tempList2 = this.state.dataBase;
    const decreasedList = tempList2.filter((ele) => ele.key !== id)
    
    this.setState({list: decreasedList, dataBase: decreasedList})
  }

filterSong(e){
  let firstTime = true;
  if(firstTime){alert("all your inputs wil be considered into the filter"); firstTime = false}
  const tempList3 = this.state.dataBase;
  const filteredArray = tempList3.filter((ele) => {
    if(
      ele.title.includes(this.state.title) &&
      ele.artist.includes(this.state.artist) &&
      ele.inputGenre.includes(this.state.inputGenre) &&
      ele.inputRating.includes(this.state.inputRating)   
    )
    { return true } else {return false}
    
  })
  this.setState({
    list: filteredArray});
}

  render(){
      return (
        <div className="app">
          <Header state={this.state} handle={this.handleChange} addSong={this.addSong} filterSong={this.filterSong} />
          <List data={this.state} deleteSong={this.deleteSong}  />
          
        </div>
      )
  }
}

export default App;
