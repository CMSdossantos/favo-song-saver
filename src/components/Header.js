import React from "react"


const Header = (props) => {
    return (
        <div>
            <input type="text" name="title" placeholder="Title" onChange={(e)=>props.handle(e)}></input> 
            <input type="text" name="artist" placeholder="Artist" onChange={(e)=>props.handle(e)}></input>
            <select name="inputGenre" onChange={(e)=>props.handle(e)}>
                <option value="onbekend"> Genre</option>
                <option value="Rock"> Rocku</option>
                <option value="Rythem and Blues"> RnB</option>
            </select>
            <select name="inputRating" onChange={(e)=>props.handle(e)}> 
                <option value="-"> Rating</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
            </select>
            <button type="button" onClick={() => props.addSong()} >Add Song</button>
            <select name="categorie" >
                <option value="all">categorie:</option>
                <option value="rating"></option>
            </select>
            <button onClick={() => console.log("filter geklikt")} >Filter</button>
            
        </div>
    )
    
}

export default Header;