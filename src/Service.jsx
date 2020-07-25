import React from 'react';
import Card from './Card';
import CardData from './CardData';


const Service = () => {

    const nData = (val) => {
        return (
            <Card
                imgsrc={val.imgsrc}
                title={val.title}
                desc={val.desc}
            />
        )
    }
    return (
        <>

            <div className='container' style={{
                height:'100%'
            }}>
                <div className='wrapper'>

                    
                    {CardData.map(nData)}

                </div>


            </div>
        </>
    )
}
export default Service;