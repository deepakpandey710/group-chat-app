import './App.css';
import React, { useEffect, useState, useMemo } from 'react'
import {Alert} from 'react-bootstrap';
import { sock } from './components/Sock';
function App() {
    const [val, setVal] = useState('');
    const [log, setLog] = useState([]);
    const [name,setName]=useState('');

    sock.onmessage = function (event) {
        console.log('on message', event)
        const blb=event.data;
        const reader = new FileReader();
    
        reader.addEventListener('loadend', (e) => {
            const txt = e.srcElement.result;
            console.log(txt);
            // setText(txt);
            setLog((prevState)=>{
                return[...prevState,txt];
            })
          });
        // Start reading the blob as text.
        if(typeof blb==="object")
        {
            console.log("typeeeeeeee",blb.type)
            reader.readAsText(blb);
        }
        else{
            console.log("typeeeeeeee not blob",typeof blb)
            setLog((prevState)=>{
                return[...prevState,event.data];
            })
        }

        
    };

    async function sendMessage() {
        console.log(val);
        const x=name+' '+val+' ';
        sock.send(x);
        // sock.send(val);    
        setVal('');
    }
    return (
        <div className='App'>
            <h1>LIVE MESSAGES</h1>
            <input type='text' placeholder='enter your name' value={name}  onChange={(e) => setName(e.target.value)}/>
            {
                name.length?
                <>
            <input type="text" placeholder="enter message" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={sendMessage}>Send message</button>
            <div className='text-container'>
                {/* {log} */}
                {
                    log.map((item)=>
                        <div> 
                            <Alert key={item}>{item}</Alert>
                        </div>
                    )
                }
            </div>
            </>

            :<h1>enter name</h1>
            }
        </div>
    )

}

export default App;


