import React, {useState} from "react";

import  {SimpleCounter}  from "../component/counter";
import { Btn } from "./boton";

const Home = () => {
		const [time, setTime] = useState ({ms:0, s:0, m:0, h:0});

		let start =() => {
			run();
			setInterval(run, 10);
		}
		let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;
		const run = () =>{
			if(updateM == 60){
				updateH++;
				updateM= 0;
			}
			if(updateS == 60){
				updateM++;
				updateS= 0;
			}
			if(updateMs == 100){
				updateS++;
				updateMs= 0;
			}
			updateMs++;
			return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH});
			
		}
	return (<div className="reloj">

		<SimpleCounter time= {time} />
		<Btn start={start}/>

		</div>);
};

export default Home;
