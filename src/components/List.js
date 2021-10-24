import React from "react";
import './App.css';

const List = (props) => {
  
  const displayItems = props.data.list.map(el => <li className="flexline" key={el.key}> {el.title} - {el.artist} 
  <span> Genre: {el.inputGenre} - Rating:{el.inputRating} <button onClick={() => props.deleteSong(el.key)}>x</button></span>
  </li>)
  
    return <ul className="containerflex">
            {displayItems}
          </ul>
}

export default List
