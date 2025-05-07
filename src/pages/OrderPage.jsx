import React, { useEffect, useState } from "react";
import { domain } from "../store/store";
import { MdDelete } from "react-icons/md";

export default function Profile() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let storageCart = JSON.parse(localStorage.getItem("cart"));
    storageCart && setCart(storageCart);
  }, []);

  useEffect(() => {
    let newTotal = cart.reduce((acc, el) => {
      return acc + el.qty * el.product_price;
    }, 0);
    setTotal(newTotal);
  }, [cart]);
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
  return (
    <div className="container max-w-7xl mx-auto my-7">
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                <th>Item Name</th>
                <th>Item Qty</th>
                <th>Item Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el, index) => {
                return (
                  <tr key={el.documentId}>
                    {/* <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th> */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={domain + el.product_img.url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{el.product_name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2.5 items-center">
                        <button
                          onClick={() => {
                            increamentQty(index);
                          }}
                          className="btn btn-success"
                        >
                          +
                        </button>
                        <span>{el.qty}</span>
                        <button
                          onClick={() => {
                            decreamentQty(index);
                          }}
                          className="btn btn-error"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>$ {el.product_price}</td>
                    <td>$ {el.product_price * el.qty}</td>
                    <th>
                      <button
                        onClick={() => {
                          removeItem(index);
                        }}
                        className="btn btn-error"
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th colSpan={2}>Total</th>
                <th>$ {total}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl text-center">There are no products in cart </h1>
      )}
    </div>
  );
}
