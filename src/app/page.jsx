import Button from '@/components/Button';
import Video from '@/components/Video';
import Picture from '@/components/Picture';
import groupPicture from '@/public/img/groupPicture.jpg';
import Schedule from '@/components/Schedule';
import Cpr1 from '@/public/img/cpr1.jpg';
import Cpr2 from '@/public/img/cpr2.jpg';

export default function Page() {
  return (
    <>
      <div className="px-36">
        {/* section 1 */}
        <div className="w-full flex pb-40">
          <div className="w-[50%]">
            <h1 className="font-outfit text-5xl font-extrabold pb-8">
              Start Your Journey Towards A Fulfilling Nursing Career With Us
            </h1>
            <a href="/register">
              <Button
                text="REGISTER"
                isBig={true}
                isInverted={false}
                className=""
              />
            </a>
          </div>
          <Video />
        </div>

        {/* section 2 */}
        <div className="w-full flex pb-24">
          <div className="w-[50%]">
            <Picture width="500" alt="group photo" src={groupPicture} />
          </div>

          <div className="w-[50%]">
            <h1 className="font-outfit text-5xl font-extrabold pb-2">
              We offer Day, Evening, and Weekend classes to fit all schedule
              types.
            </h1>
            <h3 className="font-roboto font-medium text-lg">
              *Students will attend the Lecture portion first before moving onto
              the Clincial portion.
            </h3>
          </div>
        </div>

        {/* section 3 */}
        <div className="w-full flex pb-40 justify-center">
          <div className="w-1/2">
            <Schedule isCurrent={true} className="" />
          </div>
          <div className="w-1/2">
            <Schedule isCurrent={false} className="" />
          </div>
        </div>

        {/* section 4 */}
        <div className="w-full flex flex-col pb-40 justify-center">
          <p className="font-roboto tracking-[0.2rem] text-xl  pb-8">
            Looking to start a rewarding career in healthcare? Our nurse
            assistant program is the perfect way to kick-start your journey.
            Learn how to provide valuable care and support to patients in
            variety of settings, from hospitals to long-term care facilities.
            Our experienced instructors will teach you the skills you need to
            succeed, including taking vital signs, providing basic care, and
            assisting with activities of daily living.
          </p>
          <p className="font-roboto tracking-[0.2rem]  text-xl  pb-8">
            At our school, we provide hands-on training that will prepare you
            for a fulfilling career as a nurse assistant. We offer flexible
            scheduling options so you can balance your education with other
            commitments, and our friendly staff are always available to answer
            any questions you may have.
          </p>
          <p className="font-roboto tracking-[0.2rem]  text-xl ">
            Our program is accredited, and our graduates consistently score high
            on certification exams. Join us and start a career where you can
            make a difference in people&apos;s lives everyday. Contact us today
            to learn more about our nurse assistant program and how we can help
            you achieve your career goals.
          </p>
        </div>

        {/* section 5 */}
        <div className="w-full flex pb-36 justify-center">
          <div className="pr-8">
            <Picture width="700" alt="group photo" src={Cpr1} />
          </div>
          <div className="pl-8">
            <Picture width="700" alt="group photo" src={Cpr2} />
          </div>
        </div>
      </div>
    </>
  );
}
