import React from "react";
import Modal from "../Modal/Modal"
import "./AboutUs.css";
export const AboutUs = ({onClose}) => {
  function handleClose() {
    onClose();
  }
  return (
    <Modal onClose={onClose}>
    <div className="about_us">
    <svg classname="aboutClose" onClick={handleClose} width="35" height="35" viewBox="0 0 46 46" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5425 17.3431L24.8856 23L30.5425 28.6569L28.6569 30.5425L23 24.8856L17.3431 30.5425L15.4575 28.6569L21.1144 23L15.4575 17.3431L17.3431 15.4575L23 21.1144L28.6569 15.4575L30.5425 17.3431Z" fill="#020202"/>
</svg>
      <div className="heading">
        <h2>About Gradientify</h2>
      </div>
      <img />
      <p>
        Add a description for the scenario and the users actions. Shouldn’t
        exceed two lines of text.Add a description for the scenario and the
        users actions. 
      </p>
      <div className="info">
       
        <h3>How can i use css gradient generator ?</h3>
        <p>
          Add a description for the scenario and the users actions. Shouldn’t
          exceed two lines of text.Add a description for the scenario and the
          users actions. Shouldn’t exceed two lines of text.Add a description
          for the scenario and the users actions. 
        </p>

        <h3>How can i use css gradient generator ?</h3>
        <p>
          Add a description for the scenario and the users actions. Shouldn’t
          exceed two lines of text.Add a description for the scenario and the
          users actions. Shouldn’t exceed two lines of text.Add a description
          for the scenario and the users actions. Shouldn’t exceed two lines of
          text.Add a description for the scenario and the users actions.
          Shouldn’t exceed two lines of text
        </p>
      </div>
    </div>
    </Modal>
  );
};
