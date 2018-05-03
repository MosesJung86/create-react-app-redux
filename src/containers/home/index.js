import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { chooseOption, back } from '../../modules/assessment';

const Home = props => (
  <div>
    <h1>Assessment</h1>

    <h3>
      {props.page} of {props.test.length + 1}
    </h3>

    {props.page > 1 ? <button onClick={props.back}>{'<- Back'}</button> : <p />}

    {props.page > props.test.length ? (
      <div>
        <h2>Final score: {props.score}</h2>
        <p>
          <button onClick={() => props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    ) : (
      <div>
        <h2>Question #{props.page}:</h2>
        <p>{props.test[props.currentQuestionIndex].question}</p>

        <p>
          {props.test[props.currentQuestionIndex].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() => props.chooseOption(option.points)}>
                {option.answer} {option.points} pts.
              </button>
            )
          )}
        </p>
      </div>
    )}
  </div>
);

// This maps all the props into the local state for this component
const mapStateToProps = state => ({
  score: state.assessment.score,
  page: state.assessment.page,
  test: state.assessment.test,
  testScores: state.assessment.testScores,
  currentQuestionIndex: state.assessment.page - 1
});

// This maps all the actions into props
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      chooseOption,
      back,
      changePage: () => push('/about')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
