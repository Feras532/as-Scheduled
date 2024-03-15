import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';
import CountrySelector from './CountrySelector';
import arrowDown from '../assets/down-arrow.png';
import animatedCopy from "../assets/animations/copy.json"
import Lottie from "lottie-react";
import PopupNotification from "./PopupNotification"

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
        return toTime.format('MMMM D, yyyy h:mm a');
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
    // Added states for popup notification
    const [popupMessage, setPopupMessage] = useState<string>('');
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const copyToClipboard = async () => {
        if (convertedTime) {
            try {
                await navigator.clipboard.writeText(convertedTime);
                setPopupMessage('Copied to clipboard!'); // Set the popup message
                setShowPopup(true); // Show the popup
                setTimeout(() => {
                    setShowPopup(false); // Hide the popup after 2 seconds
                }, 2000);
            } catch (err) {
                console.error('Failed to copy!', err);
            }
        }
    };

    return (
        <div className='absolute inset-x-0 top-80 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-[#D8E9A8] w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl text-center relative'>
                {/* Front of the card */}
                <div className={`${isFlipped ? 'hidden' : 'block'}`}>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-[#1E5128]'>
                        ⏳Time Zone Converter⏳
                    </h2>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row justify-around'>
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
                <div className={`${isFlipped ? 'block' : 'hidden'} rotate-y-180 p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105`}>
                    <h2 className='text-4xl font-bold mb-4 text-[#1E5128] text-center'>
                        Converted Time
                    </h2>
                    <PopupNotification
                        message={popupMessage}
                        show={showPopup}
                        onClose={() => setShowPopup(false)}
                    />

                    <p className='text-sm text-gray-500 text-center mb-2'>
                        From <span className='text-black'>{fromCountry}</span> to <span className='text-black'>{toCountry}</span> the time will be:
                    </p>

                    <div className='flex justify-center items-center mb-8'>
                        <div className='bg-[#F7F7F7] p-4 text-xl font-medium text-gray-700 shadow rounded border border-gray-200'>
                            {convertedTime}
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Lottie animationData={animatedCopy} className='h-40 cursor-pointer' onClick={copyToClipboard} />
                    </div>

                    <button onClick={handleBack} className='mt-10 w-full bg-[#4E9F3D] text-white p-4 rounded-lg font-semibold text-lg hover:bg-[#1E5128] transition-colors duration-300 shadow-lg hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-[#4E9F3D] focus:ring-opacity-50'>
                        Convert Again
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TimeZone;