import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className='first'>
                        <h1>Start your carrier with us 
                        <span> Singh Incorporated</span></h1>
                        <div className='btn'>
                        <NavLink to="/service">Get Started</NavLink>

                        </div>
                    </div>
                    <div className='second'>
                        <p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia aliquid, maiores nostrum excepturi officia repellat recusandae vel quisquam, blanditiis voluptatem. Perspiciatis eveniet doloribus distinctio officiis doloremque labore quasi illo.dolor sit amet consectetur adipisicing elit. Explicabo quia aliquid, maiores nostrum excepturi officia repellat recusandae vel quisquam, blanditiis voluptatem. Perspiciatis eveniet doloribus distinctio officiis doloremque labore quasi illo.dolor sit amet consectetur adipisicing elit. Explicabo quia aliquid, maiores nostrum excepturi officia repellat recusandae vel quisquam, blanditiis voluptatem. Perspiciatis eveniet doloribus distinctio officiis doloremque labore quasi illo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;