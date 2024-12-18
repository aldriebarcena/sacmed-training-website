export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col pb-40 px-36 justify-center">
        <h1 className="font-outfit text-5xl font-extrabold pb-4 w-full text-center">
          Requirements
        </h1>
        <h3 className="font-roboto font-medium text-lg pb-8 w-full text-center">
          (Please register for a class session before completing the Program
          Requirements)
        </h3>

        <ul className="font-roboto tracking-[0.2rem] text-xl  pb-8">
          <li className="pb-2">
            1. Valid Government Photo ID (Driver&apos;s License, Identification Card,
            School ID, Passport, Alien Card)
          </li>
          <li className="pb-2">
            2. Social Security Card or ITIN (Individual Taxpayer Identification
            Number)
          </li>
          <li className="pb-2">3. LiveScan Fingerprint</li>
          <li className="pb-2">4. Physical Examination</li>
          <li className="pb-2">5. TB Test</li>
          <li className="pb-2">
            6. COVID 19 Vaccination Record - 
            <strong>(FULLY VACCINATED / Clinical Site Requirement) </strong>
          </li>
          <li className="pb-2">
            7. COVID 19 Booster (Clinical Site Requirement)
            <strong>
              * 1 booster shot is needed to participate in the program *
            </strong>
          </li>
          <li className="pb-2">
            8. Flu Vaccination (During Flu Season: State Requirement)
          </li>
        </ul>

        <p className="font-roboto tracking-[0.2rem] text-xl pb-8">
          <strong>
            For individuals (potential students) who have any CONVICTIONS:
            (Please read below information)
          </strong>
        </p>

        <a
          href="https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/CriminalRecordReview.aspx#Report"
          className="font-roboto tracking-[0.2rem] text-xl pb-8 text-mainTeal underline"
          target="_blank"
        >
          https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/CriminalRecordReview.aspx#Report
        </a>
        <p className="font-roboto tracking-[0.2rem] text-xl  pb-8">
          <strong>NOTE:</strong> CDPH (California Department of Public Health)
          evaluates criminal convictions for any offense  and either grants or
          denies certification based on criminal record clearance. Failure to
          obtain background clearance prohibits students from obtaining a CNA
          certification. 
        </p>
        <p className="font-roboto tracking-[0.2rem] text-xl  pb-8">
          CDPH will review LiveScan/DOJ results and determine if the individual
          is &quot;cleared&quot; or &quot;not cleared&quot;; and send the individual a letter
          explaining the results. 
        </p>
        <p className="font-roboto tracking-[0.2rem] text-xl  pb-12">
          If at anytime during the students training or after completion of the
          program and or after passing their competency test receive
          notification from the California Department of Public Health that they
          have been disqualified from certification, SacMed Training is not
          obligated to provide any monetary refund for services provided. 
        </p>
        <p className="font-roboto tracking-[0.2rem]  text-xl pb-6 text-left">
          <strong>Required Forms can be downloaded below</strong>
        </p>
        <a
          href="https://o.b5z.net/i/u/10070063/f/ProgramRequirements2k19MEDICAL.pdf"
          className="font-roboto tracking-[0.2rem] pb-2 text-xl text-mainTeal underline"
          target="_blank"
        >
          Physical and TB Forms
        </a>
        <a
          href="https://o.b5z.net/i/u/10070063/f/LivescanForm.pdf"
          className="font-roboto tracking-[0.2rem] pb-2 text-xl text-mainTeal underline"
          target="_blank"
        >
          Livescan/Fingerprinting Form (Blank)
        </a>
        <a
          href="https://o.b5z.net/i/u/10070063/f/LiveScanFormSample.pdf"
          className="font-roboto tracking-[0.2rem] pb-2 text-xl text-mainTeal underline"
          target="_blank"
        >
          LiveScan Form (Sample)
        </a>
        <a
          href="http://wellnessmart.com/"
          className="font-roboto tracking-[0.2rem] pb-2 text-xl text-mainTeal underline"
          target="_blank"
        >
          Click for location to get program requirements done
        </a>
      </div>
    </>
  );
}
