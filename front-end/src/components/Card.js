import React, {Fragment} from 'react';

function Card() {
  return (
    <Fragment>
        <section className='property'>
           
            <div className='center'>

                <h1>Card</h1>

            </div>
            <div className='row'>
                <div className='column'>
                    <div className='single-property'>
                        <div className='card'>

                            <div className='property-thumb'>
                                <div className='property-tag'> Images stored </div>
                                <img src='' alt=''/>
                            </div>

                            <div className='property-content'>
                                <h3></h3>
                                <div className='mark'>
                                    <i class='fa-solid fa-location-dot'></i>
                                    <span></span>
                                </div>
                            </div>
                            <span className='amount'></span>

                        </div>
                    </div>
                </div>
            </div>
            <div className='more-property'>
                <a className='property-button' href="#">More images</a>
            </div>
        </section>
    </Fragment>
  );
}

export default Card;
