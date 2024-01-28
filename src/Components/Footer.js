import React from 'react';

// defining a functional component to be found on each page of the app 
// organized with the bootstrap reponsive container grid system 

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='credit'>
                            <p>© 2024 Kari Alcoset. All rights reserved.</p>
                        </div>
                    </div>
                    {/* created a link that scrolls to the top page once clicked */}
                    <div className='col-md-6'>
                        <div className='scrollup'>
                            <a href='#top' className='back-to-top'>Back to top</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}