import React from 'react';
import { useState } from 'react';
export default function Question({ question, answer }) {
    const [userAnswer, setUserAnswer] = useState("");
    const handleChange = (input) => {
        setUserAnswer(input.target.value);
    };
    return (
        <div style={{borderStyle: 'groove', width: 450, borderColor: 'blue', justifyContent: 'spaced-evenly', borderRadius: 15, borderWidth: 2}}>
            <p style={{fontFamily: 'Segoe UI'}}>{question}</p>
            <input type="text" value={userAnswer} style={{ paddingTop: 3.5 }} onChange={handleChange}></input>
            {
                userAnswer !== answer ? <p style={{ fontFamily: 'Segoe UI', color: 'red' }}>Incorrect</p> :
                <p style={{ fontFamily: 'Segoe UI', color: 'green' }}>Correct!</p>
            }
        </div>
    );
};
