import React from 'react'

function SelectInput({ name, placeholder, register, option, error }) {
    return (
        <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="underline_select" className="sr-only">{placeholder}</label>
            <select id="underline_select" className="block py-2.5 ps-0 w-full text-sm text-body bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                {...register(name)} defaultValue="" 
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {option.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
}

export default SelectInput
