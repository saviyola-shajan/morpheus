import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState,useEffect } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(2, "Name must be at least 2 characters long"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  message: Yup.string(),
});

function EmailSend() {
  const [emailStatus, setEmailStatus] = useState({
    sending: false,
    success: null,
  });
  const initialValues = { name: "", email: "", phone: "", message: "" };

  useEffect(() => {
    let timer;
    if (emailStatus.success !== null) {
      timer = setTimeout(() => {
        setEmailStatus({ sending: false, success: null });
      }, 3000);
    }
    return () => clearTimeout(timer); 
  }, [emailStatus]);
 
  const serviceId="service_yaltwx8"
  const templateId="template_01fe4lk"
  const publicId="Os9V1JVZ-6gLVRJns"

  const onSubmit = (values, { resetForm }) => {
    setEmailStatus({ sending: true, success: null });

    const templateParams = {
      name: values.name,
      email: values.email,
    phone: values.phone,
      to_name:"Morpheus Ads",
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams,publicId )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailStatus({ sending: false, success: true });
        resetForm();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setEmailStatus({ sending: false, success: false });
      })
  };

  return (
    <div className="relative w-full lg:w-3/4 p-6">
      <div className="pt-8 border-t-2 lg:border-l-2 lg:border-t-0 border-red-600 ">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting, e }) => onSubmit(values, { resetForm, setSubmitting, e })}
          >
            {({ isSubmitting }) => (
              <Form className="max-w-lg mx-auto p-6 mb-12 border-2 border-red-600 shadow-md rounded">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-bold mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-bold mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-white font-bold mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white font-bold mb-2">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600"
                    rows="4"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white p-2 rounded text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
                {emailStatus.sending && (
            <p className="text-green-700 mt-4 ml-60 text-m">Sending Email...</p>
          )}
          {emailStatus.success === true && (
            <p className="text-green-500 mt-4 ml-56 text-xl">Email sent successfully...!</p>
          )}
          {emailStatus.success === false && (
            <p className="text-red-700 mt-4 ml-44 text-lg">Failed to send email. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailSend;
