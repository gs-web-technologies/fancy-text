"use client";
import { useSearchParams } from "next/navigation";
import Form from "./Form";


export default function EmailSignature() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    return (
        <div>
            <Form template={type} />
        </div>
    );
}