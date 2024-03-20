const FieldSet = ({ label, children }) => {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && (
        <legend className="text-[23px] text-center font-semibold mb-4 text-red-500">
          {label}
        </legend>
      )}
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
};

export default FieldSet;
