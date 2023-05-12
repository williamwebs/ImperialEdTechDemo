import React from "react";
import "./styles/Quality.css";

import img from "../assets/hold1.jpg";
import icon from "../assets/Group.png";

const Qualities = () => {
  return (
    <section className="qualities__section">
      <div className="row">
        <div className="image">
          <img src={img} alt="" />
        </div>

        <div className="boxes">
          <div className="grid">
            {/*  */}
            <article className="box">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3 className="title">Buy a Property</h3>
              <p className="text">Property Management (Rental and Private)</p>
              <div className="btns">
                <p>LEARN MORE</p>
              </div>
            </article>
            {/*  */}
            <article className="box">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3 className="title">Sell a property</h3>
              <p className="text">General Brokerage Services</p>
              <div className="btns">
                <p>LEARN MORE</p>
              </div>
            </article>
            {/*  */}
            <article className="box">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3 className="title">Request a Technical service</h3>
              <p className="text">Technican Service with Relevant skills</p>
              <div className="btns">
                <p>LEARN MORE</p>
              </div>
            </article>
            {/*  */}
            <article className="box">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <h3 className="title">Become an Agent</h3>
              <p className="text">
                Facilitation of the acquisition of Properties and get a
                comission
              </p>
              <div className="btns">
                <p>LEARN MORE</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
