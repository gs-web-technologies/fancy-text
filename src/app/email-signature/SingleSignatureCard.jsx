"use client";
import React, { useRef, useState } from 'react'

function SingleSignatureCard({ CardComponent, formValues, selectedFile, issubmitted, hasStarted }) {

    const [status, setStatus] = useState('idle');
    const signatureRef = useRef(null);
    const handleCopy = async () => {
        const node = signatureRef.current;
        if (!node) return;
        try {
            const html = node.outerHTML;
            const wrappedHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;">${html}</body></html>`;
            const plainText = node.innerText || node.textContent || '';

            if (typeof ClipboardItem !== 'undefined') {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'text/html': new Blob([wrappedHtml], { type: 'text/html' }),
                        'text/plain': new Blob([plainText], { type: 'text/plain' }),
                    }),
                ]);
            }
            setStatus('copied');
            setTimeout(() => setStatus('idle'), 2500);
        } catch (err) {
            console.log(err);
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
            }, 2500);
        }
    };
    return (
        <div className="min-w-full group relative">

            <div className="mb-2 flex items-center gap-3">
                <button
                    onClick={handleCopy}
                    style={{
                        backgroundColor: !issubmitted ? '#c0baba' : (status === 'copied' ? '#16a34a' : status === 'error' ? '#dc2626' : '#080808'),
                        color: '#ffffff',
                        border: 'none',
                        padding: '7px 16px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: 'Arial, sans-serif',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'background-color 0.2s ease',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                        cursor: !issubmitted ? 'not-allowed' : 'pointer',
                    }}
                    disabled={!issubmitted}
                >
                    {status === 'idle' && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="2" width="6" height="4" rx="1" />
                            <path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3" />
                        </svg>
                    )}
                    {status === 'idle' && 'Copy Signature'}
                    {status === 'copied' && '✓ Copied!'}
                    {status === 'error' && '✗ Failed – Try Again'}
                </button>
                {status === 'copied' && (
                    <p style={{
                        fontSize: '11px',
                        color: '#64748b',
                        fontFamily: 'Arial, sans-serif',
                    }}>
                        Go to email settings → Signature → Paste (Ctrl+V)
                    </p>
                )}
            </div>


            <div className=" text-start w-[700px] mt-2 mb-4 border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b bg-black">
                    <span className="text-sm font-medium text-white">
                        New Message
                    </span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>

                {/* Fields */}
                <div className="px-4 py-3 space-y-2 border-b border-gray-200">
                    <input
                        type="text"
                        placeholder="To"
                        className="w-full text-sm outline-none py-1"
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full text-sm outline-none py-1"
                        readOnly
                    />
                </div>

                {/* Body */}
                <div className="px-4 py-4 min-h-[200px] text-sm text-gray-700 space-y-3">
                    <input
                        type="text"
                        placeholder="Your message here"
                        className="w-full text-sm outline-none py-1"
                        readOnly
                    />
                    {/* ✨ SIGNATURE SLOT */}
                    <div className="pt-4 ">
                        <div>
                            <div ref={signatureRef} style={{ display: 'inline-block' }}>
                                <CardComponent
                                    name={formValues.full_name}
                                    email={formValues.email}
                                    job_title={formValues.job_title}
                                    phone_no={formValues.phone_no}
                                    organization={formValues.organization_name}
                                    logo={selectedFile}
                                    linkedin={formValues.linkedin}
                                    instagram={formValues.instagram}
                                    twitter={formValues.twitter}
                                    facebook={formValues.facebook}
                                    hasStarted = {hasStarted}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* The rendered signature — ref captures its HTML */}


        </div>
    );
}

export default SingleSignatureCard