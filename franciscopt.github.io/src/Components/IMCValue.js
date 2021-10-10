const IMCValue = ({ value, resultadoimc }) => {
 
  if (value === "none") {
    value = "------";
  }

  return <div className={`IMCValue imc_${resultadoimc}`}>{value}</div>;
};
export default IMCValue;
