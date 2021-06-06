import axios from "axios";
import React, { useState } from "react";
import ContentTitle from "./../contentTitle";

function CreateGem(props) {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");

  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("category", category);
    data.append("image", image);
    axios
      .post("http://localhost:8000/product", data)
      .then((p) => console.log(p.data))
      .catch((err) => console.log(err));
    console.log(data);
  };
  return (
    <div>
      <ContentTitle title="Add product" />
      <ContentTitle />
      <div
        style={{
          marginTop: "10px",
          paddingLeft: "250px",
          paddingRight: "250px",
        }}
        className="container"
      >
        <div className="form-group row">
          <div className="col-sm-12">
            <label htmlFor="exampleFormControlSelect1">Name</label>
            <input
              className="form-control form-control-lg"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <label htmlFor="exampleFormControlSelect1">Description</label>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              name="files"
              multiple
              accept="image/*"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>
        </form>
        <div className="form-group row">
          <div className="col-sm-12">
            <button
              className="btn btn-primary form-control"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateGem;
