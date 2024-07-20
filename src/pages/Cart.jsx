import { useDispatch, useSelector } from "react-redux";
import { removeCart, getCartTotal, increaseItemQuantity, decreaseItemQuantity } from "../redux/cartSlice";
import { useEffect } from "react";

export const Cart = () => {
  const cartitems = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartitems, dispatch]);

  return (
    <>
      <div className="cartPage">
        {cartitems.length === 0 ? (
          <div className="emptyCartMessage">Cart is empty</div>
        ) : (
          <div className="cart">
            <div className="cartItems">
              <div className="cartHead">
                <div>Cart</div>
              </div>
              {cartitems.map((val) => (
                <div className="item" key={val.id}>
                  <div className="item1">
                    <img src={val.img} alt={val.name} />
                  </div>
                  <div className="item2">{val.name}</div>
                  <div className="item3">{val.price}</div>
                  <div className="item4">
                    <div className="minus" onClick={() => dispatch(decreaseItemQuantity(val.id))}> - </div>
                    <div className="quantity">{val.value}</div>
                    <div className="plus" onClick={() => dispatch(increaseItemQuantity(val.id))}>+</div>
                  </div>
                  <div className="item5">
                    <i
                      onClick={() => dispatch(removeCart({ id: val.id }))}
                      className="bi bi-x"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </div>
                  <div className="item6">{val.price * val.value}</div>
                </div>
              ))}
            </div>
            <div className="checkPage">
              <div className="summary">Summary</div>
              <hr />
              <div className="allTotal">
                <div className="ITEMS">ITEMS {totalQuantity}</div>
                <div className="totalPrice">
                  <div className="Rs">Rs</div>
                  <div>{totalPrice}</div>
                </div>
              </div>
              <div className="charge">
                <div className="delivery">Delivery Charge</div>
                <div className="fees">
                  <div className="Rs">Rs</div>
                  <div>0</div>
                </div>
              </div>
              <hr />
              <div className="finalTotal">
                <div className="totalHead">TOTAL PRICE</div>
                <div className="finaltotalPrice">
                  <div className="Rs">Rs</div>
                  <div>{totalPrice}</div>
                </div>
              </div>
              <div className="checkOut">Checkout</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
