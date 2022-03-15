const Input = ({ label, type, name, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} id={name} {...rest} />
    </div>
  );
};

export default Input;
