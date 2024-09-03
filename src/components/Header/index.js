import React from 'react';
import ModalExampleControlled from "../modal";

export default function Header(textBtn) {

    return (
        <header>
            <h1>Добро пожаловать в игру, Крестики-Нолики!</h1>
            <p>Перед началом игры, вы можете ознакомится с правилами</p>
            <ModalExampleControlled textBtn={{
                name: 'Открыть Инструкцию'
            }}/>
        </header>
    )

}