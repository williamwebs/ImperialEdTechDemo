import "./styles/consult.css";

import shield from "../assets/vectors/shield.png";
import settings from "../assets/vectors/settings.png";
import trash from "../assets/vectors/trash.png";
import windowImg from "../assets/vectors/window.png";

import image from "../assets/customer.png";
import Btn from "./Btn";

const Consult = () => {
  const listItems1 = [
    {
      icon: shield,
      text: "Land / House Acquisition",
    },
    {
      icon: settings,
      text: "Listing / Selling / Patnership",
    },
    {
      icon: settings,
      text: "Brokerage services",
    },
    {
      icon: settings,
      text: "Event Hosting",
    },
    {
      icon: settings,
      text: "Execution of Private & Public Contracts",
    },
  ];
  const listItems2 = [
    {
      icon: trash,
      text: "Land Title",
    },
    {
      icon: windowImg,
      text: "Construction /Interior Design",
    },
    {
      icon: windowImg,
      text: "Taxes",
    },
    {
      icon: windowImg,
      text: "Business Plan",
    },
    {
      icon: windowImg,
      text: "Workshop / Training",
    },
  ];
  return (
    <section className="consult">
      <div className="inner__container">
        <h3>Book A consultation</h3>
        <p>
          We provide expert advise on real estate at the convenience of your
          mobile phone
        </p>

        <div className="row">
          <div className="items">
            <div className="items__row">
              <div className="item__col">
                {listItems1.map((item) => (
                  <li className="row">
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="text">{item.text}</p>
                  </li>
                ))}
              </div>
              <div className="item__col">
                {listItems2.map((item) => (
                  <li className="row">
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="text">{item.text}</p>
                  </li>
                ))}
              </div>
            </div>
            <Btn title="Consult" />
            {/* <button className="cta">Consult</button> */}
          </div>

          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consult;
