import React from "react";
import "./App.css";
import Card from "./Card.js";
import data from "./data.js";
import Header from "./Header.js";


function App(){

    const cards = data.map(item => {
    return (
        <Card 
            key = {item.id}
            item = {item}
        />
    )
    })
    return (
        <>
        <Header/>;
        <div className="container">
        {cards}
        </div>
      
        </>
    )
}

export default App;