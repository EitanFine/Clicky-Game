import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.clickFriend(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    {/* <span onClick={() => props.clickFriend(props.id)} className="remove">
      𝘅
    </span> */}
    {/* <button type="button" className="btn btn-primary">Click Me!</button> */}
  </div>
);

export default FriendCard;
