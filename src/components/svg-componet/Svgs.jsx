import React from 'react'

function Svgs({ type }) {
    let result = '';
    switch (type) {
        case "tick": {
            result = (<svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                transform="translate(-15, -15)"
            >
                <circle cx="12" cy="12" r="10" fill="#50d32f" />
                <path
                    d="M7 12l3 3 7-7"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>);
            break;
        };
        case 'cross': {
            result = (<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                transform="translate(-12, -12)"
            >
                <circle cx="12" cy="12" r="10" fill="red" />
                <line
                    x1="8"
                    y1="8"
                    x2="16"
                    y2="16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="16"
                    y1="8"
                    x2="8"
                    y2="16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>);
            break;
        };

        case 'location': {
            result = (< svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="red"
                transform="translate(-12, -24)"
            >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>);
            break;
        };

        case 'hourglass': {
            result = (
                < svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="red"
                transform="translate(-12, -24)"
            >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
            );
            break;
        };

        default: result = '';
            beak


    }

    return result;
}

export default Svgs