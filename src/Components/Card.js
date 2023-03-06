
const Card = (props)=> {

const{title} = props;

    return(
    
<div className="bg-gray-200 px-10 pt-5  text-center rounded-xl  w-50 ">
<img className="mb-2 mx-auto" src="./barber.png" alt="" />
<p className="text-lg font-semibold">{title}</p>
<p className="text-sm">Wed 20 min</p>
<p className="mt-6 mb-3 bg-blue-300 px-2 rounded-xl">Book Now</p>

</div>
    
    )
    
    }
    
    export default  Card;