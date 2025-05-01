import React from "react";
import BlogCover from "../components/Blog/BlogCover";
import BlogBody from "../components/Blog/BlogBody";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F2F2F2]">
      <BlogCover />
      <BlogBody />
    </div>
  );
}
