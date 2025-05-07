import React, { useEffect, useState, useMemo } from "react";
import { domain } from "../store/store";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthRepo } from "../data/repo/AuthRepo";

export default function Profile() {
  const [cart, setCart] = useState([]);
  const navigat = useNavigate();
  const total = useMemo(() => {
    return cart.reduce((acc, el) => acc + el.qty * el.product_price, 0);
  }, [cart]);

  useEffect(() => {
    let storageCart = JSON.parse(localStorage.getItem("cart"));
    storageCart && setCart(storageCart);
  }, []);

  const increamentQty = (index) => {
    let copy = [...cart];
    copy[index].qty++;
    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  const decreamentQty = (index) => {
    let copy = [...cart];
    if (copy[index].qty > 1) {
      copy[index].qty--;
    } else {
      copy.splice(index, 1);
    }
    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  const removeItem = (index) => {
    let copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  const handlePlaceOrder = () => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Sign Up or Login to Place Order",
      });
      sessionStorage.setItem("redirect", "checkout");
      navigat("/login");
    } else {
      AuthRepo.checktoken(token).then((res) => {
        if (res) {
          navigat("/restaurants/orders/checkout");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Sign Up or Login to Place Order",
          });
          sessionStorage.setItem("redirect", "checkout");
          navigat("/login");
        }
      });
    }
  };

  return (
    <div className="container max-w-7xl mx-auto my-7 px-4">
      {cart.length > 0 ? (
        <>
          {/* Mobile view */}
          <div className="block md:hidden space-y-4 ">
            {cart.map((el, index) => (
              <div
                key={el.documentId}
                className="border rounded-xl p-4 shadow-md flex flex-col gap-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={domain + el.product_img.url}
                    alt={el.product_name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{el.product_name}</h2>
                    <div className="text-sm opacity-50">
                      {el.restaurant[0].brand_name}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => increamentQty(index)}
                      className="btn btn-success btn-sm"
                    >
                      +
                    </button>
                    <span>{el.qty}</span>
                    <button
                      onClick={() => decreamentQty(index)}
                      className="btn btn-error btn-sm"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p>Price: ${el.product_price}</p>
                    <p>Total: ${el.qty * el.product_price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="btn btn-error w-fit self-end"
                >
                  <MdDelete className="text-white" />
                </button>
              </div>
            ))}
            <div className="text-right font-bold text-lg">Total: ${total}</div>
            <div className="text-center mt-4">
              <button onClick={handlePlaceOrder} className="btn btn-warning">
                Place Order
              </button>
            </div>
          </div>

          {/* Desktop / Tablet view */}
          <div className="hidden md:block ">
            <table className="table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Qty</th>
                  <th>Item Price</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((el, index) => (
                  <tr key={el.documentId}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={domain + el.product_img.url}
                              alt={el.product_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{el.product_name}</div>
                          <div className="text-sm opacity-50">
                            {el.restaurant[0].brand_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2.5 items-center">
                        <button
                          onClick={() => increamentQty(index)}
                          className="btn btn-success"
                        >
                          +
                        </button>
                        <span>{el.qty}</span>
                        <button
                          onClick={() => decreamentQty(index)}
                          className="btn btn-error"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>$ {el.product_price}</td>
                    <td>$ {el.product_price * el.qty}</td>
                    <td>
                      <button
                        onClick={() => removeItem(index)}
                        className="btn btn-error"
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}>Total</th>
                  <th>$ {total}</th>
                </tr>
              </tfoot>
            </table>
            <div className="flex justify-center mt-4">
              <button onClick={handlePlaceOrder} className="btn btn-warning">
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-2xl text-center">There are no products in cart</h1>
      )}
    </div>
  );
}
