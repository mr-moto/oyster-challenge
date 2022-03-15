const Dropdown = ({ label, name, options, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        {...rest}
        className="bg-blue-200 p-2 rounded-md mb-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(({ optionValue, country }) => (
          <option value={optionValue} key={optionValue}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
