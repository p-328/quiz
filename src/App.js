import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Quiz from './Quiz';

const STORAGE = 'storage.db';

function App() {
  const ref = useRef();
  const answerRef = useRef();
  const uuid = require('uuid').v4;
  const [questions, setQuestions] = useState(
    [
      {
        question: 'Where does Pastoral Nomadism occur?',
        answer: 'lesser developed countries',
        id: uuid()
      },
      {
        question: 'Does C have a garbage collector?',
        answer: 'no',
        id: uuid()
      },
      {
        question: 'What type of farming involves slash-and-burn agriculture?',
        answer: 'shifting cultivation',
        id: uuid()
      },
      {
        question: 'What is the selling of crops for profit?',
        answer: 'commercial farming',
        id: uuid()
      },
      {
        question: 'What does false && true || true return?',
        answer: 'true',
        id: uuid()
      },
    ]
  );
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(STORAGE));
    if (items) setQuestions(items);
  }, [])
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(questions));
  }, [questions]);
  const handleClick = (e) => {
    const question = ref.current.value;
    const answer = answerRef.current.value;
    if (question === '' && answer === '') return
    setQuestions(
      prevQuestions => {
        return [...prevQuestions,
          {
            question: question,
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
    <div style={{overflowY: 'auto', overflowX: 'auto'}}>
      <Quiz questions={questions} />
      <p style={{ fontFamily: 'Segoe UI' }}>Question: </p>
      <input type='text' ref={ref} style={{ fontFamily: 'Segoe UI' }}></input>
      <p style={{ fontFamily: 'Segoe UI' }}>Answer: </p>
      <input type='text' ref={answerRef} style={{ fontFamily: 'Segoe UI' }}></input>
      <button style={{ fontFamily: 'Segoe UI' }} onClick={handleClick}>Add question</button>
    </div>
  );
};

export default App;
