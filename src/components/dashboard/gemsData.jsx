import React, { useEffect, useState } from "react";
import ContentTitle from "../contentTitle";
import ContentImage from "../contentImage";
import axios from "axios";
import ActionCard from "./actionCard";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { toast } from 'react-toastify';

const buttonStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

function GemsData(props) {
  const [allGems, setGems] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product`)
      .then((gems) => {
        setGems(gems.data);
      })
      .catch((err) => {console.log(err.response);
      toast.error('Failed')
      });
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
          <div style={buttonStyle}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
          <ContentTitle />
         
          <div className="row">
            {allGems
              .map((s) => (
                //   <ContentImage data={ps} />
                <ActionCard data={s}/>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GemsData;
