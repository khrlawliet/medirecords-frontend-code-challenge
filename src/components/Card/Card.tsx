import * as React from "react";
import "./Card.css";

interface ICardProps {
  title: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Card: React.FunctionComponent<ICardProps> = (props) => {
  const { title, label, value, onChange } = props;
  return (
    <div className="card-outline">
      <h1 className="card-title">{title}</h1>
      <h3 className="card-label">{label}</h3>
      <input
        className="card-textfield"
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Card;
