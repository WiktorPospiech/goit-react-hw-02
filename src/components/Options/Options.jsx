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
  return (
    <div>
      <button onClick={updateG}>Good</button>
      <button onClick={updateN}>Neutral</button>
      <button onClick={updateB}>Bad</button>
      <ul className={styles.list}>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
      </ul>
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
