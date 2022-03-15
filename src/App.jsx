import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import { data } from '@/constants/data';

function App() {
  return (
    <div>
      <Dropdown label="Select Country" name="country" options={data} />
      <Input label="Salary:" type="number" name="salary" step="1" />
    </div>
  );
}

export default App;
