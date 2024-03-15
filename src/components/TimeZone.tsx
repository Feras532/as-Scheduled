import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';
import CountrySelector from './CountrySelector';
import arrowDown from '../assets/down-arrow.png';
import schedule from "../assets/schedule.png";

const TimeZone: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [fromCountry, setFromCountry] = useState<string>('');
    const [toCountry, setToCountry] = useState<string>('');
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [convertedTime, setConvertedTime] = useState<string>('');

    const handleDateChange = (date: Date | null): void => {
        setStartDate(date);
    };

    const handleFromCountryChange = (country: string): void => {
        setFromCountry(country);
    };

    const handleToCountryChange = (country: string): void => {
        setToCountry(country);
    };

    const convertTime = (date: Date, fromTimeZone: string, toTimeZone: string): string => {
        const fromTime = moment(date).tz(fromTimeZone);
        const toTime = fromTime.clone().tz(toTimeZone);
        return toTime.format('MMMM d, yyyy h:mm aa');
    };

    const handleConvert = (): void => {
        if (fromCountry && toCountry && startDate) {
            const result = convertTime(startDate, fromCountry, toCountry);
            setConvertedTime(result);
            setIsFlipped(true);
        } else {
            console.log('Please select "from" and "to" countries.');
        }
    };

    const handleBack = (): void => {
        setIsFlipped(false);
    };

    return (
        <div className='absolute inset-x-0 top-80 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-[#D8E9A8] w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl text-center relative'>
                    {/* Front of the card */}
                    <div className={`${isFlipped ? 'hidden' : 'block'}`}>
                        <h2 className='text-3xl font-bold mb-4 text-[#1E5128]'>
                            ⏳Time Zone Converter⏳
                        </h2>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-row justify-around'>
                                <img src={schedule} alt="scheduleIcon" className='h-10 m-3' />
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    showTimeSelect
                                    timeIntervals={1}
                                    timeCaption='Time'
                                    dateFormat='MMMM d, yyyy h:mm aa'
                                    className='p-2 rounded text-[#191A19] mb-3 mt-3'
                                    wrapperClassName='date-picker'
                                />
                            </div>

                            <CountrySelector onChange={handleFromCountryChange} />
                            <img src={arrowDown} alt='arrow down' className='h-6 w-6 flex items-center my-2' />

                            <CountrySelector onChange={handleToCountryChange} />
                        </div>

                        <div className='mt-4'>
                            <button onClick={handleConvert} className='bg-[#4E9F3D] text-white p-3 rounded hover:bg-[#1E5128] transition-colors duration-300 w-40'>
                                Convert
                            </button>
                        </div>
                    </div>
                    {/* Back of the card */}
                    <div className={`${isFlipped ? 'block' : 'hidden'} rotate-y-180`}>
                        <h2 className='text-3xl font-bold mb-4 text-[#1E5128]'>
                            Converted Time
                        </h2>
                        <p className='mb-4'>{convertedTime}</p>
                        <button onClick={handleBack} className='bg-[#4E9F3D] text-white p-3 rounded hover:bg-[#1E5128] transition-colors duration-300 w-40'>
                            Back
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default TimeZone;