import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../../modules/assessment';

const Home = props => (
  <div>
    <h1>Assessment</h1>

    <p>Page: {props.page}</p>
    <p>Current Question Index: {props.currentQuestionIndex}</p>
    <p>testScores: {props.testScores}</p>

    {props.page > 1 ? (
      <button onClick={props.decrement}>{'<- Back'}</button>
    ) : (
      <p />
    )}

    {props.page > props.test.length ? (
      <p>Score: {props.score}</p>
    ) : (
      <div>
        <p>Question #{props.page}:</p>
        <p>{props.test[props.currentQuestionIndex].question}</p>

        <p>
          {props.test[props.currentQuestionIndex].options.map(option => (
            <button
              key={option.index}
              onClick={() => props.increment(option.points)}>
              {option.answer} {option.points} pts.
            </button>
          ))}
        </p>

        <p>
          <button onClick={() => props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  score: state.assessment.score,
  page: state.assessment.page,
  test: state.assessment.test,
  testScores: state.assessment.testScores,
  currentQuestionIndex: state.assessment.page - 1
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      changePage: () => push('/about')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
