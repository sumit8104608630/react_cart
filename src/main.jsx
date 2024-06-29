//import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Shop_cart,Shop_cart2,Second_cart} from "./App"



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <div  className=' flex xl:flex-col'>
    <Shop_cart/>
    <Shop_cart2/>
    </div>
   <div className='z-10 fixed bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2' ><Second_cart/></div>
    </div>
)
