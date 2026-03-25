import React from 'react'

function Button({type, label, pending}) {
    return (
       <button type={type} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded" disabled={pending}>{pending ? 'Submiting...' : label}</button>
    );
}

export default Button