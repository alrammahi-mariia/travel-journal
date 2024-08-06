import React from "react";


export default function Card(props) {
    return (
    <div>
        <div className="entry">
        <img src={props.item.imgURL} alt={props.item.location}/>
        <div className="entry-content">
            <div className="location">
                <span className="country">{props.item.country}</span>
                <a href={props.item.googlemapsURL} className="view-map">View on Google Maps</a>
            </div>
            <h2>{props.item.location}</h2>
            <p className="date">{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
        </div>
        </div>
    </div>
    )
}
