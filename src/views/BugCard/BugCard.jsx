import React from "react";
import "./BugCard.css";

function BugCard(props) {
  const { name, priority, version } = props.bug;
  console.log("--------", props.name);
  function Clicked() {
    props.clicked(props.name);
  }
  console.log("name props -----", name);
  return (
    <div className="bug-card" onClick={Clicked}>
      {" "}
      <h2 className="name">{name}</h2>
      <h4 className="priority">{priority}</h4>
      <h5 className="version">{version}</h5>
    </div>
  );
}

export default BugCard;
