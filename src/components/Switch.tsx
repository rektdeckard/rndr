import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2f2f2f;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 4px #2f2f2f;
  }
`;


interface SwitchProps {
  checked: boolean;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, label, onChange }) => {
  return (
    <Label>
      {label}
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <Slider />
    </Label>
  );
};

export default Switch;
