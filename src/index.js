import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Username from "./components/UserName";
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <section>
        <Header />
        <Username />
    </section>
);
