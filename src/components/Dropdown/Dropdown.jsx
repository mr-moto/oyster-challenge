const Dropdown = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        {options?.map(({ meta, country }) => (
          <option value={meta.inputIdentifier} key={meta.inputIdentifier}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
