import opinions from "./opinions.json";

const FeedbackList = ({ feedbackOptiones }) => {
  return (
    <li>
      {feedbackOptiones.map((option) => {
        return <p key={option.name}>{option.name}</p>;
      })}
    </li>
  );
};

export default function Feedback() {
  return (
    <ul>
      <FeedbackList feedbackOptiones={opinions}></FeedbackList>
    </ul>
  );
}
