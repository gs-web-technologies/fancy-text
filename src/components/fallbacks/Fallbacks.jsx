import React from 'react'

function Fallbacks() {
    return (
        <div className="flex justify-center items-center py-6">
            <button
                type="button"
                disabled
            >
                <div className='flex'>
                    <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                    Loading...
                </div>
            </button>
        </div>
    );
}

export default Fallbacks