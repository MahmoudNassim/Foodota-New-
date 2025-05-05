import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthRepo } from "../data/repo/AuthRepo";
import Swal from "sweetalert2";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    AuthRepo.login(values).then((res) => {
      if (res) {
        localStorage.setItem("token", res.jwt);
        localStorage.setItem("user", JSON.stringify(res.user));
        Swal.fire({
          icon: "success",
          title: "You have Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="container max-w-7xl mx-auto p-3 w-full h-full flex justify-center items-center">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
      >
        <Form className="w-[550px] flex flex-col gap-3 rounded-2xl shadow-2xl border-1 p-3 my-6 bg-white">
          <h1 className="text-2xl font-bold p-2">Login</h1>

          <label htmlFor="email" className="w-full">
            Enter Your E-mail
          </label>
          <Field
            name="email"
            type="text"
            className="input border-1 focus:border-0 w-full"
          />
          <ErrorMessage component="div" name="email" className="text-red-500" />

          <label htmlFor="password" className="w-full">
            Enter Your Password
          </label>
          <Field
            name="password"
            type="password"
            className="input border-1 focus:border-0 w-full"
          />
          <ErrorMessage
            component="div"
            name="password"
            className="text-red-500"
          />

          <div className="flex flex-col sm:flex-row gap-2.5 text-sm">
            <p>Don't have an account?</p>
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register Now
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-warning text-black font-bold hover:bg-black hover:text-white transition-all duration-[400ms]"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
