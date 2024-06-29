import "../index.css"


function Carts({urls}){
 
    return urls.map((url,index)=><div className="w-80 mx-5 my-5 shadow-2xl rounded-lg  flex-col "  key={index}>
        
        <div>
            <a href="#"><div>
                <img className="w-full  rounded-t-lg h-80 object-cover object-top" src={url}/>
                </div></a>
        </div>
        <div  className="px-5 py-2 flex-col ">
        <span className="bg-green-600 px-2 py-1 text-lg font-bold text-slate-100 rounded-lg  ">Topic {index+6}</span>
            <p className="mb-5 text-base font-semibold mt-2">Jigyasa ..a password for happiness</p>
            <div><button id={index+6}  className="w-full text-xl font-bold bg-orange-500 text-slate-50 rounded">View</button></div>
        </div>
    </div>)
}

function Cart({urls}){
 
    return urls.map((url,index)=><div className="w-80 mx-5 my-5 shadow-2xl rounded-lg  flex-col " key={index}>
        
        <div>
            <a href="#"><div>
                <img className="w-full h-80 rounded-t-lg object-cover object-top" src={url}/>
                </div></a>
        </div>
        <div className="px-5 py-2">
            <span className="bg-green-600  px-2 py-1 text-lg font-bold text-slate-100 rounded-lg  ">Topic {index+1}</span>
            <p className="mb-5 text-base font-semibold mt-2">Jigyasa ..a password for happiness</p>
            <div><button id={index+1}   className="w-full text-xl font-bold bg-orange-500 text-slate-50 rounded">View</button></div>
        </div>
    </div>)
}

export {Cart,Carts};