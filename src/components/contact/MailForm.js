import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../UI/TextField";
import "./MailForm.css";
import * as Yup from "yup";

const MailForm = (props) => {
  const validate = Yup.object({
    name: Yup.string()
      .max(25, "Must be up to 25 characters")
      .required("Name is required"),
    message: Yup.string()
      .max(400, "Must be up to 400 characters")
      .required("Message is required"),
    email: Yup.string().email("Email is invalid").required("email is Required"),
  });
  const onSubmit = (e) => {
    e.preventDefault();
    {
      /* --- METHOD TO SEND THE MAIL --- */
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        
        <div className="expanded-content">
          <h4>Send me a direct mail</h4>
          <Form className="form-content">
            <TextField label="name" name="name" type="text" />
            <TextField label="email" name="email" type="text" />
            <TextField label="message" name="message" type="text" message={true}/>

            <div className="buttons">
              <button type="Send" className="submit-btn">Submit</button>
              <button onClick={props.onClose} className="closing-btn">Nevermind</button>  
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MailForm;
