"use client";
import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function Form() {
    const options = ['A','AAAA','CNAME','MX','NS','PTR','SRV','SOA','TXT','CAA','DS'];
    const [isloding, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = async (formdata) => {
        setIsLoading(true);
        try {
            const res = await fetch('api/dns-checker', {
                method: "post",
                header: { "Content/type": "application/json" },
                body: JSON.stringify(formdata)
            });
    
            const result = await res.json();
            console.log(result);

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(submitForm)}
                className="max-w-md mx-auto fixed bg-white p-4 rounded rounded-base shadow-lg self-start overflow-y-auto max-h-[90vh] my-auto"
            >
                <Input
                    name="domain"
                    type="text"
                    placeholder="www.example.com"
                    register={register}
                    error={errors.search}
                />

                <div className="relative z-0 w-full mb-3 group">
                    <select className=" p-3 block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" {...register('dns_records')}>
                        <option value="1">A</option>
                        <option value="1">AAAA</option>
                        <option value="1">MX</option>
                        <option value="1">NS</option>
                        <option value="1">TXT</option>
                        <option value="1">CNAME</option>
                        <option value="1">SOA</option>
                        <option value="1">PTR</option>
                        <option value="1">NAPTR</option>
                    </select>
                </div>

                <Button
                    type="submit"
                    label="Submit"
                    pending={isloding} />
            </form>
        </div>
    )
}

export default Form