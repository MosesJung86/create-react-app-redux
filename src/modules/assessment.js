// export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
// export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  score: 0,
  page: 1,
  testScores: [],
  test: [
    {
      question: 'What is word?',
      options: [
        {
          answer: 'blah',
          points: 2
        },
        {
          answer: 'blurrg',
          points: 4
        }
      ]
    },
    {
      question: 'What is love?',
      options: [
        {
          answer: "baby don't hurt me",
          points: 2
        },
        {
          answer: "don't hurt me",
          points: 4
        },
        {
          answer: 'no more',
          points: 6
        }
      ]
    },
    {
      question: 'What is the past tense of yeet?',
      options: [
        {
          answer: 'yote',
          points: 5
        },
        {
          answer: 'yeeted',
          points: 4
        },
        {
          answer: 'yaught',
          points: 2
        },
        {
          answer: 'yurt',
          points: 1
        }
      ]
    },
    {
      question: 'What is math?',
      options: [
        {
          answer: 'numbers',
          points: 2
        },
        {
          answer: 'words',
          points: 0
        },
        {
          answer: 'calculations',
          points: 3
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case INCREMENT_REQUESTED:
    //   return {
    //     ...state,
    //     isIncrementing: true
    //   };

    case INCREMENT:
      state.testScores.push(action.payload);
      return {
        ...state,
        score: state.testScores.reduce(function(acc, val) {
          return acc + val;
        }),
        page: state.page + 1
      };

    // case DECREMENT_REQUESTED:
    //   return {
    //     ...state,
    //     isDecrementing: true
    //   };

    case DECREMENT:
      state.testScores.splice(state.testScores.length - 1, 1);
      var scores;
      if (state.testScores.length === 0) {
        scores = 0;
      } else {
        scores = state.testScores.reduce(function(acc, val) {
          return acc + val;
        });
      }
      return {
        ...state,
        score: scores,
        page: state.page - 1
      };

    default:
      return state;
  }
};

export const increment = num => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      payload: num
    });
  };
};

// export const incrementAsync = () => {
//   return dispatch => {
//     dispatch({
//       type: INCREMENT_REQUESTED
//     });

//     return setTimeout(() => {
//       dispatch({
//         type: INCREMENT
//       });
//     }, 3000);
//   };
// };

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT
    });
  };
};

// export const decrementAsync = () => {
//   return dispatch => {
//     dispatch({
//       type: DECREMENT_REQUESTED
//     });

//     return setTimeout(() => {
//       dispatch({
//         type: DECREMENT
//       });
//     }, 3000);
//   };
// };
