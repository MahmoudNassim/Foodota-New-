import React, { useState } from "react";
import Swal from "sweetalert2";
import { RestRepo } from "../data/repo/RestRepo";

export default function VendorMembers() {
  const [product, setProduct] = useState({
    product_img: null,
    product_name: "",
    product_price: "",
    product_details: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.product_img) {
      Swal.fire({
        icon: "error",
        title: "Image is required",
        text: "Please upload a product image before submitting.",
      });
      return;
    }

    console.log(product);
    RestRepo.storeProducts(product)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Product Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setProduct({
          product_img: null,
          product_name: "",
          product_price: "",
          product_details: "",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed to Add Product",
          text: error?.response?.data?.message,
        });
      });
  };

  return (
    <div className="container max-w-7xl mx-auto my-7 px-4">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Image */}
        <div>
          <label htmlFor="product_img" className="block text-lg font-medium">
            Product Image
          </label>
          <input
            type="file"
            id="product_img"
            name="product_img"
            onChange={handleChange}
            className="input border w-full"
            accept="image/*"
          />
          {product.product_img && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(product.product_img)}
                alt="Product"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Product Name */}
        <div>
          <label htmlFor="product_name" className="block text-lg font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            className="input border w-full"
            placeholder="Enter Product Name"
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="product_price" className="block text-lg font-medium">
            Product Price
          </label>
          <input
            type="text"
            id="product_price"
            name="product_price"
            value={product.product_price}
            onChange={handleChange}
            className="input border w-full"
            placeholder="Enter Product Price"
          />
        </div>

        {/* Product Details */}
        <div>
          <label
            htmlFor="product_details"
            className="block text-lg font-medium"
          >
            Product Details
          </label>
          <textarea
            id="product_details"
            name="product_details"
            value={product.product_details}
            onChange={handleChange}
            className="input border w-full"
            rows="4"
            placeholder="Enter Product Details"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="btn w-full bg-green-500 text-white font-bold hover:bg-green-700 transition-all"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
