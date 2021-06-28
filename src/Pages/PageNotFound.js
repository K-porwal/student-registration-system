import React from 'react'
import NavBar from './NavBar'
function PageNotFound() {
    return (
        <div>
            <NavBar></NavBar>
            <div className='container fluid'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 pt-5'>

                        Page Not Found ! Use Navigation bar to go to home page.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
