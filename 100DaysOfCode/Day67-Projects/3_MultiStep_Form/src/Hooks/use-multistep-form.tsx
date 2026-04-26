import { useState } from "react";
import { personalInfoSchema, addressInfoSchema, BillingInfoSchema } from "../lib/types";

export const stepschemas = [
    personalInfoSchema,
    addressInfoSchema,
    BillingInfoSchema
];

export function useMultiStepForm() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if (i >= stepschemas.length - 1) return i;
            return i + 1;
        });
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i;
            return i - 1;
        });
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        stepSchema: stepschemas[currentStepIndex],
        next,
        back,
        goTo,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === stepschemas.length - 1,
    };
}