const getResponse = (image) => {
  if (image === "none") {
    return (
      <div className="IMCImage">
        <div className="imc_none imc_none_question">?</div>
      </div>
    );
  } else {
    return (
      <div className="IMCImage">
        <img src={`./images/${image}.png`} alt="Normal" />
      </div>
    );
  }
};

const IMCImage = ({ image }) => {
  return getResponse(image);
};
export default IMCImage;
