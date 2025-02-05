const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onChange(value);
  };
  return (
    <input
      type="number"
      min={0}
      onChange={handleChange}
      value={value}
      placeholder="Age"
      {...rest}
    />
  );
};

export default NumberInput;
