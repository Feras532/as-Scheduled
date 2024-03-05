import React from 'react';
import Select, { components } from 'react-select';
import countriesData from '../../countries.json';

type CountryOption = {
  value: string;
  pin: string; // is used for the src of the image as a PIN
  label: JSX.Element;
};

// Define a custom Option component for react-select that will render the flag image
const FlagOption = (props: any) => (
  <components.Option {...props}>
    <div className='flex items-center'>
      <img
        src={`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${props.data.pin}.svg`}
        alt={props.data.label}
        className='h-6 w-6'
      />
      <span className="ml-2">{props.data.label}</span>
    </div>
  </components.Option>
);

// Map the countries from the JSON file to the expected format for react-select
const countries: CountryOption[] = countriesData.map((country) => ({
  value: country.name,
  pin: country.code,
  label: (
    <div className='flex items-center'>
      <span className='ml-4'>{country.name}</span>

    </div>
  ),
}));

const CountrySelector: React.FC = () => {
  return (
    <Select
      options={countries}
      placeholder="Select Country..."
      className="w-3/4"
      components={{ Option: FlagOption }}
      isSearchable
    />
  );
};

export default CountrySelector;
