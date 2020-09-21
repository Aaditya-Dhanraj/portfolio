import React from "react";
import emailjs from "emailjs-com";
import "./section4.css";

export default function Section4() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ofaomi4",
        e.target,
        "user_6cEQbBRXV0kY8SCLOa7D2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="sec4" className="section4">
      <div className="outter2">
        <span
          className="inBox2"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bolder",
            fontSize: "1.8em",
            marginLeft: "8px",
          }}
        >
          Contact Me
        </span>
        <div className="inner2">
          <div className="form">
            <form onSubmit={sendEmail}>
              <div>
                <label className="name">Email*</label>
                <input type="email" className="place input" placeholder="abc@email.com" name="email" />
              </div>
              <div>
                <label className="name">Name*</label>
                <input type="text" className="place input" placeholder="Your name" name="name" />
              </div>
              <div>
                <label className="name">Title*</label>
                <input type="text" className="place input" placeholder="Subject" name="subject" />
              </div>
              <div>
                <label className="name">Message*</label>
                <textarea placeholder="Message....." className="place msg" name="message" />
              </div>
              <div className="uprbtn" >
                <input type="submit" className="btn" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
