"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

const schema = z.object({
   full_name : z.string(),
   email : z.email(),
   job_title : ,
   phone_no : ,
   address : ,
   logo : ,

});

export default function EmailSignature() {
    const { register,
         handleSubmit,
          formState : {errors},
         } = useForm();
    const [data,SetData] = useState("");

    
    const onSubmit = (formData) => {
        SetData(JSON.stringify(formData));
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-white max-w-lg shadow-md rounded-2xl p-4 space-y-5"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-start">
                    Email Signature Form
                </h2>

                <div>

                    {/* Full Name */}
                    <div className="d-flex mb-2">
                        <label htmlFor="full_name" className="block text-sm text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            {...register("full_name")}
                            className="outline-none bg-transparent  h-[40px]"
                            placeholder="Full name"
                        />
                        <hr />
                        {errors.full_name && (
                            <p className="text-red-800">{errors.full_name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="d-flex mb-2">
                        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="outline-none bg-transparent h-[40px]"
                            placeholder="Email"
                        />
                        <hr />
                    </div>

                    {/* Job Title */}
                    <div className="d-flex mb-2">
                        <label className="block text-sm text-gray-600 mb-1">
                            Job Title
                        </label>
                        <input
                            type="text"
                            {...register("job_title")}
                            className="outline-none bg-transparent h-[40px]"
                            placeholder="Job title"
                        />
                        <hr />
                    </div>

                    {/* Phone */}
                    <div className="d-flex mb-2">
                        <label className="block text-sm text-gray-600 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            {...register("phone_no")}
                            className="outline-none bg-transparent h-[40px]"
                            placeholder="Phone Number"
                        />
                        <hr />
                    </div>

                    {/* Address */}
                    <div className="d-flex mb-2">
                        <label htmlFor="address" className="block text-sm text-gray-600 mb-1">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            {...register("address")}
                            className="outline-none bg-transparent h-[40px]"
                            placeholder="Address"
                        />
                        <hr />
                    </div>

                    {/* Logo */}
                    <div className="d-flex mb-2">
                        <label htmlFor="logo" className="block text-sm text-gray-600 mb-1">
                            Logo URL
                        </label>
                        <input
                            type="file"
                            id="logo"
                            {...register("logo")}
                            className="outline-none bg-transparent h-[40px]"
                        />
                        <hr className="w-50" />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="mt-4 btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    );
}