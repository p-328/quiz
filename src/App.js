import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Quiz from './Quiz';

const STORAGE = 'storage.db';

function App() {
  const ref = useRef();
  const answerRef = useRef();
  const removeRef = useRef();
  const uuid = require('uuid').v4;
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(STORAGE));
    if (items) setQuestions(items);
  }, [])
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(questions));
  }, [questions]);
  const removeQuestion = () => { 
    const questionNameRef = removeRef.current.value;
    const newQuestionList = questions.filter(question => {
      return (question.question !== questionNameRef);
    });
    setQuestions(newQuestionList);
    removeRef.current.value = null;
  };
  const handleClick = () => {
    const Question = ref.current.value;
    const answer = answerRef.current.value;
    if (Question === '' && answer === '') return
    setQuestions(
      prevQuestions => {
        return [...prevQuestions,
          {
            question: Question,
            answer: answer,
            id: uuid()
          }
        ]
      }
    );
    ref.current.value = null;
    answerRef.current.value = null;
  };
  return (
    <div style={{overflowY: 'auto', overflowX: 'auto', justifyContent: 'spaced-evenly'}}>
      <Quiz questions={questions} />
      <p style={{ fontFamily: 'Segoe UI' }}>Question: </p>
      <input type='text' ref={ref} style={{ fontFamily: 'Segoe UI' }}></input>
      <p style={{ fontFamily: 'Segoe UI' }}>Answer: </p>
      <input type='text' ref={answerRef} style={{ fontFamily: 'Segoe UI' }}></input>{" "}
      <button style={{ fontFamily: 'Segoe UI' }} onClick={handleClick}>Add question</button>{" "}
      <input type='text' ref={removeRef} style={{ fontFamily: 'Segoe UI' }} placeholder='Enter question to remove...'></input>{" "}
      <button onClick={removeQuestion} style={{ fontFamily: 'Segoe UI' }}>Remove Question</button>
    </div>
  );
};

export default App;
