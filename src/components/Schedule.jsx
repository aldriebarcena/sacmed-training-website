'use client';
import { useState } from 'react';

const Schedule = ({ isCurrent }) => {
  const [selectedCurrSchedule, setSelectedCurrSchedule] = useState('DAY');

  const currScheduleDetails = {
    DAY: {
      label: 'DAY',
      numWeeks: '4 WEEKS',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' 8 DAYS',
          days: 'MON - FRI',
          time: '8AM - 4PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' 16 DAYS',
          days: 'MON - FRI',
          time: '6AM - 2:30PM',
        },
      ],
    },
    EVENING: {
      label: 'EVENING',
      numWeeks: '8 WEEKS',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' 15 DAYS',
          days: 'MON - FRI',
          time: '4PM - 8PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' 26 DAYS',
          days: 'MON - FRI',
          time: '4PM - 8PM',
        },
      ],
    },
    NIGHT: {
      label: 'NIGHT',
      numWeeks: '10 WEEKS',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' 8 DAYS',
          days: 'SAT - SUN',
          time: '8AM - 4:30PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' 13 DAYS',
          days: 'SAT - SUN',
          time: '6AM - 2:30PM',
        },
      ],
    },
  };

  const [selectedUpSchedule, setSelectedUpSchedule] = useState('DAY');

  const UpScheduleDetails = {
    DAY: {
      label: 'DAY',
      dates: 'JAN 16 - FEB 14',
      numWeeks: '4 WEEKS',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' TBA',
          days: 'MON - FRI',
          time: '8AM - 4PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' TBA',
          days: 'MON - FRI',
          time: '6AM - 2:30PM',
        },
      ],
    },
    EVENING: {
      label: 'EVENING',
      numWeeks: '8 WEEKS',
      dates: 'TBA 2025',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' TBA',
          days: 'MON - FRI',
          time: '4PM - 8PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' TBA',
          days: 'MON - FRI',
          time: '4PM - 8PM',
        },
      ],
    },
    NIGHT: {
      label: 'NIGHT',
      numWeeks: '10 WEEKS',
      dates: 'TBA FEB 2025',
      times: [
        {
          type: 'LECTURE:',
          numDays: ' TBA',
          days: 'SAT - SUN',
          time: '8AM - 4:30PM',
        },
        {
          type: 'CLINICAL:',
          numDays: ' TBA',
          days: 'SAT - SUN',
          time: '6AM - 2:30PM',
        },
      ],
    },
  };

  return isCurrent === true ? (
    <div className="w-full flex justify-center items-center flex-col pr-8">
      <div className="font-outfit font-semibold text-4xl">Current Schedule</div>
      <div className="pt-6 flex pb-4">
        {Object.keys(currScheduleDetails).map(
          (
            key // maps through the keys of the object
          ) => (
            <button
              key={key} // sets the key to the current key
              className={`font-outfit font-medium text-xl px-8 ${
                selectedCurrSchedule === key // if the key is selected, keep it green, otherwise make it black
                  ? 'text-mainTeal border-b-2 border-mainTeal'
                  : 'text-black'
              }`}
              onClick={() => setSelectedCurrSchedule(key)} // if clicked, set the new key
            >
              {currScheduleDetails[key].label}
            </button>
          )
        )}
      </div>

      <div className="w-full rounded-md border-[1px] border-black bg-bgGray shadow-[5px_5px_0px_0px_#417978] p-8">
        <div className="font-outfit font-medium text-2xl pb-4 flex justify-center items-center">
          {currScheduleDetails[selectedCurrSchedule].numWeeks}
        </div>
        <div className="font-outfit text-2xl flex justify-between">
          {currScheduleDetails[selectedCurrSchedule].times.map(
            (time, index) => (
              <div className="flex flex-col" key={index}>
                <div className="font-roboto pb-2">
                  <strong>{time.type}</strong>
                  {time.numDays}
                </div>
                <div className="font-roboto font-bold">{time.days}</div>
                <div className="font-roboto">{time.time}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-center items-center flex-col pl-8">
      <div className="font-outfit font-semibold text-4xl">
        Upcoming Schedules
      </div>
      <div className="pt-6 flex pb-4">
        {Object.keys(UpScheduleDetails).map((key) => (
          <button
            key={key}
            className={`font-outfit font-medium text-xl px-8 ${
              selectedUpSchedule === key
                ? 'text-mainTeal border-b-2 border-mainTeal'
                : 'text-black'
            }`}
            onClick={() => setSelectedUpSchedule(key)}
          >
            {UpScheduleDetails[key].label}
          </button>
        ))}
      </div>

      <div className="w-full rounded-md border-[1px] border-black bg-bgGray shadow-[5px_5px_0px_0px_#417978] p-8">
        <div className="pb-4 flex justify-center items-center">
          <div className="font-outfit font-medium text-2xl px-4">
            {UpScheduleDetails[selectedUpSchedule].numWeeks}
          </div>
          <div className="font-outfit text-2xl font-medium mt-[1px] px-4">
            {UpScheduleDetails[selectedUpSchedule].dates}
          </div>
        </div>
        <div className="font-outfit text-2xl flex justify-between">
          {UpScheduleDetails[selectedUpSchedule].times.map((time, index) => (
            <div className="flex flex-col" key={index}>
              <div className="font-roboto pb-2">
                <strong>{time.type}</strong>
                {time.numDays}
              </div>
              <div className="font-roboto font-bold">{time.days}</div>
              <div className="font-roboto">{time.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
