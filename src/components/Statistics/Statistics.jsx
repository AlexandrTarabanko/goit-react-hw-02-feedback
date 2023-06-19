export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // const arrInfo = Object.keys(props).map(key => [key, props[key]]);
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        {/* {arrInfo.map(optionName => (
          <li key={optionName[0]}>
            <button>
              {optionName[0]}: {optionName[1]}
            </button>
          </li>
        ))} */}
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p>Total: {total} </p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </>
  );
};
