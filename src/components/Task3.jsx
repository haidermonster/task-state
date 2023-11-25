import React from 'react'

import { useState } from 'react';
function Task3() {

    const [image, setImage] = useState(<img src="burger.jpg" class="card-img-top img-fluid" alt="..." />);

    const show = () => {
setImage(   
    <div className="card" style={{width: '28rem'}}>
        <img src="burger.jpg"  class="card-img-top img-fluid" alt="..." />
    </div> )
    }

    
    const show2 = () => {
        setImage(    <div className="card" style={{width: '28rem'}}>
        <img src="wings.jpg"  class="card-img-top img-fluid" alt="..." />
    </div>)
            }
        
    const show3 = () => {
        setImage(    <div className="card" style={{width: '28rem'}}>
        <img src="twister.jpg"  class="card-img-top img-fluid" alt="..." />
    </div>)
            }
        
            
    const show4 = () => {
        setImage(    <div className="card" style={{width: '28rem'}}>
        <img src="family.jpg"  class="card-img-top img-fluid" alt="..." />
    </div>)
            }
        

    return (
        <>
            <h2>Task3:</h2>

            <div className='container-fluid pt-5 pb-5'>
                <div className='row'>
                    {image}
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="burger.jpg" onClick={show} className="card-img-top img-fluid" alt="..." />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="wings.jpg"  onClick={show2} className="card-img-top img-fluid" alt="..." />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="twister.jpg" onClick={show3} className="card-img-top img-fluid" alt="..." />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="family.jpg" onClick={show4} className="card-img-top img-fluid" alt="..." />
                        </div>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Task3