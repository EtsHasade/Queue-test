import { useState, useEffect} from 'react'
import logo from '../assets/img/QueueLogo.svg'

export default function Modal({ children , closeModal}) {   

    return (
        <div className='modal'>
            <div className="screen" onClick={closeModal}>
                <div className="content">
                    <img src={logo} className="logo" alt="Queue Logo" />
                    {children}
                </div>
            </div>
        </div>
    )
}
