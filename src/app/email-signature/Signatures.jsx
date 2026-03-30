import React from 'react';
import Secound from "@/components/email-signature/Secound";
import SignatureTemlateB from "@/components/email-signature/SignatureTemlateB";
import SignatureTemlateC from "@/components/email-signature/SignatureTemlateC";
import SignatureTemlateD from "@/components/email-signature/SignatureTemlateD";
import SignatureTemlateG from "@/components/email-signature/SignatureTemlateG";
import SignatureTemlateA from "@/components/email-signature/SignatureTemlateA";
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

function Signatures({ formValues, selectedFile }) {
    return (
        <div>
            {formValues && (
                <div className=" justify-center items-center">
                    <div className="">
                        <div className="flex flex-wrap gap-2">

                            {[SignatureTemlateA, SignatureTemlateB, SignatureTemlateC, SignatureTemlateD, SignatureTemlateE, SignatureTemlateF, SignatureTemlateG, Secound, SignatureTemlateI, SignatureTemlateJ, SignatureTemlateK, SignatureTemlateL, SignatureTemlateM, SignatureTemlateN, SignatureTemlateO, SignatureTemlateP, SignatureTemlateQ, SignatureTemlateR, SignatureTemlateS, SignatureTemlateT].map(
                                (CardComponent, index) => (
                                    <div className="min-w-full" key={index}>
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
                                        />
                                    </div>
                                )
                            )}

                        </div>

                    </div>
                </div>

            )}
        </div>
    );
}

export default Signatures