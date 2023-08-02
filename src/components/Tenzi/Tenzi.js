import { useState } from "react";
import Dice from "../Dice/Dice";
import "./Tenzi.css";

export default function Tenzi() {

    const [dice, setDice] = useState(initDice());

    function initDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            diceArray.push( {
                id: 1,
                value: Math.floor(Math.random() * 6) + 1,
                frozen: false
            } );
        }

        return diceArray;
    }

    function freezeDice(id) {
        setDice(prevDice => prevDice.map(dice => {
            return dice.id === id ? { ...dice, frozen: !dice.frozen } : dice
        }));
    }

    return (
        <section className="tenzi__container">
            <h3 className="tenzi__title">Tenzi</h3>

            <p className="tenzi__title">Choisir un dé en cliquant dessu,. 
                Puis refaire un tirage, jusqu'à ce que tous les dés aient la même valeur</p>

            <div className="tenzi__dicegrid">
                { diceList }
            </div>

            <button 
            className={ endGame() ? "tenzi__button tenzi__button--end" : "tenzi__button" }
            onClick={enGame() ? newGame : rollDice}
            
            >
                { endGame() ? "New Game" : "Re roll" }
            </button>

        </section>
    );
}