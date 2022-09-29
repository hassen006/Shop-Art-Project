import React from "react";
import {
  background,
  carousel1,
  carousel2,
  carousel3,
  line,
  instagram,
} from "../ressources";
import Navbar from "./Navbar";
import "./Home.css";
import SubNavbar from "./SubNavbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Lazy from "./Lazy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="carousel-navbar">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100 h-10" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100 " alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="nav-menu">
          <SubNavbar />
        </div>
      </div>

      {/* Description Art Session */}
  

<section style={{backgroundColor: '#f5f7fa'}}>
  <div className="container py-5 ">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col ">
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
              <div className="blockquote-custom-icon bg-info shadow-1-strong">
              <FontAwesomeIcon icon="fa-solid fa-quote-left text-white" />
              </div>
              <p className="mb-0 mt-2 font-italic">
              Finding the art in neural networks. Our mission is to revolutionise
            the art world and to become the exclusive provider of art generated
            by artificial neural networks – paintings which are both unique and
            exclusive – whereas some try to replicate human behaviour – other
            take paths of their own. We just started and are looking for other
            ai artists to collaborate with. If you are one of them shoot us an
            email.
              </p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">
                Hassen KHROUF
                <cite title="Source Title">......</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>


        <div className="line">
          <img src={line} alt="art line" />
        </div>
      </section>

      {/* CARDS PART LAZY  */}
      <section style={{backgroundColor: '#f5f7fa'}}>
      <span id="shop" ></span>
      <Lazy />
      </section>

      <section id="what-we-offers" style={{backgroundColor: '#f5f7fa'}}>
        <div className="what-we-offer" >
          <img src={background} className="img-fluid" alt="res img" />
          <div className="what-offer-content">
            <h2 className="text-center">What We Offer ?</h2>
            <p className="text-center">
              As the technology progressed, the boundary that separates man and
              machine became thinner and thinner. Artistic paths and expressions
              that human artists can explore in a single lifetime are limited.
              There is a huge unexplored expectation in many paths that the
              human artist is not able to undergo. In that light we see the
              intelligent machine as a tool which can illuminate us and also a
              character of itself in many yet undisclosed ways. We believe AI
              art is the next big thing and we are happy that you are here also
              with us getting your insight into creativity and intelligence. If
              you would like to know more, click on button below to read our
              blog post about our vision of where AI art is guiding us.
            </p>

            <button className="btn btn-transparent">
              <img src={instagram} alt="" />
            </button>

            <p className="text-center">
              We have active community on Instagram. Make sure to follow us
              there!
            </p>
          </div>
        </div>
      </section>

      {/* Contact us Session */}
      <></>
      <section className="contact1" id="contact">
        <div className="container row mb-5 mt-3 ">
          <div className="col-md-6 mx-5">
            <h1>Contact US </h1>
            <span>
              Want to have a custom order or you are an AI artist willing to
              collaborate with us? Just shoot as an email and we will get back
              to you in no time.
            </span>
            <hr />
            <Contact DBRef={"/Comments"} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
