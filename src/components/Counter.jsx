import { useState } from 'react';

export function Counter(){
   const [count, setCount] = useState(0);
   const [randomNum, setRandomNum]=useState(1);
   function increament() {
    setCount(count+1);
   }
   function dencreament() {
    setCount(count-1);
   }
   function getRandomNum() {
    setRandomNum(Math.round(Math.random()*100));
   }
return(
<>
<hr/>
<p>{count}</p>
<button onClick={increament}>Increament</button>
<button onClick={dencreament}>Dencreament</button>
<hr/>
<p className={randomNum>=50?"bg-success":'text-danger'}>{randomNum}</p>
<button onClick={getRandomNum}>getRandomNum</button>
<hr/>
</>

);
}

//import {Counter} from "../components/Counter";