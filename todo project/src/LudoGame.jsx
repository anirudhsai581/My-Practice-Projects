import {useState} from 'react';
export default function LudoGame() {

    const [Moves, setMoves] = useState({blueMoves: 0, yellowMoves: 0, redMoves: 0, greenMoves: 0});
    let [arr, setArr] = useState(["No moves"]);

function updateBlue(){

        setArr((prevArr) => {
            return [...prevArr,"blue moves"]
        });
        console.log(arr);     
    };
   
    return (
        <>
        <p>{arr}</p>
        <p>Game Begins!</p>
        <p>Blue moves : {Moves.blueMoves}</p>
        <button style={{backgroundColor: "blue",color:"white"}} 
        onClick={updateBlue}>+1</button> 
        <p>Yellow moves : {Moves.yellowMoves}</p>
        <button style={{backgroundColor: "yellow",color:"black"}}  >+1</button>
    </>
    )
}