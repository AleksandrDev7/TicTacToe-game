import React, { useState } from 'react';

export default function Username({ onChange }) {

    const [one, setPlayerOne] = useState('1');
    const [two, setPlayerTwo] = useState('2');

    const handleChangeOne = (event) => {
        setPlayerOne(event.target.value)
    }

    const handleChangeTwo = (event) => {
        setPlayerTwo(event.target.value)
    }



    return (
        <div className="popupName">
            <form onSubmit={(e) => {
                e.preventDefault();
            }}
            >
                <input
                    type="text"
                    className="player_input"
                    value={one}
                    onChange={handleChangeOne}
                />
                <input
                    type="text"
                    className="player_input"
                    value={two}
                    onChange={handleChangeTwo}
                />
                <p>
                    Добро пожаловать в игру, <i> {one} </i> и <i> {two} </i>!
                </p>
            </form>

        </div>
    );
}