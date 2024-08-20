import React from 'react';
import skill from '../../src/Asset/Images/skill.jpg';

const Home = () => {
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
            <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
                <div class="w-full h-auto flex flex-wrap flex-col items-center">
                    <p class="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products</p>
                    <div class="w-36 h-1 border-b-4 border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-12 "></div>
                </div>
                <div class="w-[90%] h-auto flex flex-wrap justify-around">
                    <div class="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 shadow-xl">
                        <img src='https://pwskills.com/images/categoryPage/Experts.svg' alt='#' />
                        <p class="text-3xl font-bold text-white">PW Skills Lab</p>
                        <p class="text-xl font-bold text-gray-500">Supercharge your project development with our robust lab.</p>
                    </div>
                    <div class="w-64 flex flex-col items-center mb-12 p-2">
                        <img src='	https://pwskills.com/images/categoryPage/Hiring.svg' alt='' />
                        <p class="text-3xl font-bold text-white">Job Portal</p>
                        <p class="text-xl font-bold text-gray-500">Supercharge your project development with our robust lab.</p>
                    </div>
                    <div class="w-64 flex flex-col items-center mb-12 p-2">
                        <img src='https://pwskills.com/images/categoryPage/Learners.svg' alt='' />
                        <p class="text-3xl font-bold text-white">Experience Portal</p>
                        <p class="text-xl font-bold text-gray-500">PW Skills self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                    </div>
                    <div class="w-64 flex flex-col items-center mb-12 p-2">
                        <img src='https://pwskills.com/images/categoryPage/Experts.svg' alt='' />
                        <p class="text-3xl font-bold text-white">Affiliate</p>
                        <p class="text-xl font-bold text-gray-500">Explore Affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                    </div>
                    <div class="w-64 flex flex-col items-center mb-12 p-2">
                        <img src='https://pwskills.com/images/categoryPage/Experts.svg' alt='' />
                        <p class="text-3xl font-bold text-white">Hall of Fame</p>
                        <p class="text-xl font-bold text-gray-500">Our students placements and 100k+ career transitions speak volumes about our courses.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;