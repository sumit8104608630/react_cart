import "../index.css"

function View_cart(){
    return <div className="  flex w-100 bg-slate-200 backdrop-blur bg-opacity-50" >
        <div></div>
        <div className="md:flex">
            <div className="w-full"><img className="w-100" src="https://m.media-amazon.com/images/I/811XYk7ZO9L._AC_UF1000,1000_QL80_.jpg"/></div>
            <div className="py-5 ml-5"><h1 className="h-full w-0.5 bg-gray-500"></h1></div>
            <div>
                <h1 className="text-2xl mx-5 my-2  w-max">THE HIGHEST WISDOM</h1>
                <p className="text-xl font-medium px-5 py-2 text-center ">
                    Just as the scientific study of matter has helped us in solving so many
                    problem of life , similarly the vedas implore the human being to 
                    <strong> understand and scientifically study a substance spirit or {'"Brahman"'}</strong>,
                     to solve any & every problem of existence
                </p>
            </div>
        </div>
    </div>
}


function View_cart2(){
    return <div className="  flex w-100 bg-slate-200 backdrop-blur bg-opacity-50" >
        <div></div>
        <div className="md:flex">
            <div className="w-full"><img className=" object-cover h-full w-full" src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITNuSJzT-h3bu78x9ZoPhqAF31jpcQ_Zbgg&s"/></div>
            <div className="py-5 ml-5"><h1 className="h-full w-0.5 bg-gray-500"></h1></div>
            <div>
                <h1 className="text-2xl mx-5 my-2  w-max">SELF REALIZATION</h1>
                <p className="text-xl font-medium px-5 py-2 text-center ">
                who are you?... Are you your body or your mind or are you something higher? And does it really matter? Our
                 materialistic society has made it virtually Taboo to a enquiry into our real higher self instead we use our
                 real highest year we use a valuable time satisfying the whims of our mind and body
                 
                    <strong> Might there be an alternative?</strong>
                     
                </p>
            </div>
        </div>
    </div>
}

export {View_cart,View_cart2};