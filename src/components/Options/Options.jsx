// import opinions from "../Feedback/opinions.json";
import { useState } from "react";
import styles from "./options.module.css";

const ClickCounter = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateG = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  const updateN = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };

  const updateB = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  const resetAll = () => {
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveNotes = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <button onClick={updateG}>Good</button>
      <button onClick={updateN}>Neutral</button>
      <button onClick={updateB}>Bad</button>
      {totalFeedback > 0 ? <button onClick={resetAll}>Reset all</button> : null}
      {totalFeedback > 0 > 0 ? (
        <div>
          <ul className={styles.list}>
            <li>Good: {values.good}</li>
            <li>Neutral: {values.neutral}</li>
            <li>Bad: {values.bad}</li>
          </ul>
          <p>Percentages of positive: {positiveNotes} </p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

// const OptionsList = () => {
//   return (
//     <>
//       <ClickCounter />
//     </>
//   );
// };

export default function Options() {
  return (
    <ClickCounter />
    // <ul>
    //   <OptionsList opinions={opinions}></OptionsList>
    // </ul>
  );
}
