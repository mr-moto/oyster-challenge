const Input = ({ label, type, name, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        {...rest}
        className="bg-blue-200 p-2 rounded-md mb-2"
      />
    </div>
  );
};

export default Input;
