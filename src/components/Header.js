import React from "react"


const Header = (props) => {
    const {setter} = props;
    console.log(props);
//line 9 nog aanpassen
    return (
        <div>
            <input type="text" placeholder="title" onChange={e => setter({...props, inputOne: e.target.value})}></input> 
            <input type="text"  placeholder="Artist" onChange={e => setter({...props, inputTwo: e.target.value})}></input>
            <select onChange={e => setter({...props, inputGenre: e.target.value})}>
                <option value="onbekend"> Genre</option>
                <option value="Rock"> Rocku</option>
                <option value="Rythem and Blues"> RnB</option>
            </select>
            <select onChange={e => setter({...props, inputRating: e.target.value})}> 
                <option value="-"> Rating</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
            </select>
            <button onClick={()=> setter({...props, list: props.list.push({key: props.list.length+1, title: props.inputOne,
            artist: props.inputTwo})})} >Add Song</button>
            <button onClick={() => console.log(props)} >check</button>

        </div>
    )
}

export default Header;