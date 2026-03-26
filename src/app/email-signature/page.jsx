"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import Input from "@/components/forms/Input";
import Button from "@/components/forms/Button";
import { useFormStatus } from "react-dom";
import First from "@/components/email-signature/First";
import FileInput from "@/components/forms/FileInput";


const schema = z.object({
    full_name: z
        .string()
        .min(3, { message: "Full name must be at least 3 characters long." })
        .max(100, { message: "Full name must not exceed 100 characters." }),

    email: z
        .string()
        .email({ message: "Please enter a valid email address." })
        .min(5, { message: "Email must be at least 5 characters long." })
        .max(50, { message: "Email must not exceed 50 characters." }),

    job_title: z
        .string()
        .min(3, { message: "Job title must be at least 3 characters long." })
        .max(50, { message: "Job title must not exceed 50 characters." }),

    phone_no: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(15, { message: "Phone number must not exceed 15 digits." })
        .regex(/^[0-9]+$/, {
            message: "Phone number should contain only numbers.",
        }),

    organization_name: z
        .string()
        .min(5, { message: "Organization Name must be at least 5 characters long." })
        .max(500, { message: "Organization Name must not exceed 500 characters." }),
        


});

export default function EmailSignature() {
    const { register, setValue, handleSubmit, reset, watch, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    const [data, SetData] = useState("");
    const [isloding, setLoading] = useState(false);
    const [issubmitted, setSubmitted] = useState(false);
    const formValues = watch();

    const onSubmit = async (formdata) => {
        setLoading(true);
        try {
            const res = await fetch('/api/submit', {
                method: "POST",
                header: { "Content/type": "application/json" },
                body: JSON.stringify(formdata)
            });

            const result = await res.json();
            if (res.success) setSubmitted(true);
            reset();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

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
                        name="organization_name"
                        type="text"
                        placeholder="Organization Name"
                        register={register}
                        error={errors.organization_name} />


                    <FileInput
                        name="logo"
                        type="file"
                        placeholder="Logo"
                        accept='.png, .jpeg, .jpg'
                        description='png, jpg, up to 2MB'
                        register={register}
                        setValue = {setValue}
                        error={errors.logo} />

                    <Button
                        type="submit"
                        label="Submit"
                        pending={isloding} />

                </div>

            </form>

            {formValues && 
              <First name={formValues.full_name} email={formValues.email} job_title={formValues.job_title} phone_no={formValues.phone_no} organization={formValues.organization_name} logo={formValues.logo} />
            }

        </div>
    );
}