import React from "react";
import Slider from "react-slick";
import "./Features.scss";

function Features(props) {
    var settings = {
      dots: true
    };
  return (
    <div className="Features">
        <Slider {...settings}>
          {props.items.map((item, index) => (
              <div
                className="SlideDiv"
                key={index}
              >
                <div className="column is-half">
                  <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
                    {item.title}
                  </h3>
                  <p className="subtitle">{item.description}</p>
                </div>
                <div className="column is-half">
                  <figure className="Features__image image">
                    <img src={item.image} alt={item.title}></img>
                  </figure>
                </div>
              </div>
          ))}
        </Slider>
    </div>
  );
}

export default Features;
