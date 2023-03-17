import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  decrement,
  increment,
  remove,
  selectCart,
  selectCountAll,
  selectTotal,
} from "../ReduxToolkit/slices/cartSlice";
export default function Cart(props) {
  const Total = useSelector(selectTotal);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  function TotalPrice(price, q) {
    return Number(price * q).toString();
  }
  const addItemToCart = (p) => {
    dispatch(increment(p));
  };
  const RemoveItemFromCart = (p) => {
    dispatch(decrement(p));
  };
  const DeleteItem = (p) => {
    dispatch(remove(p));
  };
  return (
    <>
   
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            {" "}
                            <Button onClick={() => DeleteItem(item)}>
                              X
                            </Button>
                          </td>
                          <td>{item.name}</td>
                          <td>
                            <img
                              src={ item.img
                              }
                              style={{ width: "80px", height: "80px" }}
                            />
                          </td>
                          <td>{item.price} DT</td>
                          <td>
                            <Button
                              onClick={() => RemoveItemFromCart(item)}
                            >
                              -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button onClick={() => addItemToCart(item)}>
                              +
                            </Button>
                          </td>
                          <td> {TotalPrice(item.price, item.quantity)}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan="5">Total Carts</td>
                      <td>{Total} DT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      
            <Button type="button">Checkout</Button>
      
  
 
    </>
  );
}
