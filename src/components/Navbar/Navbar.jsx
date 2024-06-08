import React, { useState, useEffect } from 'react'
import { navbarData } from '../../DataForPage/dummyData'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <div>
        <div className=' grid grid-cols-2 justify-items-center items-center content-center w-full'>
          <div>
            <img className='h-10' src={logo} alt='logo-img'></img>
          </div>
          <div>
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <Link 
                  to={item.link}
                  spy={true} 
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className=' cursor-pointer text-black'
                  ></Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar