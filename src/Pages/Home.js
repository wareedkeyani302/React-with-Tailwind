import React from 'react';
import skill from '../../src/Asset/Images/skill.jpg';

const Home = () => {
    const cardArray=[
        {
            id:'1',
            Cardheading: 'PW Skills Lab',
            carddescription: 'Supercharge your project development with our robust lab.',
            cardimage:  <img src='	https://pwskills.com/images/homePage/products-icon1.png' alt='Books' className='h-20 w-20 mb-2' />
        },
        {
            id:'2',
            Cardheading: 'Job Portal',
            carddescription: 'Supercharge your project development with our robust lab.',
            cardimage:  <img src='https://pwskills.com/images/homePage/products-icon4.png' alt='Books' className='h-20 w-20 mb-2' />
        },
        {
            id:'3',
            Cardheading: 'Experience Portal',
            carddescription: 'PW Skills self-paced experience portal prioritises hands-on training with 570+ internship projects.',
            cardimage:   <img src='https://pwskills.com/images/homePage/products-icon2.png' alt='Books' className='h-20 w-20 mb-2' />
        },
        {
            id:'4',
            Cardheading: 'Affiliate',
            carddescription: 'Explore Affiliate marketing opportunities with PW Skills and attain financial freedom.',
            cardimage:  <img src='https://pwskills.com/images/homePage/products-icon5.png' alt='Books' className='h-20 w-20 mb-2' />
        },
        {
            id:'5',
            Cardheading: 'Hall of Fame',
            carddescription: 'Our students placements and 100k+ career transitions speak volumes about our courses.',
            cardimage:  <img src='	https://pwskills.com/images/homePage/products-icon3.png' alt='Books' className='h-20 w-20 mb-2' />
        },
    ]
    return (
        <>
            <header className='w-full h-auto'>
                <img src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg' alt='PW Skill' className='w-full hidden md:block' />
                <img src='https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg' alt='PW Skill' className='w-full md:hidden' />
            </header>
            <div className='h-auto width-100 flex flex-wrap flex-col items-center text-center p-10'>
                <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                    <p className='text-indigo-800 font-bold text-3xl rounded-2xl md:text-4xl text-center'>"Pure Hardwork, No Shortcuts!"</p>
                    <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl md:mt-4 mb-12'></div>
                </div>
                <div className='w-full flex flex-wrap justify-evenly'>
                    <div className='w-46 flex flex-col items-center mb-12'>
                        <img src='https://pwskills.com/images/homePage/statistics2.png' alt='Books' className='h-40 w-40' />
                        <p className='text-3xl text-white font-bold'>600+</p>
                        <p className='text-3xl font-bold text-slate-400'>Different Courses</p>
                    </div>
                    <div className='w-46 flex flex-col items-center mb-12'>
                        <img src='https://pwskills.com/images/homePage/statistics1.png' alt='Books' className='h-40 w-40' />
                        <p className='text-3xl text-white font-bold'>70000+</p>
                        <p className='text-3xl font-bold text-slate-400'>Student Enrolled</p>
                    </div>
                    <div className='w-46 flex flex-col items-center mb-12'>
                        <img src='https://pwskills.com/images/homePage/statistics3.png' alt='Books' className='h-40 w-40' />
                        <p className='text-3xl text-white font-bold'>10000+</p>
                        <p className='text-3xl font-bold text-slate-400'>Successful Transition</p>
                    </div>
                </div>
            </div>
            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                <div className="w-full h-auto flex flex-wrap flex-col items-center">
                    <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 "></div>
                </div>
                <div className=" grid md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-around gap-4 container">
                    {cardArray.map((card, index)=> (
                     <div className=" flex flex-col items-center mb-12 border-white border-2 rounded-xl p-4 shadow-xl" key={index}>
                       {card.cardimage}
                     <p className="text-3xl font-bold text-white">{card.Cardheading}</p>
                     <p className="text-xl  text-gray-500">{card.carddescription}</p>
                 </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Home;