import React from 'react'

function SingleVisitingCard({ CardComponent, formValues, selectedFile, hasStarted }) {
    return (
        <div style={{ display: 'inline-block' }}>
            <CardComponent
                name={formValues.full_name}
                email={formValues.email}
                job_title={formValues.job_title}
                phone_no={formValues.phone_no}
                organization={formValues.organization_name}
                logo={selectedFile}
                website = {formValues.website}
                slogan = {formValues.slogan}
                hasStarted={hasStarted}
            />
        </div>
    )
}

export default SingleVisitingCard