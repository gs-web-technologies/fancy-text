import Link from "next/link";

export default function Home() {
    return (
        <div className="d-flex flex-wrap gap-6 bg-white align-item-center justify-content-center h-[34px] mx-auto">
            <div>
                <Link href="/text-generator">Text Generator</Link>
            </div>
            <div>
                <Link href="/email-signature">Visting Card</Link>
            </div>
            <div>
                <Link href="/email-signature">Email Signature</Link>
            </div>
        </div>
    )
}