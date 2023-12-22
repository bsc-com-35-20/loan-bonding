'use client'

import '../terms/terms.css'
import { useRouter } from 'next/navigation';

export default function TermsAndConditions() {

  const router= useRouter();
  const navigateToForm = () => {
   
    router.push('/Form');
  };

  return (
    <div className='terms'>
     <h1>TERMS AND CONDITIONS</h1>
     <br/>
        <h2>1. Repayment Timeline</h2>
        <p >
          A loan beneficiary shall, within two (2) years upon successful or unsuccessful
          completion of the course for which the loan was granted, or upon earlier termination
          of such course for any reason or cause whatsoever, start the repayment of his/her
          student loan to the Board.
        </p>
  
        <h2 >2. Repayment Period</h2>
        <p>
          The loan shall be repaid over a maximum period of five (5) years commencing two (2)
          years after completion of studies, beyond which the Board will have the right to take
          legal action.
        </p>
  
        <h2>3. Annual Application</h2>
        <p>
          The loans shall be applied for each and every year.
        </p>
  
        <h2>4. Interest and Fee</h2>
        <p>
          The loan shall be repaid with a value maintaining fee of 15% compound interest at
          maturity, which is two (2) years after successful/unsuccessful completion for a
          maximum period of five (5) years.
        </p>
  
        <h2>5. Interest Rate Changes</h2>
        <p>
          The Board shall have the sole discretion of changing and varying the interest rate as
          circumstances shall demand.
        </p>
  
        <h2>6. Evaluation and Approval</h2>
        <p>
          The Board retains the right to evaluate all loan applications and determine the number
          of beneficiaries. (This application is not a guarantee that the loan shall be approved)
        </p>
  
        <h2>7. Discontinuation of Studies</h2>
        <p>
          In the event that the Loan Applicant discontinues studies for whatever reason before
          full disbursement is made, the Board shall not disburse the remaining allocation.
        </p>

        <h2>8. Repayment Schedule</h2>
      <p>
        At a minimum, the loan shall be repayable in equal monthly installments as determined
        by the Board. Once-off payments are also accepted.
      </p>

      <h2>9. Default in Repayment</h2>
      <p>
        If a Loan Applicant defaults in repayment when the loan is due, the whole amount shall
        become due and payable. The Loan Applicant shall be bound to pay all other charges that
        may arise as a result of the default, including but not limited to legal fees and penalties.
      </p>

      <h2>10. Certification and Agreement</h2>
      <p>
        The signature of the applicant shall certify the reading, understanding, and being in
        agreement with the terms and conditions herein.
      </p>

      <h2>11. Loan Disbursement</h2>
      <p>
        No loan shall be disbursed unless the loan application form is approved and upon the
        Loan Applicant completing the bonding form and the letter of undertaking, which shall
        be required to be submitted to the Secretariat.
      </p>
      <br/>
      <button onClick={navigateToForm}>
            I Accept the Terms and Conditions
          </button>
      <div>
      </div>
    </div>
  );
}
    