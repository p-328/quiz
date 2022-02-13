import React from 'react'
import Question from './Question.js';
export default function Quiz({ questions }) {
    return(
        questions.map(question => <Question question={question.question} answer={question.answer} key={question.id} />)
    );
};
