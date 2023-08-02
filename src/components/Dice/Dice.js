export default function Dice(props) {
    return (
        <div
            className={props.frozen ? "tenzie__dice tenzi__dice--frozen" : "tenzi__dice"}
            onClick={() => props.freezeDice(props.id) }
        >
            <p className="tenzi__diceNumber"> { props.value } </p>
        </div>
    )
}