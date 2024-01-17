import React from 'react';


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
                    <div className='col-md-6'>
                        <div className='scrollup'>
                            <a href='#' className='back-to-top'>Back to top</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}