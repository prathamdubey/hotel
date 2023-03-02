import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit_booking = () => {
    const [roomNumber, SetroomNumber] = useState(0)
    const [user, Setuser] = useState("")
    const [Email, SetEmail] = useState("")
    const [startTime, SetstartTime] = useState("")
    const [endTime, SetendTime] = useState("")

    const [msg, Setmsg] = useState("")



    const param = useParams()
    useEffect(() => {

        axios.get(`http://localhost:5000/api/booking/${param.id}`)
            .then((res) => {
                SetroomNumber(res.data.roomNumber)
                Setuser(res.data.user)
                SetEmail(res.data.Email)
                SetstartTime(res.data.startTime)
                SetendTime(res.data.endTime)
            })
            .catch((er) => console.log(er))
    }, [])

    const submitForm = (e) => {
        e.preventDefault();
        const data = { roomNumber: roomNumber, user: user, Email: Email, startTime: startTime, endTime: endTime }
        axios.put(`http://localhost:5000/api/edit-booking/${param.id}`, data)
            .then((res) => {
                Setmsg(res.data)
            })
            .catch((er) => console.log(er))

    }

    return (
        <div className="conianer h-screen flex justify-center items-center flex-col">
            <h1>{msg}</h1>
            <form className="formContainer border rounded drop-shadow-md p-10" onSubmit={submitForm}  style={{ width: "400px" }} >
                <h1 className='text-center'>Edit Booking</h1>

                <div className="my-5">
                    <input type="number" value={roomNumber} onChange={(e) => SetroomNumber(e.target.value)} className='w-full py-2 pl-4' placeholder='Room No' required />
                </div>
                <div className="my-5">
                    <input type="text" value={user} onChange={(e) => Setuser(e.target.value)} className='w-full py-2 pl-4' placeholder='Name' required />
                </div>
                <div className="my-5">
                    <input type="emial" value={Email} onChange={(e) => SetEmail(e.target.value)} className='w-full py-2 pl-4' placeholder='Email' required />
                </div>
                <div className="my-5">
                    <label htmlFor="startTime">starting from</label>
                    <input type="datetime-local" onChange={(e) => SetstartTime(e.target.value)} className='w-full py-2 pl-4' placeholder='start from' required />
                </div>
                <div className="my-5">
                    <label htmlFor="EndTime">End At</label>
                    <input type="datetime-local" onChange={(e) => SetendTime(e.target.value)} className='w-full py-2 pl-4' placeholder='end at' required />
                </div>
                <div className="my-5">
                    <input type="submit" className='bg-zinc-300 font-bold w-full py-2 pl-4' placeholder='end at ' />
                </div>
            </form>
        </div>
    )
}

export default Edit_booking