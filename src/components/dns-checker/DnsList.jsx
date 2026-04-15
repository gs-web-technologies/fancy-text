import { contriesFlag } from '@/utils/countries-flag'
import Link from 'next/link'
import React from 'react'

function DnsList() {
    return (
        <div className="w-[850px] text-black mt-2 bg-white p-4 rounded rounded-base shadow-lg">
            <h2 className="text-lg font-bold text-heading align-top">DNS List</h2>

            <div className='flex flex-col gap-10'>

                {/* IPS */}
                <div className=''>
                    <span className="px-3 py-1 text-sm font-semibold bg-gray-800 text-white">
                        IPs
                    </span>
                    <div className='grid grid-cols-4 pt-5'>
                        <div className='flex gap-2'>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className='w-5 h-5'
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20" />
                                <path d="M12 2a15 15 0 0 1 0 20" />
                                <path d="M12 2a15 15 0 0 0 0 20" />
                                <path d="M4 8a15 15 0 0 0 16 0" />
                                <path d="M4 16a15 15 0 0 1 16 0" />
                            </svg>
                            <Link href='#'>Public IPv4</Link>
                        </div>
                        <div className='flex gap-2'>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className='w-5 h-5'
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20" />
                                <path d="M12 2a15 15 0 0 1 0 20" />
                                <path d="M12 2a15 15 0 0 0 0 20" />
                                <path d="M4 8a15 15 0 0 0 16 0" />
                                <path d="M4 16a15 15 0 0 1 16 0" />
                            </svg>
                            <Link href='#'>Public IPv4</Link>
                        </div>
                    </div>
                </div>

                {/* Continents */}
                <div>
                    <span className="px-3 py-1 text-sm font-semibold bg-gray-800 text-white">
                        Continents
                    </span>

                    <div className="grid grid-cols-4 gap-5 pt-5">
                        {Object.keys(contriesFlag).map((continent, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                <span>🌍</span>
                                <span>{continent}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* countries */}
                <div>
                    <span className="px-3 py-1 text-sm font-semibold bg-gray-800 text-white">
                        Countries
                    </span>

                    <div className="grid grid-cols-4 gap-5 pt-5">
                        {Object.entries(contriesFlag).map(([continent, countries]) =>
                            countries.map((item, index) => (
                                <div
                                    key={`${continent}-${index}`}
                                    className="flex items-center gap-2"
                                >
                                    <img src={item.flag} alt={item.country} className="w-5 h-4" />
                                    <span>{item.country}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DnsList