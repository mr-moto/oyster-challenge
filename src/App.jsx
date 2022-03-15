import { useState, useMemo } from 'react';
import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { data } from '@/constants/data';
import { calculateValues } from '@/utils/calculateValues';
import TaxChart from '@/components/TaxChart';

function App() {
  const [country, setCountry] = useState('');
  const [salary, setSalary] = useState('');
  const [taxResults, setTaxResults] = useState(null);

  const handleCalculation = () => {
    const results = calculateValues(salary, country);
    setTaxResults(results);
  };

  // useMemo demo
  const dropdownData = useMemo(() => {
    const keys = Object.keys(data);
    return keys.map((key) => ({
      country: data[key].country,
      optionValue: data[key].value,
    }));
  }, [data]);

  return (
    <div className="border rounded-md border-gray-600 p-4 m-4">
      <Dropdown
        label="Country:"
        name="country"
        placeholder="Please select a country"
        options={dropdownData}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <Input
        label="Salary:"
        type="number"
        name="salary"
        step="1"
        placeholder="Input Salary"
        onChange={(e) => setSalary(e.target.value)}
        value={salary}
      />
      <Button
        label="Calculate"
        onClick={handleCalculation}
        disabled={!country || !salary}
      />

      {taxResults && <TaxChart results={taxResults} />}
    </div>
  );
}

export default App;
