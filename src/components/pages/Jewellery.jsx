import React from "react";
import ContentTitle from './../contentTitle';
import ContentImage from './../contentImage';

const PStones = [
    {
      id: "ps1",
      name: "Roby",
      link: "/precious-stone",
      description: "Description of fucking ruby",
      img: "images/ruby.jpg",
    },
    {
      id: "ps2",
      name: "sapphire",
      link: "/precious-stone",
      description: "Description of fucking sapphire",
      img: "images/sapphire.jpg",
    },
    {
      id: "ps3",
      name: "spinal",
      link: "/precious-stone",
      description: "Description of fucking spinal",
      img: "images/spinel.jpg",
    },
    {
      id: "ps4",
      name: "spinal",
      link: "/precious-stone",
      description: "Description of fucking spinal",
      img: "images/spinel.jpg",
    },
  ];

function Jewellery(props) {
  return (
    <div className="item header margin-top-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="text-pageheader">
              <div
                className="subtext-image"
                data-scrollreveal="enter bottom over 1.7s after 0.1s"
              >
                Gems
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container toparea">
        <ContentTitle title={"Jewelleries"} />
        <div className="row">
          {PStones.map((ps) => (
            <ContentImage data={ps} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jewellery;
