import { useState } from 'react';
import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { data } from '@/constants/data';

function App() {
  const [country, setCountry] = useState('');
  const [salary, setSalary] = useState(0);

  const handleCalculate = () => {
    console.log('calculating');
  };
  return (
    <div>
      <Dropdown
        label="Select Country:"
        name="country"
        options={data}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <Input
        label="Salary:"
        type="number"
        name="salary"
        step="1"
        onChange={(e) => setSalary(e.target.value)}
        value={salary}
      />
      <Button label="Calculate" onClick={handleCalculate} />
    </div>
  );
}

export default App;
