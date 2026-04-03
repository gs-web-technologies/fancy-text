import React from 'react'

function RadioButton({type, value, name, id, SetTemplatetype, label}) {
    return (
        <div>
            <input
                type={type}
                value={value}
                name={name}
                id={id}
                onChange={() => {
                    SetTemplatetype(value);
                }}
            />
            <label 
            htmlFor={id} 
            className="p-2 text-[17px] text-bold">{label}</label>

        </div>
    )
}

export default RadioButton