import Label from "./Label";
import InputBox from "./InputBox";
const UserInput = ({ text, onChange, id, defvalue }) => {
  return (
    <div className="UserInput">
      <Label text={text} />
      <InputBox id={id} onChange={onChange} defvalue={defvalue} />
    </div>
  );
};

export default UserInput;
