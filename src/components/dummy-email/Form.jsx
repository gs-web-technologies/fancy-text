"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../forms/Input";

function Form({ email }) {
  const generatedemail = email;
  const [copied, setCopied] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();

  const copyEmail = async (formdata) => {
    const email = document.getElementById('email').value;
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  const submitForm = (formdata) => {
    console.log(formdata.email);
  }

  return (
    <div className="bg-black h-[15rem] text-white flex items-center justify-center">

      <div className="w-[85%] max-w-md">
        <b className="block mb-3 text-lg">Your Dummy email</b>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex gap-2">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow">
              <div className="px-2">
                <Input
                  name="email"
                  type="email"
                  placeholder=""
                  register={register}
                  error={errors.email}
                  value={generatedemail}
                  className="px-3 py-1 w-full text-sm text-black outline-none"
                />
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center justify-center px-3 h-full hover:bg-gray-200 text-white"
              >
                {!copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-10 h-10"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="p-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <button
                type="submit"
                className="flex items-center justify-center w-full h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-10 h-10 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;