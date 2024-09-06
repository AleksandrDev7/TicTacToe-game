import React, { useState } from 'react';
import GameField from "../gameField";

export default function Username({  }) {

    const [one, setPlayerOne] = useState('1');
    const [two, setPlayerTwo] = useState('2');

    const handleChangeOne = (event) => {
        setPlayerOne(event.target.value)
    }

    const handleChangeTwo = (event) => {
        setPlayerTwo(event.target.value)
    }


    return (
        <div>
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
            <GameField
                playerOne={handleChangeOne}
                playerTwo={handleChangeTwo}
            />
        </div>

    );
}