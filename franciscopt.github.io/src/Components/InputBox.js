const InputBox = ({ defvalue, onChange, id }) => {
  const inputChanged = (event) => {
    onChange(event);
  };

  return (
    <div className="InputBox">
      <div className="InputHolder">
        <input id={id} type="text" value={defvalue} onChange={inputChanged} />
      </div>
    </div>
  );
};

export default InputBox;
