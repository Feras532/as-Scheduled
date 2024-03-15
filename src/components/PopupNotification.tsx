import React from 'react';

interface PopupNotificationProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

const PopupNotification: React.FC<PopupNotificationProps> = ({ message, show, }) => {
    if (!show) return null;

    return (
        <div className="fixed top-56 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#ffffff] text-green-700 border border-green-700 rounded shadow-lg z-50">
            {message}
        </div>
    );
};

export default PopupNotification;