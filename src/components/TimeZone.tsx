import React from 'react'

const TimeZone = () => {
    return (
        <div className="bg-[#D8E9A8] w-full max-w-4xl mx-auto p-6 rounded-xl shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1E5128]">Time Zone Converter</h2>
            <div className="flex justify-around items-center mt-4">
                <input type="text" placeholder="Enter local time" className="p-2 rounded text-[#191A19]" />
                <div className="text-[#4E9F3D]">TO</div>
                <input type="text" placeholder="Enter destination time" className="p-2 rounded text-[#191A19]" />
                <button className="bg-[#4E9F3D] text-white p-3 rounded hover:bg-[#1E5128] transition">Convert</button>
            </div>
        </div>
    )
}

export default TimeZone