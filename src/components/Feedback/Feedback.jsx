import React from 'react';
import { JustCorrect, JustIncorrect } from '../TuxComponents/elements/Alerts/Justifications';
// import { FlagFeature } from '../TuxComponents/elements/FlagFeature/FlagFeature';


export const Feedback = ({ response }) => {
  const { selection, isCorrect } = response;

  return (
    <>
        {
          isCorrect ? <JustCorrect selection={selection} isCorrect={isCorrect} />
          : <JustIncorrect selection={selection} isCorrect={isCorrect} />
        }
    </>
  );
};

// export default Feedback;
