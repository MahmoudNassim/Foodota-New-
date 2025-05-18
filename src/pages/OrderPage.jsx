import React, { useEffect, useState } from "react";
import { domain } from "../store/store";
import { AuthRepo } from "../data/repo/AuthRepo";
import { RestRepo } from "../data/repo/RestRepo";

export default function Profile() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    AuthRepo.checktoken(token).then((res) => {
      if (res) {
        const userId = res.documentId;

        RestRepo.getOrderItem().then((res) => {
          console.log("Data received:", res);

          const userOrders = res
            .filter((orderItem) =>
              orderItem.users?.some((user) => user.documentId === userId)
            )
            .map((orderItem) => ({
              ...orderItem,
              users: orderItem.users?.filter(
                (user) => user.documentId === userId
              ),
            }));

          setOrders(userOrders);
        });
      }
    });
  }, [token]);

  return (
    <div className="container max-w-7xl mx-auto my-7 px-4">
      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Order Name</th>
                <th></th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((el, index) => {
                return (
                  <tr key={el.documentId}>
                    <td>{index + 1}</td>
                    <td colSpan={2}>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={domain + el.products[0].product_img.url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {el.products[0].product_name}
                          </div>
                          <div className="text-sm opacity-50">
                            {el.restaurant.brand_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td colSpan={1}>{el.order?.order_status ?? "Prepared"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-center">There are no orders</h1>
      )}
    </div>
  );
}
