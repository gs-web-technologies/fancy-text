import React from 'react'
import SingleVisitingCard from './SingleVisitingCard';
import VisitingCardA from '@/components/visiting-cards/VisitingCardA';
import VisitingCardB from '@/components/visiting-cards/VisitingCardB';
import VisitingCardC from '@/components/visiting-cards/VisitingCardC';
import VisitingCardD from '@/components/visiting-cards/VisitingCardD';
import VisitingCardE from '@/components/visiting-cards/VisitingCardE';
import VisitingCardF from '@/components/visiting-cards/VisitingCardF';
import VisitingCardG from '@/components/visiting-cards/VisitingCardG';
import VisitingCardH from '@/components/visiting-cards/VisitingCardH';
import VisitingCardI from '@/components/visiting-cards/VisitingCardI';
import VisitingCardJ from '@/components/visiting-cards/VisitingCardJ';
import VisitingCardK from '@/components/visiting-cards/VisitingCardK';
import VisitingCardL from '@/components/visiting-cards/VisitingCardL';
import VisitingCardM from '@/components/visiting-cards/VisitingCardM';
import VisitingCardN from '@/components/visiting-cards/VisitingCardN';
import VisitingCardO from '@/components/visiting-cards/VisitingCardO';
import VisitingCardP from '@/components/visiting-cards/VisitingCardP';
import VisitingCardQ from '@/components/visiting-cards/VisitingCardQ';
import VisitingCardR from '@/components/visiting-cards/VisitingCardR';
import VisitingCardS from '@/components/visiting-cards/VisitingCardS';
import VisitingCardT from '@/components/visiting-cards/VisitingCardT';
import VistingCardTemplate from '@/components/templates/VistingCardTemplate';

function VisitingCards({ formValues, selectedFile, issubmitted, hasStarted }) {
    const templates = [
        VisitingCardA, VisitingCardB, VisitingCardC, VisitingCardD,
        VisitingCardE, VisitingCardF, VisitingCardG, VisitingCardH, VisitingCardI, VisitingCardJ,
        VisitingCardK, VisitingCardL, VisitingCardM, VisitingCardN, VisitingCardO, VisitingCardP,
        VisitingCardQ, VisitingCardR, VisitingCardS, VisitingCardT
    ];
    return (
        <div>
            {formValues && (
                <div className="justify-center items-center">
                    <div className="flex flex-wrap gap-4">
                        {
                            templates.map((CardComponet, index) => {
                                return (
                                    <div key={index}>
                                    <VistingCardTemplate>
                                        <SingleVisitingCard
                                            key={index}
                                            CardComponent={CardComponet}
                                            formValues={formValues}
                                            selectedFile={selectedFile}
                                            issubmitted={issubmitted}
                                            hasStarted={hasStarted}
                                        />
                                    </VistingCardTemplate>
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

export default VisitingCards
