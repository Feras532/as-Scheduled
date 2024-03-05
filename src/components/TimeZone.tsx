import CountrySelector from './CountrySelector';
import arrowDown from '../assets/down-arrow.png';

const TimeZone = () => {
    return (
        <div className='absolute inset-x-0 top-96 mx-auto px-4 sm:px-6 lg:px-8'>

            <div className="bg-[#D8E9A8] w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl text-center ">
                <h2 className="text-3xl font-bold mb-4 text-[#1E5128]">Time Zone Converter</h2>
                <div className="flex flex-col items-center">
                    <CountrySelector />
                    <img src={arrowDown} alt="arrow down" className="h-6 w-6 flex items-center mt-2 mb-2" />
                    <CountrySelector />
                </div>

                <div className="flex flex-col justify-around items-center mt-4">
                    <div className="text-[#4E9F3D]"></div>

                    <div className="flex flex-row justify-around">
                        <input type="text" placeholder="Enter local time" className="p-2 rounded text-[#191A19]" />
                        <input type="text" placeholder="Enter date" className="p-2 rounded text-[#191A19]" />
                    </div>
                    {/* <div className="text-[#4E9F3D]">TO</div> */}

                    <button className="mt-7 bg-[#4E9F3D] text-white p-3 rounded hover:bg-[#1E5128] transition">Convert</button>
                </div>
            </div>
        </div>
    );
};

export default TimeZone;