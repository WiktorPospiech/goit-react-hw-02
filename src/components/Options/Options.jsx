import opinions from "../Feedback/opinions.json";

const OptionsList = ({ opinions }) => {
  return (
    <li>
      {opinions.map((opinion) => {
        return <button key={opinion.name}>{opinion.name}</button>;
      })}
    </li>
  );
};

export default function Options() {
  return (
    <ul>
      <OptionsList opinions={opinions}></OptionsList>
    </ul>
  );
}
