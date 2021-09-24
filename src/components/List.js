import React from "react";

const List = (props) => {
    const pok = Array.from(props)
    // const displayItems = props.list.map(el => <li key={el.key}> {el.title} {el.artist}</li>)
    console.log(typeof(pok)); 
    // const displayItems = Array.from(props.list.map(el => <li key={el.key}> {el.title} {el.artist}</li>))

    
    

    return <ul style={{listStyleType: "none"}}>
            {/* {displayItems} */}
          </ul>
}

export default List