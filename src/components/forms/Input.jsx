import React from 'react';

function Input({ name, type, placeholder, register, error }) {
    const url_input = ['facebook', 'linkedin', 'twitter', 'instagram', 'website'];
    if (url_input.includes(name)) {
        return (
            <div className="relative z-0 w-full mb-3 group">
                <input
                    type={type}
                    {...register(name, {
                        required: `{name} is required`,
                        pattern: {
                            value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/,
                            message: "Enter a valid URL",
                        },
                    })}
                    id={name}
                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "
                />

                <label htmlFor={name} className="absolute text-sm text-body text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{placeholder}</label>

                {error && <p className="text-red-500">{error.message}</p>}
            </div>
        );
    }

    return (
        <div className="relative z-0 w-full mb-3 group">
            <input
                type={type}
                {...register(name)}
                id={name}
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
            />

            <label htmlFor={name} className="absolute text-sm text-body text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{placeholder}</label>

            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
}

export default Input