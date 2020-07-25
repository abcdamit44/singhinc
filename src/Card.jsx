import React from "react";
import './Card.css'

const Card=(props)=>{

    return(
        <>
            <div className="card">
                <div className="card_img">
                    <img src={props.imgsrc} alt='Service-Images' />
                </div>
                <div className='card_body'>
                    <div className='card_title'>
                        {props.title}
                    </div>
                    <div className='card_desc'>
                        {props.desc}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Card;