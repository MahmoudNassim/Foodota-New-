import React, { useEffect } from "react";
import span from "../../assets/images/span.png";
import { domain, useProducts } from "../../store/store";
import { useNavigate } from "react-router-dom";

export default function DeliciousDeal() {
  const { products, setProducts } = useProducts();
  useEffect(() => {
    setProducts();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto container min-md:p-10 flex justify-center flex-col items-center mb-7 p-4">
      <div className="flex flex-col gap-1.5  w-full">
        <p className="text-center text-[16px] text-warning font-bold">
          Delicious Food in
        </p>
        <h3 className="text-center text-[42px] font-bold">
          Super Delicious Deal
        </h3>
        <div className="flex justify-center">
          <img src={span} alt="" />
        </div>
      </div>

      <div className="mt-8 grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-5">
        {products
          .filter((el) =>
            el.restaurant.some(
              (el) => el.brand_name === "Masterchef Chinese Food"
            )
          )
          .map((el) => (
            <div
              key={el.documentId}
              className="card bg-base-100 shadow-sm hover:shadow-2xl cursor-pointer"
              onClick={() => {
                navigate(`/restaurants/${el.restaurant[0].documentId}`);
              }}
            >
              <figure>
                <img
                  className="w-[150px]"
                  src={domain + el.product_img.url}
                  alt={el.product_name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-600 text-[24px] font-semibold leading-9">
                  {el.product_name}
                </h2>
                <p className="text-[16px] font-normal leading-7 text-gray-500">
                  {el.product_details}
                </p>
                <p className="text-[20px] font-semibold leading-9 text-warning">
                  $ {el.product_price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
