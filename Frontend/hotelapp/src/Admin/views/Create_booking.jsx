import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Create_booking = () => {

    const [roomNumber, SetroomNumber] = useState(0)
    const [user, Setuser] = useState("")
    const [Email, SetEmail] = useState("")
    const [startTime, SetstartTime] = useState("")
    const [endTime, SetendTime] = useState("")
    const [PaymentMethod, SetPaymentMethod] = useState("")

    const [resMsg, SetresMsg] = useState("")
    const [resStatus, SetStatus] = useState(false)





    const submitForm = (e) => {
        e.preventDefault();
        const data = { roomNumber: roomNumber, user: user, Email: Email, startTime: startTime, endTime: endTime }
        axios.post("http://localhost:5000/api/booking", data)
            .then((res) => {
                SetStatus(res.data.result)
                SetresMsg(res.data.msg)
            })
            .catch((er) => console.log(er))
    }
    return (
        <div className="conianer h-screen flex justify-center items-center flex-col">

            <h1 className='font-bold text-xl'>
                {
                    resStatus?`${resMsg} by: ${PaymentMethod}`:resMsg
                }
            </h1>
            <form className="formContainer border rounded drop-shadow-md p-10" onSubmit={submitForm} style={{ width: "400px" }} >

                <h1 className='text-center'>Create Booking</h1>

                <div className="my-5">
                    <input type="number" className='w-full py-2 pl-4' placeholder='Room No' onChange={(e) => SetroomNumber(e.target.value)} required />
                </div>
                <div className="my-5">
                    <input type="text" className='w-full py-2 pl-4' placeholder='Name' onChange={(e) => Setuser(e.target.value)} required />
                </div>
                <div className="my-5">
                    <input type="emial" className='w-full py-2 pl-4' placeholder='Email' onChange={(e) => SetEmail(e.target.value)} required />
                </div>
                <div className="my-5">
                    <label htmlFor="startTime">starting from</label>
                    <input type="datetime-local" className='w-full py-2 pl-4' placeholder='start from' onChange={(e) => SetstartTime(e.target.value)} required />
                </div>
                <div className="my-5">
                    <label htmlFor="EndTime">End At</label>
                    <input type="datetime-local" className='w-full py-2 pl-4' placeholder='end at' onChange={(e) => SetendTime(e.target.value)} required />
                </div>
                <div className="my-5 flex justify-between">
                    {/* <input type="submit" className='bg-zinc-300 font-bold w-full py-2 pl-4 cursor-pointer' required /> */}
                    
                    <button className='bg-zinc-300 font-bold w-full py-2 px-2 mx-2 cursor-pointer' onClick={()=>SetPaymentMethod("CASH")}>Submit by Cash</button>
                    <button className='bg-zinc-300 font-bold w-full py-2 px-2 mx-2 cursor-pointer'onClick={()=>SetPaymentMethod("UPI")}>Submit by UPI</button>
                </div>
            </form>
        </div>
    )
}

export default Create_booking