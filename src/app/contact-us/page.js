// pages/ContactUs.js
'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUs = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here (e.g., send data to server)
    console.log(values);

    // Reset form and set submitting to false
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center py-4 h-screenn">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={ContactUsSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;
