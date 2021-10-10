const IMCName = ({ text, resultadoimc }) => {
  let newtext = text;
  if (newtext === "none") {
    newtext = "--------";
  }

  return <div className={`IMCName imc_${resultadoimc}`}>{newtext}</div>;
};

export default IMCName;
