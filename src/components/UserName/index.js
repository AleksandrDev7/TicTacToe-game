import React, { useState } from 'react';
import GameField from "../gameField";
import {useLocalStorage} from 'react-use'
import {Breadcrumb} from "semantic-ui-react";

export default function Username() {

   /* const [one, setPlayerOne] = useState('Игрок 1');
    const [two, setPlayerTwo] = useState('Игрок 2');

    const [newPlayerOne, setNewPlayerOne] = useState(localStorage.getItem('newPlayerOne') ? JSON.parse(localStorage.getItem('newPlayerOne')) : []);
    const [newPlayerTwo, setNewPlayerTwo] = useState(localStorage.getItem('newPlayerTwo') ? JSON.parse(localStorage.getItem('newPlayerTwo')) : []);

    const handleChangeOne = (event) => {
        setPlayerOne(event.target.value)
    }

    const handleChangeTwo = (event) => {
        setPlayerTwo(event.target.value)
    }
*/

    const [inputValuePlayerOne, setInputValuePlayerOne] = useState('');
    const [inputValuePlayerTwo, setInputValuePlayerTwo] = useState('');
    const [savedNameOne, setSavedNameOne] = useLocalStorage('savedText', '');
    const [savedNameTwo, setSavedNameTwo] = useLocalStorage('savedText', '');
    const [ShowData, setShowData] = useState(false);

    const submitPlayersName = () => {
        setSavedNameOne(inputValuePlayerOne)
        setSavedNameTwo(inputValuePlayerTwo)
        setShowData(true)
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setShowData(true)
        }
    }





    //localStorage.setItem('todos', JSON.stringify(setNewPlayerOne))
    //localStorage.setItem('todos', JSON.stringify(setNewPlayerTwo))


    return (
        /*
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
                playerOne={}
                playerTwo={}
            />
        </div>
            */
        <div>
            <div>
                <p>Игрок 1 -</p> <input
                    value={inputValuePlayerOne}
                    onChange={(e) => setInputValuePlayerOne(e.target.value)}
                />
            </div>
            <div>
                <p>Игрок 2 -</p> <input
                    value={inputValuePlayerTwo}
                    onChange={(e) => setInputValuePlayerTwo(e.target.value)}

                />
            </div>
            <button type="button"
                        onClick={submitPlayersName}
                        onKeyDown={handleKeyPress}
            >
                    Сохранить имена
            </button>
            {ShowData &&
                <p>{savedNameOne} - ходит Х, <br/>
                {savedNameTwo} - ходит О </p>}
            {
                (<GameField
                    savedNameOne={savedNameOne}
                    savedNameTwo={savedNameTwo}
                    ShowData={ShowData}
                />)
            }
        </div>
    );
}