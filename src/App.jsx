import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';

function App() {
  return (
    <div>
      <Dropdown
        label="Select Country"
        name="country"
        options={[
          { value: 'a', country: 'Country A' },
          { value: 'b', country: 'Country B' },
          { value: 'custom', country: 'Custom' },
        ]}
      />
      <Input label="Salary:" type="number" name="salary" step="1" />
    </div>
  );
}

export default App;
