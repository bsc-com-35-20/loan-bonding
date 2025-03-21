import { useRouter } from "next/navigation";
import { BankDetails } from "./BankDetails";
import { useFormState } from "./FormContext";
import { GuardianDetails } from "./GuardianDetails";
import { PersonalInfor } from "./PersonalInfor";
import { UniversityDetails } from "./UniversityDetails";
import './form.css';
import { ApprovedLoan } from "./ApprovedLoan";
import Success from "../success/page";


export function FormStep(){

    const { step } = useFormState();

    switch(step){

        case 1: 
            return <PersonalInfor />;
        case 2:
            return <GuardianDetails />;
        case 3:
            return <UniversityDetails />;
        case 4:
            return <BankDetails />;
        case 5:
            return <ApprovedLoan />;
        
        default:
            return null;
    }
}