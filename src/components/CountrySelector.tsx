import React from 'react';
import Select from 'react-select';
import moment from 'moment-timezone';

type TimezoneOption = {
  value: string;
  label: string;
  offset: string;
};

// Function to format the label with GMT offset and current time
const formatLabel = (zoneName: string): string => {
  const offset = moment.tz(zoneName).format('Z'); // Get the GMT offset
  const currentTime = moment.tz(zoneName).format('HH:mm'); // Get the current time
  const label = zoneName.replace(/_/g, ' ');
  return `${label} (GMT${offset}, ${currentTime})`;
};

// Function to get all time zone names as options for react-select
const getTimezoneOptions = (): TimezoneOption[] => {
  return moment.tz.names().map((zoneName) => {
    const offset = moment.tz(zoneName).utcOffset();
    return {
      value: zoneName,
      label: formatLabel(zoneName),
      offset: offset.toString(),
    };
  }).sort((a, b) => parseInt(a.offset) - parseInt(b.offset)); // Sort by GMT offset
};

const timezones = getTimezoneOptions();

type Props = {
  onChange: (timezone: string) => void;
};

const TimezoneSelector: React.FC<Props> = ({ onChange }) => {
  const handleTimezoneChange = (selectedOption: TimezoneOption | null): void => {
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Select
      options={timezones}
      placeholder="Select Time Zone..."
      className="w-full"
      isSearchable
      onChange={handleTimezoneChange}
      formatGroupLabel={(group) => group.label} // You can add group formatting if you decide to group by region
    />
  );
};

export default TimezoneSelector;