import { useEffect, useState } from "react";
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
        <>
          {/* Table for large screens */}
          <div className="overflow-x-auto hidden md:block">
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
                {orders.map((el, index) => (
                  <tr key={el.documentId}>
                    <td>{index + 1}</td>
                    <td colSpan={2}>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={domain + el.products[0].product_img.url}
                              alt="Product"
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
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for mobile */}
          <div className="flex flex-col gap-4 md:hidden">
            {orders.map((el, index) => (
              <div
                key={el.documentId}
                className="border rounded-xl p-4 shadow-md flex items-center gap-4"
              >
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={domain + el.products[0].product_img.url}
                    alt="Product"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-semibold text-lg">
                    {el.products[0].product_name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {el.restaurant.brand_name}
                  </span>
                  <span className="mt-1 text-sm font-medium text-primary">
                    {el.order?.order_status ?? "Prepared"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-center">There are no orders</h1>
      )}
    </div>
  );
}
