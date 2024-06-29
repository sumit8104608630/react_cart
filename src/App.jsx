import './index.css'
import { useState } from 'react';
import {View_cart,View_cart2} from './component/View_cart';
import {Cart,Carts} from './component/Cart';
import{useEffect} from 'react'
function Shop_cart(){
  let image_url=
    [
      "	https://i.pinimg.com/736x/be/19/13/be1913dd97bb1970a63a2452bbd95ae9.jpg",
      "	https://cdn.pixabay.com/photo/2023/10/21/22/10/ai-generated-8332746_640.png",
      "https://images.news9live.com/wp-content/uploads/2024/01/1-200.jpg",
      "	https://m.media-amazon.com/images/I/81cekv1b3fL._AC_UF1000,1000_QL80_.jpg",
      "	https://e0.pxfuel.com/wallpapers/493/309/desktop-wallpaper-krishna-murli-govind-radha-god.jpg"]
  
  return <div className='mt-10 flex-col xl:flex xl:flex-row  justify-center  '>
    <Cart urls={image_url} />
  </div>
}
function Shop_cart2(){
  let image_url=
    ["https://i.pinimg.com/736x/e6/c6/7f/e6c67f6bc17fd69580085df4ccd0dba2.jpg",
      "	https://i.pinimg.com/originals/20/1d/cf/201dcf805b3ac74837e606904d28123a.jpg",
      "https://images.herzindagi.info/webstories/17235/radhakrishna-1693638818.jpeg",
      "https://i.pinimg.com/236x/1c/b3/2d/1cb32da979731d56dadade1cd4c0cba6.jpg",
      "https://m.media-amazon.com/images/I/61O+Lkq9SwL._AC_UF1000,1000_QL80_.jpg"]
    
  return <div className='mt-10 flex-col xl:flex xl:flex-row  justify-center  '>
    <Carts  urls={image_url} />
  </div>
}

function Second_cart(){
 const [bollean1,operation1]=useState(false)
 const [bollean2,operation2]=useState(false)
 const [bollean3,operation3]=useState(false)

  useEffect(() => {
    let btn = document.querySelectorAll("button");
   btn.forEach((button) => {
    button.addEventListener("click",()=>{
      let id=button.id;
     if(id==1){
      operation1(!bollean1)
      return bollean1
     }
     if(id==2){
      operation2(!bollean2)
      return bollean2
     }
     if(id==3){
      operation3(!bollean3)
      return bollean3
     }
    })
   })
    });
   return (function display(){
    if(bollean1==true ){
      
      return <View_cart/>
    }
    
    if(bollean2==true ){
      return <View_cart2/>
    }
   })();
}


export  {Shop_cart,Shop_cart2 ,Second_cart};
