import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="profile picture" />
        <h1>{props.userName}</h1>
        <p>I am a frontent developer.I have created many mini projects</p>
        <button>view profile</button>
      </div>
    </div>
  );
};

export default Card;
