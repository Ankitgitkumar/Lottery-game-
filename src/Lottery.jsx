import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "../helper";
import Ticket from "./Ticket";


let styles={margin:"10px 30px 0 0" }



export default function Lottery({ n=3 ,winCondition }){

    let [ticket,setTicket] = useState(genTicket(n));


     let isWinning = winCondition(ticket);

     let buyTicket = () => {
        setTicket(genTicket(n));
     };
    return (
        <div className="body" style={{ backgroundImage : isWinning = winCondition(ticket) ? "url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDJsc21iZXJqajJ1ZmczYmlrMjJ2dDExZnp3aHZ6NGgxaGJsdDE4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vu5UbNpjpqfMq2UFg0/giphy.gif)" : "" , backgroundSize:"contain"}}>
        <div>
            <h1 >Lottery Game!</h1>
            <Ticket ticket={ticket}/> 
            <button style={styles} onClick={buyTicket}>Buy New Ticket</button>
            <h4  style={styles} >{isWinning && "congratulations, you won!"}</h4>
        </div>
        </div>
    );
}