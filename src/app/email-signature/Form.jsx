"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import Input from "@/components/forms/Input";
import Button from "@/components/forms/Button";
import { useFormStatus } from "react-dom";
import FileInput from "@/components/forms/FileInput";
import { ALLOWED_TYPES, MAX_SIZE } from "@/utils/const";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';
import Signatures from "./Signatures";


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

    logo: z
        .refine((files) => {
            if (!files || files.length === 0) return true;
            const file = files[0];
            return ALLOWED_TYPES.includes(file.type);
        }, {
            message: "Only PNG or JPEG allowed",
        })
        .refine((files) => {
            if (!files || files.length === 0) return true;
            const file = files[0];
            return file.size <= MAX_SIZE;
        }, {
            message: "Max size is 2MB",
        }),


    linkedin: z.url('LinkedIn must be a valid URL').optional().or(z.literal('')),
    instagram: z.url('Instagram must be a valid URL').optional().or(z.literal('')),
    facebook: z.url('Facebook must be a valid URL').optional().or(z.literal('')),
    twitter: z.url('X must be a valid URL').optional().or(z.literal('')),


});


function Form() {
    const { register, setValue, handleSubmit, reset, watch, formState: { errors, isDirty } } = useForm({ resolver: zodResolver(schema) });
    const [hasStarted, sethasStarted] = useState(false);
    const [isloding, setLoading] = useState(false);
    const [issubmitted, setSubmitted] = useState(false);
    const formValues = watch();

    useEffect(() => {
        sethasStarted(isDirty);
    }, [isDirty]);

    const [selectedFile, SetSelectedFile] = useState();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500 })]);
    const onSubmit = async (formdata) => {
        setLoading(true);
        try {
            const res = await fetch('/api/submit', {
                method: "POST",
                header: { "Content/type": "application/json" },
                body: JSON.stringify(formdata)
            });

            const result = await res.json();
            console.log(result);
            if (result.success) {
                console.log("success");
                setSubmitted(true);
            }
            // reset();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-3">
            <div className=" ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-md mx-auto fixed bg-white p-6 rounded rounded-base shadow-lg self-start"
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


                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                name="linkedin"
                                type="text"
                                placeholder="LinkedIn"
                                register={register}
                                error={errors.linkedin} />

                            <Input
                                name="instagram"
                                type="text"
                                placeholder="Instagram"
                                register={register}
                                error={errors.instagram} />
                        </div>

                        <div className="grid grid-cols-2 gap-2">

                            <Input
                                name="facebook"
                                type="text"
                                placeholder="FaceBook"
                                register={register}
                                error={errors.facebook} />

                            <Input
                                name="twitter"
                                type="text"
                                placeholder="x"
                                register={register}
                                error={errors.twitter} />
                        </div>

                        <FileInput
                            name="logo"
                            type="file"
                            placeholder="Logo"
                            accept='.png, .jpeg, .jpg'
                            description='png, jpg, up to 2MB'
                            register={register}
                            setValue={setValue}
                            SetSelectedFile={SetSelectedFile}
                            error={errors.logo} />


                        <Button
                            type="submit"
                            label="Submit"
                            pending={isloding} />

                    </div>

                </form>
            </div>
            <div className="w-full mx-4 p-6 self-start col-span-2">
                <Signatures formValues={formValues} selectedFile={selectedFile} issubmitted={issubmitted} hasStarted={hasStarted} />
            </div>

        </div>
    )
}

export default Form
