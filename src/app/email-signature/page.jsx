"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import Input from "@/components/forms/Input";
import Button from "@/components/forms/Button";


const schema = z.object({
    full_name: z.string().min(3).max(100),
    email: z.email(),
    job_title: z.string().min(3).max(100),
    phone_no: z.string().min(9).max(15),
    address: z.string().min(3).max(500),
});

export default function EmailSignature() {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    }
    );
    const [data, SetData] = useState("");


    const onSubmit = (formData) => {
        SetData(JSON.stringify(formData));
        console.log(data);
    };

    return (
        <div className="min-h-screen flex pl-8 bg-gray-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-start">
                    Email Signature Form
                </h2>

                <div className="text-start">

                    <Input
                        name="full_name"
                        type="text"
                        placeholder="Full Name"
                        register={register}
                        error={errors.full_name} />


                    <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        register={register}
                        error={errors.email} />

                    <Input
                        name="job_title"
                        type="text"
                        placeholder="Job Title"
                        register={register}
                        error={errors.job_title} />

                    <Input
                        name="phone_no"
                        type="tel"
                        placeholder="Phone Number"
                        register={register}
                        error={errors.phone_no} />

                    <Input
                        name="address"
                        type="text"
                        placeholder="Address"
                        register={register}
                        error={errors.address} />

                    <Input
                        name="logo"
                        type="file"
                        placeholder="Logo"
                        accept = '.png, .jpeg, .jpg'
                        register={register}
                        error={errors.logo} />

                   <Button 
                     type="submit"
                     label="Submit" /> 
                  
                </div>

            </form>
        </div>
    );
}