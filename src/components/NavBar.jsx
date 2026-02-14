import React from 'react'
import { navLinks } from '../constants'
export const 
NavBar = () => {
  return (
    <header>
        <nav>
        <img src='/logo.svg' alt='Apple logo'/>
        <ul>
            {navLinks.map(({label})=>(
                <li key={{label}}>
                    <a href={label}>{label}</a>

                </li>
            ))}

        </ul>
        <div>
            <button >
                <img src='/cart.svg'/>

            </button>
            <button>
                <img src='/search.svg'/>

            </button>
        </div>
    </nav>

    </header>
    
  )
}
