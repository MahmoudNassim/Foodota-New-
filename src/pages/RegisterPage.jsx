import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AuthRepo } from "../data/repo/AuthRepo";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const passwordRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$";

  const phoneRegex = /^\+201[0125]\d{8}$/;

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid E-mail").required("Requierd Field"),
    username: Yup.string().required("Requierd Field"),
    password: Yup.string()
      .required("Requierd Field")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. @, $, !, %, , ?, &)."
      ),
    phone: Yup.string()
      .required("Required Field")
      .matches(phoneRegex, "Invalid Phone Number"),
  });

  const navigat = useNavigate();
  const handleSubmit = (values) => {
    AuthRepo.register(values).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "You have registered successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        sessionStorage.setItem("token", res.jwt);
        navigat("/");
      }
    });
  };
  return (
    <div className="container max-w-7xl mx-auto p-3 w-full h-full flex justify-center items-center ">
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{
          email: "",
          password: "",
          username: "",
          phone: "",
        }}
      >
        <Form className=" w-[550px] flex flex-col gap-3 rounded-2xl shadow-2xl border-1 p-3 my-6 bg-white ">
          <h1 className="text-2xl font-bold p-2">Register</h1>
          <label htmlFor="email" className="w-full">
            Enter Your E-mail
          </label>
          <Field
            name="email"
            type="text"
            className="input border-1 focus:border-0 w-full "
          />
          <ErrorMessage component="div" name="email" className="text-red-500" />

          <label className="w-full"> Enter you phone</label>
          <Field
            type="text"
            name="phone"
            className="input border-1 focus:border-0 w-full "
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 "
          />

          <label htmlFor="username" className="w-full">
            Enter Your username
          </label>
          <Field
            name="username"
            type="text"
            className="input border-1 focus:border-0 w-full "
          />
          <ErrorMessage
            component="div"
            name="username"
            className="text-red-500"
          />

          <label htmlFor="password" className="w-full">
            Enter Your Password
          </label>
          <Field
            name="password"
            type="password"
            className="input border-1 focus:border-0 w-full "
          />
          <ErrorMessage
            component="div"
            name="password"
            className="text-red-500"
          />

          <button
            type="submit"
            className="btn btn-warning text-black font-bold hover:bg-black hover:text-white transition-all duration-[400ms]"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
