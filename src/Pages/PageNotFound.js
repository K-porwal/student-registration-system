import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
function PageNotFound() {
    return (
        <div className = 'PageNotFound'>
            <NavBar></NavBar>
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5 text-center'>
                        Page Not Found ! Use Navigation bar to go to home page.
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default PageNotFound
