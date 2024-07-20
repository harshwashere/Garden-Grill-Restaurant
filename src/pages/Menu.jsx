import {Navbar} from "./Navbar"
import { Footer } from "./Footer";
import { useAuth } from "../store/auth";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

export const Menu = () => {
  const { Store } = useAuth();
  const dispatch = useDispatch();
  const dataMap = (val) => {
    return (
      <>
        <div className="newCart">
          
          <div className="cartImg">
            <img src={val.image} alt="" />
          </div>
          <div className="newDetails">
            <div className="buttonsection">
              <div className="newName">{val.name}</div>
              <div className="newPrice">₹{val.price}</div>
              <div className="newButton">
                <button
                  type="submit"
                  
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        id: val.id,
                        img: val.image,
                        name: val.name,
                        price: val.price,
                        value:val.value
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="menubody">
      <Navbar/>
        <div className="foodcard">{Store ? <>{Store.map(dataMap)}</> : <><div className="loader"></div></>}</div>
      
        <Footer />
      </div>
    </>
  );
};
