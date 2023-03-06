import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SetAppointment = ()=> {

const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <p className='text-center mt-10 mb-2 text-[#0eafd5] font-semibold text-4xl '>Barber</p>
      <p className='text-center mb-5 font-semibold text-sm '>28th Floor, Aviv, 20 min</p>
    <div className="flex justify-center">

    <div>

    <DatePicker
    selected={startDate}
    onChange={(date) => {
         setStartDate(date);
         console.log(startDate) 
     }}
    inline
    dateFormat="MM/yyyy"
    
  />

    </div>
  <div className='ml-8'>
  <div className='grid grid-cols-2 gap-4 gap-y-0'>
    <p className='hover:bg-[#0eafd5] rounded-2xl hover:text-white text-center cursor-pointer text-[#0eafd5] font-semibold text-lg'>11:20</p>
    <p className='hover:bg-[#0eafd5] rounded-2xl hover:text-white text-center cursor-pointer text-[#0eafd5] font-semibold text-lg'>11:40</p>
    <p className='hover:bg-[#0eafd5] rounded-2xl hover:text-white text-center cursor-pointer text-[#0eafd5] font-semibold text-lg'>12:00</p>
    <p className='hover:bg-[#0eafd5] rounded-2xl hover:text-white text-center cursor-pointer text-[#0eafd5] font-semibold text-lg'>12:20</p>
    <p className='hover:bg-[#0eafd5] rounded-2xl hover:text-white text-center cursor-pointer text-[#0eafd5] font-semibold text-lg'>12:40</p>
    </div>
<button className='bg-[#0eafd5] rounded-2xl px-12 text-white font-semibold mt-5 hover:bg-[#0088a8]'>SET</button>
  </div>

    </div>

  </>

  )
}

export default  SetAppointment;