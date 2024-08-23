// import opinions from "../Feedback/opinions.json";
import { useState, useEffect } from "react";
import styles from "./options.module.css";

const Blabla = () => {
  const [clicksGood, setClicksGood] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-Gclicks");
    if (savedClicks !== null) {
      return parseInt(savedClicks);
    }
    return 0;
  });
  const [clicksNeutral, setClicksNeutral] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-Nclicks");
    if (savedClicks !== null) {
      return parseInt(savedClicks);
    }
    return 0;
  });
  const [clicksBad, setClicksBad] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-Bclicks");
    if (savedClicks !== null) {
      return parseInt(savedClicks);
    }
    return 0;
  });
  useEffect(() => {
    console.log("Good");
    window.localStorage.setItem("saved-Gclicks", clicksGood);
  }, [clicksGood]);
  useEffect(() => {
    console.log("Neutral");
    window.localStorage.setItem("saved-Nclicks", clicksNeutral);
  }, [clicksNeutral]);
  useEffect(() => {
    console.log("Bad");
    window.localStorage.setItem("saved-Bclicks", clicksBad);
  }, [clicksBad]);

  const totalFeedback = clicksGood + clicksNeutral + clicksBad;
  const positiveNotes = Math.round(
    ((clicksGood + clicksNeutral) / totalFeedback) * 100
  );

  return (
    <div>
      <button onClick={() => setClicksGood(clicksGood + 1)}>Good</button>
      <button onClick={() => setClicksNeutral(clicksNeutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setClicksBad(clicksBad + 1)}>Bad</button>
      {totalFeedback > 0 ? (
        <button
          onClick={() =>
            setClicksGood(0) & setClicksNeutral(0) & setClicksBad(0)
          }
        >
          {" "}
          Reset
        </button>
      ) : null}

      {totalFeedback > 0 ? (
        <div>
          <ul className={styles.list}>
            <li>Good: {clicksGood} </li>
            <li>Neutral: {clicksNeutral} </li>
            <li>Bad: {clicksBad}</li>
          </ul>
          <p>Percentages of positive: {positiveNotes} </p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default function Options() {
  return (
    <Blabla />
    // <ul>
    //   <OptionsList opinions={opinions}></OptionsList>
    // </ul>
  );
}

// const ClickCounter = () => {
//   const [values, setValues] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });
//   const updateG = () => {
//     setValues({
//       ...values,
//       good: values.good + 1,
//     });
//   };

//   const updateN = () => {
//     setValues({
//       ...values,
//       neutral: values.neutral + 1,
//     });
//   };

//   const updateB = () => {
//     setValues({
//       ...values,
//       bad: values.bad + 1,
//     });
//   };

//   const resetAll = () => {
//     setValues({
//       ...values,
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });
//   };

//   const totalFeedback = values.good + values.neutral + values.bad;
//   const positiveNotes = Math.round(
//     ((values.good + values.neutral) / totalFeedback) * 100
//   );

//   return (
//     <div>
//       <Blabla />
//       <button onClick={updateG}>Good</button>
//       <button onClick={updateN}>Neutral</button>
//       <button onClick={updateB}>Bad</button>
//       {totalFeedback > 0 ? <button onClick={resetAll}>Reset all</button> : null}
//       {totalFeedback > 0 > 0 ? (
//         <div>
//           <ul className={styles.list}>
//             <li>Good: {values.good}</li>
//             <li>Neutral: {values.neutral}</li>
//             <li>Bad: {values.bad}</li>
//           </ul>
//           <p>Percentages of positive: {positiveNotes} </p>
//         </div>
//       ) : (
//         <p>No feedback yet</p>
//       )}
//     </div>
//   );
// };

// const OptionsList = () => {
//   return (
//     <>
//       <ClickCounter />
//     </>
//   );
// };
