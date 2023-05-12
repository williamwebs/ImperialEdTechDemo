import "./styles/explore.css";
import image1 from "../assets/person1.png";
import image2 from "../assets/person2.png";
import image3 from "../assets/person3.png";
import image4 from "../assets/person4.png";
import Btn from "./Btn";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <h3>Explore Featured Agents</h3>
        <p className="sub__title">
          An agent is anyone who brings us buyers or property to sell. Register
          with us as an agent, let's close deals and you get a fair commission.
        </p>

        <div className="grid">
          <div className="box">
            <img src={image4} alt="" />
            <div className="content">
              <h4>Ashley Nkongho</h4>
              <small>68 Closed Sales</small>
              <p className="experience">5years Experience</p>
            </div>
          </div>
          <div className="box">
            <img src={image3} alt="" />
            <div className="content">
              <h4>Molinge Henry</h4>
              <small>105 Closed Sales</small>
              <p className="experience">12years Experience</p>
            </div>
          </div>
          <div className="box">
            <img src={image2} alt="" />
            <div className="content">
              <h4>Marion Ngwese</h4>
              <small>62 Closed Sales</small>
              <p className="experience">5years Experience</p>
            </div>
          </div>
          <div className="box">
            <img src={image1} alt="" />
            <div className="content">
              <h4>Deresy Ndinde</h4>
              <small>41 Closed Sales</small>
              <p className="experience">4years Experience</p>
            </div>
          </div>
        </div>
        <div className="btn__wrapper">
          <Btn title="Register as an Agent" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
