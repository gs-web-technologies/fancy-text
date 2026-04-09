"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Form from "./Form";
import Fallbacks from "@/components/fallbacks/Fallbacks";


function EmailSignature() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    return (
        <div>
            <Form template={type} />
        </div>
    );
}

export default function EmailSignaturePage() {
    return (
        <Suspense fallback={<Fallbacks />}>
            <EmailSignature />
        </Suspense>
    );
}