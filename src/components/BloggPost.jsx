import React from "react";
import {BiMap} from "react-icons/bi";

export default function BloggPost(props) {
  let data = props.travelData; 

  return(
    <div className="post">

      <img src={data.image} alt={`Photo of ${data.title}`} className="travel-photo"/>

      <div className="post-text">
        <div className="article-head">
          <div className="location-container">
            <p className="location"><BiMap />{data.location}</p>
            <a href={data.googleMapsUrl}>view on google maps</a>
          </div>
          <h2>{data.title}</h2>
        </div>
        
        <article >
          <p className="dates">{`${data.startDate} - ${data.endDate}`}</p>
          <p>{data.description}</p>
        </article>
      </div>

    </div>
  )
 
}