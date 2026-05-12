import { useState } from "react";


const Entry = (props) => {
    const [count, setCount] = useState(0);
    return(
        <>
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} className="main-image" alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img src="src/assets/marker.png" className="marker" alt="marker" />
                <span className="state">{props.state}</span>
                <a href={props.location}>View on Maps</a>
                <h2 className="entry-title">{props.name}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
        </>
    )
}


export default Entry;