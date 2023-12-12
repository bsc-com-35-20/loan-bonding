import { BankDetails } from "./BankDetails";
import { useFormState } from "./FormContext";
import { GuardianDetails } from "./GuardianDetails";
import { PersonalInfor } from "./PersonalInfor";
import { UniversityDetails } from "./UniversityDetails";

export function FormStep(){

    const { step } = useFormState();

    switch(step){
        case 1:
            return <PersonalInfor />;
        case 2:
            return <BankDetails />;
        case 3:
            return <GuardianDetails />;
        case 4:
            return <UniversityDetails />;
        default:
            return null;
    }
}