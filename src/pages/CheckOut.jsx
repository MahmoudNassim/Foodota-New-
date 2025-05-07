import React, { useEffect } from "react";
import PaymentForm from "../components/CreditCard";

export default function CheckOut() {
  useEffect(() => {
    sessionStorage.removeItem("redirect");
  }, []);
  return (
    <div>
      <PaymentForm />
    </div>
  );
}
