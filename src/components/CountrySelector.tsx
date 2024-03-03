import React from 'react';
import Select from 'react-select';

// Define the list of countries with their flag emojis and country names, including types
type CountryOption = {
    value: string;
    label: string;
};

const countries: CountryOption[] = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'gb', label: '🇬🇧 United Kingdom' },
    { value: 'fr', label: '🇫🇷 France' },
    // Add more countries as needed
];
const CountrySelector: React.FC = () => {
    // No need for explicit type annotation if using React.FC
    return (
        <Select
            options={countries}
            placeholder="Select your country..."
            className=""
            isSearchable

        // Add more props as needed
        />
    );
};

export default CountrySelector;
