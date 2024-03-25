import React from "react";
import "./Home.css";
import { IntroSection } from "../Sections/IntroSection";

const Home = () => {
  const accordionList = [
    {
      image:
        "https://images.unsplash.com/photo-1584958902498-0391eabc47e8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "tokyo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618019259098-817b908d93e1?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "shizuoka",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "kyoto",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "hakone",
    },
  ];

  return (
    <>
      <div className="body">
        <ul className="accordion">
          {accordionList.map((item, index) => (
            <li className="accordion__item" key={index}>
              <img
                className="accordion__image"
                src={item.image}
                alt={item.title}
              />
              <div className="accordion__overlay">
                <h2 className="accordion__title">{item.title}</h2>
                <p className="accordion__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <IntroSection />
    </>
  );
};

export default Home;
