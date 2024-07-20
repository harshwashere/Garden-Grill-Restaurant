/* eslint-disable react/no-unescaped-entities */
import {Navbar} from "./Navbar"
import { Footer } from "./Footer";
import { NavLink } from "react-router-dom";
import { homeData } from "./HomeData"
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const data = ((val) => {
    return (
      <>
        <div className="card">
          <div className="cardDiv">
            <img src={val.img} alt="" />
            <h3>{val.name}</h3>
            <p className="desc1">
              {val.desc}
            </p>
            <p className="rate1">₹ {val.price}</p>
            <button type="submit" className="spebtn1" onClick={() =>
              dispatch(
                addtoCart({
                  id: val.id,
                  img: val.img,
                  name: val.name,
                  price: val.price,
                  value: val.value
                })
              )
            }>
              Add to cart
            </button>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <div className="homebody">
        <Navbar/>

        <div className="main">
          <div className="main1">

          </div>
          <div className="linebtn">
            <h1>
              It's not just
              <br />
              Food, it's an
              <br />
              Experience
            </h1>
            <NavLink className="link" to="/Menu">
              <button type="menu" className="vmbtn" id="vmbtn">
                View Menu
              </button>
            </NavLink>
          </div>
        </div>
        <div id="stodiv">
          <div className="sto">
            <p>Our Story</p>
            <br />
            <h1>
              Cooking Is The Art of

              Adjustment
            </h1>
            <br />
            <p>
              Cooking is a creative process of transforming
              <br />
              ingredients in delightful meals, uniting people
              <br />
              through a diverse tapestry of tastes and textures.
            </p>
          </div>
          <div className="fimg">
            <img src="/Images/egg_food_image.jpg" alt="eggimage" />
          </div>
        </div>

        <div className="specialCard">
          <h1 className="headSpl">Our Chef's Special</h1>
          <div className="cards">

            {
              homeData ? homeData.map(data) : ""
            }
          </div>
        </div>
        <div className="about-section">
          <h1 className="title1">About Our Chef's</h1>
          <div className="about-chef">
            <div className="chef">
              <img src="/Images/HARSH-IMAGE.jpg" alt="Harsh Image" />
            </div>
            <div className="chef-desc">
              <p>
                Meet the creative genius behind our culinary masterpieces. Our
                Chef's brings a world of flavors to your plate, skillfully
                crafting each dish with passion and precision. With a culinary
                journey, our chef has honored their expertise in creating
                unforgettable dining experiences. They are dedicated to sourcing
                the finest ingredients and infusing every dish with their unique
                culinary artistry.
              </p>

              <a href="/aboutus">
                <button type="submit" className="learnbtn">
                  <NavLink className="link" to="/About">
                    Learn More
                  </NavLink>
                </button>
              </a>
            </div>

          </div>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <hr />
          <h1 className="contdesc">We Are Always Here To Help You</h1>
          <div className="contcard">
            <div className="address">
              <h1 className="cityh1">Mumbai, India</h1>
              <p className="smalladd">
                Opposite krishna Hall, mira road,
                <br />
                Borivali, Mumbai 400067
              </p>
              <p className="mail">
                <b>Email:- </b>gardengrill@gmail.com
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10811.148799862398!2d72.84861826673757!3d19.229055540924154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d0d3ad9ebd%3A0xea2f66f6a2145e90!2sBorivali!5e1!3m2!1sen!2sin!4v1704289758988!5m2!1sen!2sin"
                width="600"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="time">
              <p>
                <b>Call Directly:-</b>
              </p>
              <h1>+91 8590367494</h1>
              <p>
                <b>Lunch Service:-</b>
              </p>
              <p className="time1">
                Friday, Saturday and Sunday:
                <br />
                12pm - 1.30pm
              </p>
              <p>
                <b>Dinner Service:-</b>
              </p>
              <p>Daily: 6pm - 11.30pm</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
