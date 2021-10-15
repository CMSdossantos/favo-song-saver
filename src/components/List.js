import React from "react";

const List = (props) => {
  
  const displayItems = props.data.list.map(el => <li key={el.key}> {el.title} - {el.artist}</li>)
  
  // const displayItems = Array.from(props.data.list.map(el => <li key={el.key}> {el.title} {el.artist}</li>))
  
  
    

    return <ul style={{listStyleType: "none"}}>
            {displayItems}
          </ul>
}

export default List
