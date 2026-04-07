"use client";
import Secound from "@/components/email-signature/Secound";
import SignatureTemlateA from "@/components/email-signature/SignatureTemlateA";
import SignatureTemlateB from "@/components/email-signature/SignatureTemlateB";
import SignatureTemlateC from "@/components/email-signature/SignatureTemlateC";
import SignatureTemlateD from "@/components/email-signature/SignatureTemlateD";
import SignatureTemlateG from "@/components/email-signature/SignatureTemlateG";
import SignatureTemlateF from "@/components/email-signature/SignatureTemlateF";
import SignatureTemlateE from "@/components/email-signature/SignatureTemlateE";
import SignatureTemlateI from "@/components/email-signature/SignatureTemlateI";
import SignatureTemlateJ from "@/components/email-signature/SignatureTemlateJ";
import SignatureTemlateK from "@/components/email-signature/SignatureTemlateK";
import SignatureTemlateL from "@/components/email-signature/SignatureTemlateL";
import SignatureTemlateM from "@/components/email-signature/SignatureTemlateM";
import SignatureTemlateN from "@/components/email-signature/SignatureTemlateN";
import SignatureTemlateO from "@/components/email-signature/SignatureTemlateO";
import SignatureTemlateP from "@/components/email-signature/SignatureTemlateP";
import SignatureTemlateQ from "@/components/email-signature/SignatureTemlateQ";
import SignatureTemlateR from "@/components/email-signature/SignatureTemlateR";
import SignatureTemlateS from "@/components/email-signature/SignatureTemlateS";
import SignatureTemlateT from "@/components/email-signature/SignatureTemlateT";
import SingleSignatureCard from './SingleSignatureCard';
import EmailTemplate from '@/components/templates/EmailTemplate';

function Signatures({ formValues, selectedFile, issubmitted, hasStarted }) {
    const templates = [
        SignatureTemlateA, SignatureTemlateB, SignatureTemlateC, SignatureTemlateD,
        SignatureTemlateE, SignatureTemlateF, SignatureTemlateG, Secound,
        SignatureTemlateI, SignatureTemlateJ, SignatureTemlateK, SignatureTemlateL,
        SignatureTemlateM, SignatureTemlateN, SignatureTemlateO, SignatureTemlateP,
        SignatureTemlateQ, SignatureTemlateR, SignatureTemlateS, SignatureTemlateT,
    ];

    return (
        <div>
            {formValues && (
                <div className="justify-center items-center">
                    <div className="flex flex-wrap gap-4">
                        {
                            templates.map((CardComponet, index) => {
                                return (
                                    <div className="min-w-full group relative" key={index}>
                                        <EmailTemplate issubmitted={issubmitted}>
                                                <SingleSignatureCard
                                                    CardComponent={CardComponet}
                                                    formValues={formValues}
                                                    selectedFile={selectedFile}
                                                    hasStarted={hasStarted}
                                                />
                                        </EmailTemplate>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signatures