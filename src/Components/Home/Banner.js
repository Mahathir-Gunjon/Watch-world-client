import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Banner = () => {
    return (
        <div className='banner-bg'>
                <div className="w-11/12 lg:w-10/12 md:w-8/12 py-20 grid grid-cols-1 md:grid-cols-2 mx-auto">
                    <div className='text-gray-50 w-full order-2 md:mt-20'>
                        <h1 className="md:text-6xl text-4xl my-1">Watch World</h1>
                        <p className=' text-cyan-400 text-2xl font-bold mb-3'>The wareHouse of Watchs</p>
                        <p className='md:text-base to-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis esse porro, eius doloremque sunt nam saepe tempore labore fugit?</p>
                        <button type="button" className="py-2 px-4  my-8 text-white shadow-xl font-semibold rounded bg-gradient-to-r from-cyan-400 to-cyan-900 hover:from-red-600 hover:to-red-800 ...">
                            <Link to='/'>Inventory</Link>
                        </button>
                    </div>
                    <div className='w-full mx-auto md:order-2'>
                        <img src="https://i.ibb.co/74WgsH4/banner3.png" alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Banner;