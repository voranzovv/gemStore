import React, { useEffect, useState } from "react";
import ContentTitle from "./../contentTitle";
import ContentImage from "./../contentImage";
import axios from "axios";

function AllGems(props) {
  const [allGems, setgems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((gems) => {
        setgems(gems.data);
      })
      .catch((err) => console.log("there is errors", err));
  }, []);

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
                All Gems
              </div>
            </div>
          </div>
        </div>
      </div>

      {!allGems ? null : (
        <div className="container toparea">
          <ContentTitle/>
          <div className="row">
            {allGems.map((ps) => (
              <ContentImage data={ps} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllGems;
