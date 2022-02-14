import React from 'react';
import { useState } from 'react';
export default function Question({ question, answer }) {
    const [userAnswer, setUserAnswer] = useState("");
    const handleChange = (input) => {
        setUserAnswer(input.target.value);
    };
    return (
        <div style={{borderStyle: 'dashed', width: 450, borderColor: 'blue', borderRadius: 20, borderWidth: 0.3}}>
            <p style={{fontFamily: 'Segoe UI'}}>{question}</p>
            <input type="text" value={userAnswer} style={{ paddingTop: 3.5 }} onChange={handleChange}></input>
            {
                userAnswer !== answer ? <p style={{ fontFamily: 'Segoe UI', color: 'red', fontWeight: 'bold' }}>Incorrect</p> :
                <p style={{ fontFamily: 'Segoe UI', color: 'green', fontWeight: 'bold' }}>Correct!</p>
            }
        </div>
    );
};
