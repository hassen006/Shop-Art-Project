import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../utils/fire";
import ReactLoading from "react-loading";

export default function Inbox() {
  const [comments, setComments] = useState(null);

  const getComments = () => {
    let commentRef = ref(db, "Comments/");
    onValue(commentRef, (snapshot) => {
      const data = snapshot.val();
      let cleanData = Object.entries(data);
      setComments(cleanData);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-3">
        {comments === null ? (
          <ReactLoading
            type={"spin"}
            color={"#ffffff"}
            height={"100%"}
            width={"100%"}
          />
        ) : (
          comments.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card border-success mb-3"
                style={{ maxWidth: "25rem" }}
              >
                <div className="card-header bg-transparent border-success d-flex justify-content-between">
                  <span> {item[1].lastName + " " + item[1].name}</span>
                  <span>{item[1].phone}</span>
                </div>
                <div className="card-body text-success">
                  <h5 className="card-title">
                    {item[1].city + ",  " + item[1].adress}
                  </h5>
                  <p className="card-text">{item[1].comment}</p>
                </div>
                <div className="card-footer bg-transparent border-success">
                  {item[1].email}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
