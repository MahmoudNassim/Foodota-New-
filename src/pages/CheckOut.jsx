import React, { useEffect } from "react";

export default function CheckOut() {
  useEffect(() => {
    sessionStorage.removeItem("redirect");
  }, []);
  return <div>CheckOut</div>;
}
