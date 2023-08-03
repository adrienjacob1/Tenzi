import { useState } from "react";
import Dice from "../Dice/Dice";
import "./Tenzi.css";

export default function Tenzi() {

    const [dice, setDice] = useState(initDice());

    function initDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            diceArray.push( {
                id: i,
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

    function rollDice() {
        setDice(prevDice => prevDice.map(dice => {
            return dice.frozen ? dice : { ...dice, value: Math.floor(Math.random() * 6) + 1 }
        }));}
    

    function endGame() {
        const allFrozen = dice.filter(dice => dice.frozen).length === dice.length;
        const firstValue = dice[0].value;
        const allSame = dice.filter(dice => dice.value === firstValue).length === dice.length;
    

        if (allFrozen && allSame) {
            return true;
        }

        return false;
        }


        function newGame() {
            setDice(initDice());
        }

        const diceList = dice.map(dice => <Dice key={dice.id} id={dice.id} value={dice.value} frozen={dice.frozen} freezeDice={freezeDice} />)


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
            onClick={endGame() ? newGame : rollDice}
            
            >
                { endGame() ? "New Game" : "Re roll" }
            </button>

        </section>
    );
}