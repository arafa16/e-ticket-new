import React, {Fragment} from 'react'
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';


const Layout = ({children}) => {
  return (
    <Fragment>
        <div className='w-full bg-cyan-500 min-h-screen relative'>
          <div className='relative min-h-[42rem]'>
            <Navbar />
            <div className='pt-10 w-full'>
              {children}
            </div>
          </div>
          <div className='absolute bottom-[-10] bg-cyan-500 w-full flex justify-center'>
            <Footer />
          </div>
        </div>
    </Fragment>
  )
}

export default Layout;