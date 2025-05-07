import React, { useEffect, useState } from "react";
import span from "../../assets/images/span.png";
import { useParams } from "react-router-dom";
import { domain, useProducts } from "../../store/store";
import Swal from "sweetalert2";

export default function RestaurantCategories() {
  const { products, setProducts } = useProducts();
  const location = useParams();
  const path = location.documentId; //Food20%Italian

  useEffect(() => {
    setProducts();
  }, []);

  const AddTtoCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((el) => el.documentId == product.documentId);
    if (index == -1) {
      cart.push({ ...product, qty: 1 });
      Swal.fire({
        icon: "success",
        title: "Added To Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      cart[index].qty++;
      Swal.fire({
        icon: "info",
        title: "Qty increased",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="col-span-9 max-lg:mt-3.5 max-lg:col-span-12 bg-white rounded-[10px] p-5 flex flex-col gap-3">
      <p className="text-[20px] leading-[24px] font-bold">Categories</p>
      <div>
        <img src={span} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <h3 className="text-[20px] leading-[24px] font-semibold relative z-10">
            Shakes (10)
          </h3>
          <span className="absolute top-[46px] left-0 w-[60px] h-[2px] border-t-[3px] border-[#FFCC00] z-10 content-['']"></span>
          <span className="absolute top-[46px] left-0 w-full h-[2px] border-b-[3px] border-[#f3f5ff] content-['']"></span>
        </div>
        {products
          .filter(
            (el) =>
              el.restaurant &&
              el.restaurant.some((rest) => rest.documentId === path)
          )
          .map((el) => (
            <React.Fragment key={el.documentId}>
              <div className="flex max-md:flex-col max-md:items-center gap-3 mt-10">
                <div className="w-[150px]">
                  <img src={domain + el.product_img.url} alt="" />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <h3 className="text-[18px] font-bold leading-[20px]">
                    {el.product_name}
                  </h3>
                  <p className="text-[16px] font-normal leading-[24px] text-gray-400">
                    {el.product_details}
                  </p>
                  <p className="text-[20px] font-bold leading-[30px]">
                    £ {el.product_price}
                  </p>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    <button
                      onClick={() => {
                        AddTtoCart(el);
                      }}
                      className="btn btn-warning text-black hover:bg-black hover:text-white transition-all duration-[400ms] px-4 py-2 w-[200px] max-md:w-[120px] max-md:h-[40px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-4 w-full h-px bg-[#f3f5ff] border-none" />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
