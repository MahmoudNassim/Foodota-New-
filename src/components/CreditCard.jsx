import { RiVisaLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RestRepo } from "../data/repo/RestRepo";
import { useCart } from "../store/store";

export default function PaymentForm() {
  const removeCart = useCart((state) => state.removeCart);
  const cart = useCart((state) => state.cart);

  const navigate = useNavigate();

  const formatCardNumber = (number) => {
    return number
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required").max(20),
    cardNumber: Yup.string()
      .required("Required")
      .matches(/^\d{16}$/, "Must be 16 digits"),
    expiry: Yup.string()
      .required("Required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Must be MM/YY"),
    cvv: Yup.string()
      .required("Required")
      .matches(/^\d{3,4}$/, "Must be 3 or 4 digits"),
  });

  const handleConfirm = () => {
    Swal.fire({
      icon: "success",
      title: "Payment Confirmed",
      showConfirmButton: false,
      timer: 1500,
    });
    RestRepo.storeProducts(cart);
    removeCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Payment Information
      </h1>

      <Formik
        initialValues={{ name: "", cardNumber: "", expiry: "", cvv: "" }}
        validationSchema={validationSchema}
        onSubmit={handleConfirm}
      >
        {({ values, handleChange }) => (
          <>
            {/* Credit Card Preview */}
            <div className="w-full max-w-sm mb-8">
              <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white rounded-2xl shadow-xl p-6 h-56 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 rounded-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm opacity-70">Card Number</div>
                    <div className="text-xl font-mono tracking-widest mt-1">
                      {formatCardNumber(values.cardNumber.padEnd(16, "•"))}
                    </div>
                  </div>
                  <div className="text-white text-4xl">
                    <RiVisaLine />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm opacity-70">Cardholder Name</div>
                  <div className="text-lg font-mono uppercase mt-1">
                    {values.name || "FULL NAME"}
                  </div>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div>
                    <div className="text-sm opacity-70">Valid Thru</div>
                    <div className="text-md font-mono">
                      {values.expiry || "MM/YY"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-70">CVV</div>
                    <div className="text-md font-mono">
                      {values.cvv || "•••"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <Form className="grid grid-cols-2 gap-4 w-full max-w-sm text-gray-700">
              <div className="col-span-2">
                <label className="block text-sm mb-1" htmlFor="name">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  maxLength={20}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm mb-1" htmlFor="cardNumber">
                  Card Number
                </label>
                <Field
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                    handleChange({
                      target: { name: "cardNumber", value: val },
                    });
                  }}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="expiry">
                  Expiration (MM/YY)
                </label>
                <Field
                  id="expiry"
                  name="expiry"
                  type="text"
                  onChange={(e) => {
                    let val = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
                    if (val.length > 2)
                      val = val.slice(0, 2) + "/" + val.slice(2);
                    handleChange({ target: { name: "expiry", value: val } });
                  }}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="expiry"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="cvv">
                  Security Code
                </label>
                <Field
                  id="cvv"
                  name="cvv"
                  type="text"
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
                    handleChange({ target: { name: "cvv", value: val } });
                  }}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="cvv"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Confirm Button */}
              <div className="col-span-2 mt-4">
                <button type="submit" className="btn w-full btn-warning">
                  Confirm
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
