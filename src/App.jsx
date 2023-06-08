import React from 'react'
import { useRef } from 'react';

import { BsFillFileTextFill, BsGit } from 'react-icons/bs';
import {BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs'
import  {design, code, consulting}  from './assets'


const App = () => {
  const services = useRef(null);

  const scrolltosection = (elementref) => {
    window.scrollTo({
      top : elementref.current.offsetTop,
      behavior : 'smooth'
    })    
  }

  return (
    <div>
      <main className='bg-stone-100 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-5 flex justify-between'>
            <h1 className='text-xl font-adelia'>DevelopedbyNike</h1>
            <ul className='flex items-center'>
              <li onClick={()=> scrolltosection(services)} className='bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md font-poppins mr-10 cursor-pointer hover:scale-105'>Services</li>
              <li><BsFillFileTextFill className='text-2xl'/></li>
              <li><a className='bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md ml-2 font-poppins' href="https://github.com/Nike2447">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-4xl py-4 text-teal-600 font-semibold md:text-6xl'>Nikhil Menon</h2>
            <h3 className='text-xl py-4 md:text-3xl'>Student Developer</h3>
            <p className='text-md py-5 leading-10 text-gray-700 md:text-xl max-w-xl mx-auto'>
            Introducing a dedicated and aspiring student developer, eager to make a meaningful impact on the programming 
            community through passion, innovation, and a commitment to continuous learning.
            </p>
            <div className='text-2xl flex justify-center gap-5 text-gray-600'>
              <BsTwitter className='hover:scale-105 cursor-pointer'/>
              <a href="https://www.linkedin.com/in/nikhil-menon-17629122a/">
                <BsLinkedin className='hover:scale-105 cursor-pointer'/>
              </a>
              <BsGithub className='hover:scale-105 cursor-pointer'/>  
            </div>
            <div >
              <img className='relative rounded-full h-80 w-80 mx-auto mt-10' src="../Avatar.png" alt="Nikhil" />  
            </div>
          </div>
        </section>

        <section>
          <div ref={services}>
            <h3 className='text-3xl font-poppins py-1 font-semibold'>Services I Offer</h3>
            <p className='text-md py-2 leading-6 px-10 font-poppins text-gray-600'>
            From the outset, I have maintained an unwavering enthusiasm for acquiring new technologies, enhancing my skills, and maximizing 
            productivity within condensed timelines. My experience includes working at a gaming startup, where 
            I actively contributed as a game tester during the alpha stage of their product, granting me exposure to the software development realm.
            </p>
            <p className='text-md py-2 leading-6 px-10 font-poppins text-gray-600'>    
              I offer a wide range of Services,including programming, web design and can also teach basics of programming in python.
            </p >
          </div>
          <div className='lg: flex gap-10'>
            <div className='text-center shadow-lg padding-10 rounded-xl my-10 '>
              <img className='mx-auto' width = {100} height = {100 }src={design} alt="Design"/>
              <h3 className='text-lg font-poppins pt-6 pb-2'>Beautiful designs</h3>
              <p className='text-md pb-10'>Creating elegant designs according to your needs design theory</p>
            </div>
            <div className='text-center shadow-lg padding-10 rounded-xl my-10 '>
              <img className='mx-auto' width = {100} height = {100 }src={code} alt="Design"/>
              <h3 className='text-lg font-poppins pt-6 pb-2'>Full-Stack</h3>
              <p className='text-md pb-10'>Creating robust frontend and backend development of web applications.</p>
            </div>
            <div className='text-center shadow-lg padding-10 rounded-xl my-10 '>
              <img className='mx-auto' width = {100} height = {100 }src={consulting} alt="Design"/>
              <h3 className='text-lg font-poppins pt-6 pb-2'>Responsive designs</h3>
              <p className='text-md pb-10 max-w-lg'>Creating visually appealing and user-friendly designs that adapt seamlessly to different screen sizes and devices</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App