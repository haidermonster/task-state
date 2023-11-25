import React from 'react'
import {useState} from 'react'
function Task2() {
    let [counter, setCounter] = useState(49);
    
    let [counter2, setCounter2] = useState(49);
    
    let [counter3, setCounter3] = useState(49);
    let [pass, setPass] = useState(0);

    let [fail, setFail] = useState(0);

    const sum = () => {
        setPass(pass+1)
        setCounter(counter+1);
    }
    const sum2 = () => {
        setPass(pass+1)
        setCounter2(counter2+1);
    }
    const sum3 = () => {
        setPass(pass+1)
        setCounter3(counter3+1);
    }

    
    const sub = () => {
        setFail(fail+1)
        setPass(pass-1)
        setCounter(counter-1);
    }
    const sub2 = () => {
        setFail(fail+1)
        setPass(pass-1)
        setCounter2(counter2-1);
    }
    const sub3 = () => {
        setFail(fail+1)
        setPass(pass-1)
        setCounter3(counter3+-1);
    }

  return (
    <>
       <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                     <h3>Status:: #Passing:{pass},#Failing:{fail}</h3> </span>
                </div>
            </nav>


<div className='container'>

<div className='row'>
    <div className='col-3'> <button type="button" className="btn btn-primary" onClick={sum}>+</button></div>
    <div className='col-3'> <p style={{color: counter > 49 ?'green':'red' }}>{counter}</p></div>
    <div className='col-3'><button type="button" className="btn btn-primary" onClick={sub}>-</button></div>

</div>

<div className='row'>
    <div className='col-3'> <button type="button" className="btn btn-primary" onClick={sum2}>+</button></div>
    <div className='col-3'> <p style={{color: counter2 > 49 ?'green':'red' }}>{counter2}</p></div>
    <div className='col-3'><button type="button" className="btn btn-primary" onClick={sub2}>-</button></div>
    
</div>

<div className='row'>
    <div className='col-3'> <button type="button" className="btn btn-primary" onClick={sum3}>+</button></div>
    <div className='col-3'> <p style={{color: counter3 > 49 ?'green':'red' }}>{counter3}</p></div>
    <div className='col-3'><button type="button" className="btn btn-primary" onClick={sub3}>-</button></div>
    
</div>


</div>
    </>
  )
}

export default Task2