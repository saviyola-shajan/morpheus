import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(2, "Name must be at least 2 characters long"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});
const onSubmit = (values) => {
  console.log(values);
};

function Contact() {
  const initialValues = { name: "", email: "", phone: "", message: "" };

  return (
    <div className="pt-20 flex items-center justify-center">
      <div className=" text-white border-2 border-red-600 rounded-md my-12 mr-52 ml-36 flex">
        <div className="w-2/4 p-8 pl-20">
          <div className="text-4xl pl-16 pt-10 ">HELLO....!</div>
          <br />
          <div className="text-xl">
            Lets &apos; Do Something Togeather ? Get inTouch For Questions,
            Budgets and More.... Leave Your Message Here......!
            <br />
            <br />
            <br />
            <div className="max-w-lg mx-auto mt-8 flex items-center space-x-4">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#f20202"
                  d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                />
              </svg>
              <a
                href="mailto:murphymorpheus.in@gmail.com"
                className="text-white font-medium hover:text-red-600"
              >
                murphymorpheus.in@gmail.com
              </a>
            </div>
            <br />
            <div className="max-w-lg mx-auto mt-8">
              <div>
                <div className="flex items-center">
                  <svg
                    className="w-8 h-8  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ff0000"
                      d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    />
                  </svg>
                  <div className="ml-2">
                    <a
                      href="tel:+919995546077"
                      className="block text-white font-medium hover:text-red-600 hover:underline"
                    >
                      +91 9995546077
                    </a>
                    <a
                      href="tel:+917994454499
"
                      className="block text-white font-medium hover:text-red-600 hover:underline"
                    >
                      +91 7994454499
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="max-w-lg mx-auto mt-8 flex">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#ff0000"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
              </div>
              <a
                href="https://maps.app.goo.gl/BuFcnS3Z5uH7dWsy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ml-4 hover:text-red-600">
                  <div className="mt-2">karayamapebil building</div>
                  <div>mukkathikal street lane - 4</div>
                  <div>MG road</div>
                  <div>chembumukku, kakkand</div>
                  <div>Kochi, Kerala 680314</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-3/4 p-6 top-3 bottom-3">
          <div className="pt-8 top-0 bottom-0 left-0 border-l-2 border-red-600 ">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="max-w-lg mx-auto p-6 mb-12  border-2 border-red-600 shadow-md rounded">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-white font-bold mb-2"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600  focus:rounded-md"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-white font-bold mb-2"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600  focus:rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-white font-bold mb-2"
                    >
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600  focus:rounded-md"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-white font-bold mb-2"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="bg-transparent border-red-600 w-full p-2 border rounded-md focus:outline-none focus:border-red-600  focus:rounded-md"
                      rows="4"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white p-2 rounded text-lg font-semibold"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Contact;
