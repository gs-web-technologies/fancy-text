"use client";
import React, { useState } from 'react';
import { MAX_SIZE, ALLOWED_TYPES } from "@/utils/const";

function FileInput({ name, type, placeholder, accept, description, register, setValue, SetSelectedFile, error }) {
    const [uploading, SetUploading] = useState(false);
    const handelChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        SetUploading(true);
        if (!ALLOWED_TYPES.includes(file.type)) {
            alert("Invalid file type.");
            return;
        }else if (file.size > MAX_SIZE) {
            alert(`File exceeds ${MAX_SIZE} limit.`);
            return;
        }else {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) {
                    const err = await res.json();
                    console.error("Upload failed:", err.error);
                    return;
                }

                const data = await res.json();
                setValue("logo", data.url);
                SetSelectedFile(data.url);

            } catch (err) {
                console.error("Network error:", err);
            } finally {
                SetUploading(false);
            }
        }
    };

    return (
        <div className="relative z-0 w-full mb-3 group">

            <input
                type={type}
                {...register(name)}
                id={name}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                accept={accept}
                onChange={(e) => {
                    handelChange(e);
                }}
            />
            {uploading && (
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                    <span className="text-sm text-gray-600">Uploading image...</span>
                </div>
            )}

            <label htmlFor={name} className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{placeholder}</label>

            <small className='text-gray-600 text-small'>{description}</small>

            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
}

export default FileInput