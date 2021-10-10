import UserInput from "./UserInput";
import TextDesc from "./TextDesc";
const GetDataContainer = ({ onChange, pesovalue, alturavalue }) => {
  return (
    <div className="GetDataContainer">
      <UserInput defvalue={pesovalue} id="input_peso" text={"O teu peso:"} onChange={onChange} />
      <UserInput defvalue={alturavalue} id="input_altura" text={"A tua altura:"} onChange={onChange} />
      <TextDesc text={"lorem iptum"} />
    </div>
  );
};

export default GetDataContainer;
