const Dropdown = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label for={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        {options?.map(({ value, country }) => (
          <option value={value}>{country}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
