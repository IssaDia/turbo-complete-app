import "./App.css";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";

function App() {
  const [description, setDescription] = useState("");

  const handleSubmit = (values: any) => {
    setDescription("This is a placeholder description.");
    console.log(values);

    // You can make an API call to your algorithm with the image data.
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Turbo Complete
        </h1>

        <Formik initialValues={{ image: null }} onSubmit={handleSubmit}>
          {({ setFieldValue }: any) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-600"
                >
                  Upload Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("image", event?.currentTarget?.files?.[0]);
                  }}
                  className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>

        {description && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Description:</h2>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
