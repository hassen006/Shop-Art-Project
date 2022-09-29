import React from "react";
import { useLocation, Link } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function Card() {
  const { state } = useLocation();
  const { item } = state;

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column mt-3">
        <div
          className="card border-primary"
          style={{ maxWidth: "auto", height: "500px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item[1].PhotoURL}
                className="img-fluid rounded-start"
                alt="..."
                style={{
                  maxWidth: "auto",
                  height: "498px",
                  borderRadius: "20px 0 0 20px ",
                }}
              />
            </div>
            <div className="col-md-8">
              <div class="card-header text-danger text-center">
                <h5> {item[1].Title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span className="h5">Description:</span>
                  <div className="px-5 mt-3">
                    {item[1].Description}
                    <hr />
                    Price :
                    <span className="text-danger">{item[1].Price + " "}</span>
                    DT
                  </div>
                </p>
              </div>

              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-success"
                >
                  Place an order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-outline-primary w-100">
              Back to HomePage
            </button>
          </Link>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mt-0 mb-O">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Place an order for :{" "}
                <span className="text-primary">{item[1].Title}</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <Contact
                order={{
                  Title: item[1].Title,
                  PhotoURL: item[1].PhotoURL,
                  Price: item[1].Price,
                }}
                DBRef={"/Orders"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
