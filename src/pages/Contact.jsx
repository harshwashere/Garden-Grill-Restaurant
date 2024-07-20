
import { Footer } from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { URL } from "./helper";



export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      name: user.name,
      email: user.email,
      number: user.number,
      subject: "",
      message: "",
    });
    setUserData(false);
  }

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/api/form/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (response.status === 200) {
      setContact({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
      toast.success("Your response has been recorded");
      navigate("/Contact");
    } else if (response.status === 500) {
      toast.error("Message not delivered!!! Please try again later");
      navigate("/Contact");
    }
  };

  return (
    <>
      <div className="contactbody">
        
        <div id="head">
          <h1 className="title" style={{ color: "black", fontStyle: "normal" }}>
            Contact Us
          </h1>

          <p className="line">
            Feel free to convey your valuable suggestions or feedback to improve
            our services. If you have been to our Restaurant recently and
            enjoyed the experience we would be happy to hear from you.
          </p>

          <h4 className="fhead">
            For Inquiry About Our Services Please Use The Form Below.
          </h4>
        </div>

        <form className="contactform" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="txtname" id="lname">
            Your Name *
          </label>
          <br />

          <input
            type="text"
            name="name"
            className="txtname"
            size="50"
            value={contact.name}
            onChange={handleInput}
            required
          />
          <br />

          <label htmlFor="txtemail" id="lemail">
            Your Email *
          </label>
          <br />

          <input
            type="email"
            name="email"
            className="txtemail"
            size="50"
            value={contact.email}
            onChange={handleInput}
            required
          />
          <br />

          <label htmlFor="num" id="lnum">
            Your Mobile *
          </label>
          <br />

          <input
            type="text"
            name="number"
            className="num"
            size="50"
            placeholder="+91"
            value={contact.number}
            onChange={handleInput}
            required
          />
          <br />

          <label htmlFor="txtsub" id="lsub">
            Subject
          </label>
          <br />

          <input
            type="text"
            name="subject"
            className="txtsub"
            size="50"
            value={contact.subject}
            onChange={handleInput}
            required
          />
          <br />

          <label htmlFor="txtmsg" id="lmsg">
            Your Message *
          </label>
          <br />

          <textarea
            name="message"
            className="txtmsg"
            cols="90"
            rows="10"
            value={contact.message}
            onChange={handleInput}
            required
          ></textarea>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <input style={{ width: "119px" }} type="submit" className="subbtn" />

          <input style={{ width: "119px" }} type="reset" className="resbtn" />
        </form>
        <Footer />
      </div>
    </>
  );
};
