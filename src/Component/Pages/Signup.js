import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  number: "",
  password: "",
};
const ValiadiationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("Required"),
  number: yup.string().min(10, "Invalid Number").required("Required"),
  password: yup.string().min(8, "too short").required("Required"),
});
const onSubmit = (values) => {
  console.log("Values", values);
};

const Signup = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValiadiationSchema}
      onSubmit={onSubmit}
    >
      <Form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email" className="lable">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="number" className="lable">Phone No :</label>
          <Field name="number" type="number" />
          <ErrorMessage name="number" />
        </div>
        <div>
          <label htmlFor="password" className="lable">Password :</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit" className="btn-sub">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default Signup;
