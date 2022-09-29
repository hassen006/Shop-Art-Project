import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/fire";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Lazy() {
  const [cards, setCards] = useState(null);

  function getCards() {
    const products = ref(db, "MyWorks/");
    onValue(products, (snapshot) => {
      const data = snapshot.val();
      if (data === null) setCards(null);
      if (data === undefined) setCards(null);
      let cleanData = Object.entries(data);
      setCards(cleanData);
    });
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });

    getCards();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container" >
      <div className="row row-cols-lg-5 ">
        {cards === null ? (
          <h1> Loading ...</h1>
        ) : (
          cards &&
          cards.map((item, counter) => (
            <div className="col mt-3" key={counter} data-aos="fade-up">
              <div
                className="card bg-light m-2"
                style={{ borderRadius: "20px 20px 0 0" }}
              >
                <img
                  src={item[1].PhotoURL}
                  alt="Art Picture"
                  style={{ height: "25vh", borderRadius: "20px 20px 0 0" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title pd-5 text-primary">
                    {item[1].Title}
                  </h6>
                  <p className="card-text">
                    {item[1].Description.substr(0, 15)}...
                  </p>
                  <h6 className="card-title text-end text-danger">
                    {item[1].Price} DT
                  </h6>
                </div>

                <div>
                  <button
                    onClick={() => navigate("/card", { state: { item } })}
                    className="btn btn-success w-100"
                    style={{ borderRadius: "0" }}
                  >
                    <i class="bi bi-cart"></i>Buy
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
