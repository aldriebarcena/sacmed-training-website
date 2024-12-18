import Picture from '@/components/Picture';
import twoStudents from '@/public/img/twoStudents.png';

export default function Page() {
  return (
    <>
      <div className="w-full flex pb-40 px-36">
        <div className="w-1/2">
          <Picture width="450" src={twoStudents} alt="2 students" />
        </div>

        <div className="w-1/2">
          <h1 className="font-outfit text-5xl font-extrabold pb-8 w-full text-center">
            About Our Program
          </h1>
          <p className="font-roboto tracking-[0.2rem]  text-xl  pb-8">
            Our program is designed to give students a practical knowledge of a
            Nursing Assistant role. Students will learn to address the needs of
            the whole Patient or Resident while promoting independence and self
            care, emphasizing communication, infection control, safety, and
            clinical nursing. In addition, our goal is to prepare the student
            for the successful completion of the State Certification Examination
            and afterwards become an efficient and safe Certified Nursing
            Assistant.
          </p>
          <p className="font-roboto tracking-[0.2rem]  text-xl  pb-8">
            Our Nursing Assistant program has two components: the theoretical
            portion and clinical portion. The 1st portion of our program is
            comprised of 60 hours of theory and is held at the beginning of our
            program. The 2nd portion of our program is comprised of 100 hours of
            clinical experience for a total of 160 hours as required by the
            California Department of Public Health.
          </p>
          <p className="font-roboto tracking-[0.2rem]  text-xl  pb-8">
            The course content is delivered through lectures and instructor
            demonstrations exposing students to actual nursing procedures and
            techniques used in the clinic setting. Knowledge evaluation is
            continuous throughout our program by the use of test and student
            demonstration related to the course content presented in lecture.
          </p>
        </div>
      </div>
    </>
  );
}
