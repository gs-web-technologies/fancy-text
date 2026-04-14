"use client";
import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from 'zod';
import CountryTable from './CountryTable';
import CountryMap from './CountryMap';

const schema = z.object({
    domain: z.string().min(5, { message: "Domain must be at least 5 characters long." }),
    dns_records: z.enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SRV', 'SOA', 'TXT', 'CAA'], {
        errorMap: () => ({
            message: "Please select a DNS record"
        })
    })
});


function Form() {
    const [isloding, setIsLoading] = useState(false);
    const options = ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SRV', 'SOA', 'TXT', 'CAA' ];
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    const [result, setResult] = useState([]);
    const submitForm = async (formdata) => {
        setIsLoading(true);
        try {
            const res = await fetch('api/dns-checker', {
                method: "post",
                header: { "Content/type": "application/json" },
                body: JSON.stringify(formdata)
            });

            const result = await res.json();
            if (result) {
                // console.log(result);
                if (result.success) {
                    setResult(result.data);
                }
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="grid grid-cols-3 gap-2 items-start">

            <div className="flex flex-col px-9">
                <div>
                    <form
                        onSubmit={handleSubmit(submitForm)}
                        className="w-full bg-white p-4 rounded rounded-base shadow-lg self-start max-h-[90vh]"
                    >
                        <div className='flex gap-5 w-full'>
                            <div className="w-1/2 pt-1">
                                <Input
                                    name="domain"
                                    type="text"
                                    placeholder="www.example.com"
                                    register={register}
                                    error={errors.domain}
                                />
                            </div>
                            <div className="w-1/2">
                                <SelectInput
                                    name="dns_records"
                                    placeholder="Select DNS record"
                                    register={register}
                                    option={options}
                                    error={errors.dns_records}
                                />
                            </div>
                        </div>
                        <div className="flex align-center justify-end">
                            <Button
                                type="submit"
                                label="Search"
                                pending={isloding} />
                        </div>
                    </form>
                </div>

                <div className="flex flex-col w-full">
                    <CountryTable result={result} />
                </div>
            </div>

            <div className='col-span-2'>
                <CountryMap result={result} isloding={isloding} />
            </div>


        </div>
    )
}

export default Form