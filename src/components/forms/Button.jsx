import React from 'react'

function Button({ type, label, pending }) {
    return (
        <button type={type} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded" disabled={pending}>
            {pending ? (
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
                    <span className="text-sm">Submitting...</span>
                </div>
            ) : (
                label
            )}
        </button>
    );
}

export default Button