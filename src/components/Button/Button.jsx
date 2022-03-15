const Button = ({ label, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-green-400 p-2 rounded-md disabled:bg-gray-200"
    >
      {label}
    </button>
  );
};

export default Button;
