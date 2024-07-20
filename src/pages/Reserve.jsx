// import {Navbar} from "./Navbar"
// import { Footer } from "./Footer";
// import { useState } from "react";
// import { useAuth } from "../store/auth";
// import { useNavigate } from "react-router-dom";

// export const Reserve = () => {

//   const URL = "https://localhost:8000/api/reserveForm/reserve"
//   const [reserve, setReserve] = useState({
//     name: "",
//     email: "",
//     number: "",
//     date: "",
//     time: "",
//     table: "",
//     seat: "",
//   });

//   const [userData, setUserData] = useState(true);

//   const { user } = useAuth();

//   if (userData && user) {
//     setReserve({
//       name: user.name,
//       email: user.email,
//       number: user.number,
//       date: "",
//       time: "",
//       table: "",
//       seat: "",
//     });
//     setUserData(false);
//   }

//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setReserve({
//       ...reserve,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(reserve),
//     });
//     if (response.status === 200) {
//       setReserve({
//         name: "",
//         email: "",
//         number: "",
//         subject: "",
//         message: "",
//       });
//       toast.success("Your response has been recorded");
//       navigate("/Contact");
//     } else if (response.status === 500) {
//       toast.error("Message not delivered!!! Please try again later");
//       navigate("/Contact");
//     }
//   };
//   return (
//     <>
//       <div className="reservebody">
            // <Navbar/>
//         <div id="content">
//           <div className="form">
//             <h1>Book a table</h1>
//             <form className="reserveform" method="POST" onSubmit={handleSubmit}>
//               <label for="name">
//                 Full Name<span>*</span>
//               </label>
//               <br></br>
//               <input
//                 type="text"
//                 name="name"
//                 id="txtname"
//                 value={reserve.name}
//                 onChange={handleInput}
//                 required
//               ></input>
//               <br></br>
//               <label for="email">
//                 Email Address<span>*</span>
//               </label>
//               <br></br>
//               <input
//                 type="email"
//                 name="email"
//                 id="txtemail"
//                 pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
//                 value={reserve.email}
//                 required
//               ></input>
//               <br></br>
//               <label for="number">
//                 Mobile Number<span>*</span>
//               </label>
//               <br></br>
//               <input
//                 type="tel"
//                 name="number"
//                 id="txtnum"
//                 pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
//                 value={reserve.number}
//                 onChange={handleInput}
//                 required
//               ></input>
//               <br></br>
//               <label>Date</label>
//               <br></br>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={reserve.date}
//                 onChange={handleInput}
//                 required
//               ></input>
//               <br></br>
//               <label>Time</label>
//               <br></br>
//               <input
//                 className="bn"
//                 type="time"
//                 name="time"
//                 min="09:00"
//                 max="18:00"
//                 value={reserve.time}
//                 onChange={handleInput}
//                 required
//               ></input>
//               <br></br>
//               <label for="table-name">Table Name</label>
//               <br></br>
//               <select
//                 className="tab-name"
//                 name="table"
//                 value={reserve.table}
//                 onChange={handleInput}
//                 required
//               >
//                 <option>--Select table---</option>
//                 <option>Non-AC Table</option>
//                 <option>AC Table</option>
//                 <option>Family Size Table</option>
//               </select>
//               <br></br>
//               <label for="seat">No. of Seats</label>
//               <br></br>
//               <input
//                 type="number"
//                 name="seat"
//                 id="txtseat"
//                 value={reserve.seat}
//                 onChange={handleInput}
//                 required
//               ></input>
//               <br></br>
//               {/* <label for="price">Booking Price</label>
//               <br></br>
//               <input type="text" name="price" id="txtprice" disabled></input>
//               <br></br>
//               <label for="remaining">Remaining </label>
//               <br></br>
//               <input
//                 type="text"
//                 name="remaining"
//                 id="txtcount"
//                 disabled
//               ></input>
//               <br></br> */}
//               <button style={{ width: "119px" }} type="submit" id="subbtn">
//                 Continue
//               </button>
//               <button style={{ width: "119px" }} type="reset" id="resbtn">
//                 Reset
//               </button>
//             </form>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };
