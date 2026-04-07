"use client";

function SingleSignatureCard({ CardComponent, formValues, selectedFile, hasStarted }) {
    return (
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
            hasStarted={hasStarted}
        />

    );
}

export default SingleSignatureCard