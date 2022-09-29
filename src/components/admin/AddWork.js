import React, { useState } from "react";
import { db } from "../../utils/fire";
import { ref, set } from "firebase/database";
import Swal from "sweetalert2";
import { bgArt } from "../../ressources";

export default function AddWork() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");

  const addWork = () => {
    if (
      title.trim().length <= 1 ||
      description.trim().length <= 1 ||
      price == 0 ||
      url.length <= 1
    ) {
      Swal.fire("Please Fill All information", "", "error");
    } else {
      let workRef = ref(
        db,
        "MyWorks/" + Math.floor(Math.random() * 1000).toString()
      );

      set(workRef, {
        Title: title,
        Description: description,
        Price: price,
        PhotoURL: url,
      });
      Swal.fire("Work added", "", "success");
      resetForm();
    }
  };
  const resetForm = () => {
    document.getElementById("addWork").reset();
    setTitle("");
    setDescription("");
    setPrice(0);
    setUrl("");
  };

  return (
    <div className="container row mt-3">
      <div className="login col-md-8">
        <div className="loginContainer">
          <form id="addWork">
            <h3>Add new work</h3>
            <label>Title</label>
            <input
              autoFocus
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Price</label>
            <input
              type="number"
              placeholder="DT"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Picture</label>
            <input type="url" onChange={(e) => setUrl(e.target.value)} />
          </form>
          <div className="d-flex mt-4 ">
            <button className="btn btn-success w-50 mx-1 " onClick={addWork}>
              Add Work
            </button>
            <button className="btn btn-warning w-50 mx-1" onClick={resetForm}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4  artPic">
        <img
          src={url ? url : bgArt}
          alt=" Picture Art : incorrect link !!!"
          className="rounded"
        />
      </div>
    </div>
  );
}
