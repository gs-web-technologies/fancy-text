import VisitingCardA from '@/components/visiting-cards/VisitingCardA';
import React from 'react'
import SingleVisitingCard from './SingleVisitingCard';
import VisitingCardB from '@/components/visiting-cards/VisitingCardB';
import VisitingCardC from '@/components/visiting-cards/VisitingCardC';
import VisitingCardD from '@/components/visiting-cards/VisitingCardD';
import VisitingCardE from '@/components/visiting-cards/VisitingCardE';

function VisitingCards({ formValues, selectedFile, issubmitted, hasStarted }) {
    const templates = [
        VisitingCardA,VisitingCardB,VisitingCardC,VisitingCardD,VisitingCardE
    ];
    return (
        <div>
            {formValues && (
                <div className="justify-center items-center">
                    <div className="flex flex-wrap gap-4">
                        {
                            templates.map((CardComponet, index) => {
                                return (
                                    <SingleVisitingCard
                                        key={index}
                                        CardComponent={CardComponet}
                                        formValues={formValues}
                                        selectedFile={selectedFile}
                                        issubmitted={issubmitted}
                                        hasStarted={hasStarted}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default VisitingCards
