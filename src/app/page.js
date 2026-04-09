"use client";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-cols-3 gap-10 my-auto mx-auto w-5/6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"> 
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Text Generator
                </h3>
                <p className="text-gray-600 mb-4">
                    Generate high-quality fancy text.
                </p>
                <Link href="/text-generator" className="btn px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition">
                   Generate Text
                </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Email Signature
                </h3>
                <p className="text-gray-600 mb-4">
                    Build professional email signatures for Gmail, Outlook, and more.
                </p>
                <Link href="/email-signature?type=1" className="btn px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                   Create Email Signature
                </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Visiting Card
                </h3>
                <p className="text-gray-600 mb-4">
                    Design beautiful visiting cards and download them in high quality.
                </p>
                <Link href="/email-signature?type=2" className="btn px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                    Create Card
                </Link>
            </div>


        </div>
    )
}