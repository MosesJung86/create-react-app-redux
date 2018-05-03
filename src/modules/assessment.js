import testQuestions from './testQuestions';
// this imports the test questions from the json file

export const CHOOSEOPTION = 'assessment/CHOOSEOPTION';
export const BACK = 'assessment/BACK';

// This initializes the initial state of the store.
const initialState = {
  score: 0,
  page: 1,
  testScores: [],
  test: testQuestions
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSEOPTION:
      state.testScores.push(action.payload);
      // Add points from answer chosen to test scores array.
      // score returns the sum of the array
      // page is added by 1
      return {
        ...state,
        score: state.testScores.reduce(function(acc, val) {
          return acc + val;
        }),
        page: state.page + 1
      };

    case BACK:
      state.testScores.splice(state.testScores.length - 1, 1);
      // Remove the last test score
      var scores;
      // if test scores array is empty, score is reset to 0;
      if (state.testScores.length === 0) {
        scores = 0;
      } else {
        scores = state.testScores.reduce(function(acc, val) {
          return acc + val;
        });
      }
      // page is reduced by 1
      return {
        ...state,
        score: scores,
        page: state.page - 1
      };

    default:
      return state;
  }
};

// when option is chosen, the points is stored into the payload
export const chooseOption = points => {
  return dispatch => {
    dispatch({
      type: CHOOSEOPTION,
      payload: points
    });
  };
};

export const back = () => {
  return dispatch => {
    dispatch({
      type: BACK
    });
  };
};
