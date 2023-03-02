import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Rooms = () => {
    const [data, Setdata] = useState([])
    const [room_no, Setroom_no] = useState(0)
    const [refund, Setrefund] = useState(0)
    const [refundStatus, SetrefundStatus] = useState(false)

    const param = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Allbooking/${param.name}`, data)
            .then((res) => {
                Setdata(res.data)
            })
            .catch((er) => console.log(er))
    }, [refund, refundStatus])



    const CancelBooking = (id) => {
        axios.delete(`http://localhost:5000/api/delete-booking/${id}`)
            .then((res) => {
                console.log(res.data)
                Setrefund(res.data.Amount)
                SetrefundStatus(true)
            })
            .catch((er) => console.log(er))
    }

    const reset = () => {
        axios.get(`http://localhost:5000/api/Allbooking/${param.name}`, data)
            .then((res) => {
                Setdata(res.data)
            })
            .catch((er) => console.log(er))
    }
    const filterByRoomNO = (e) => {
        e.preventDefault();

        const Data = data.filter((item) => item.roomNumber == room_no)
        Setdata(Data)
    }
    return (

        <div className='container py-20 px-10'>
            <div className="flex justify-center w-full" >
                <h1 className="text-center font-bold text-xl mb-5">Room Numbers:
                    <span className="font-normal">
                        {
                            param.name === "A" && " 100 and 101"
                        }
                        {
                            param.name === "B" && " 102, 103 and 104"
                        }
                        {
                            param.name === "C" && " 105, 106, 107, 108 and 109 "
                        }
                    </span>
                </h1>
            </div>
            <div className="flex justify-end">
                <div className='flex'>
                    <form className='flex' onSubmit={filterByRoomNO}>
                        <input type="number" onChange={e => Setroom_no(e.target.value)} className='w-full py-2 ' style={{ borderColor: 'gray' }} placeholder=' Filter By Room No' required />
                        <input type="submit" className='w-full py-2 mx-3 rounded bg-slate-400' />
                    </form>

                    <div className='btn px-4 py-2 text-white font-bold drop-shadow-md cursor-pointer bg-green-500 mx-2 rounded' onClick={reset}>Reset</div>
                    <NavLink to="/create">
                        <div className='btn px-4 py-2 text-white font-bold drop-shadow-md cursor-pointer bg-green-500 rounded'>Create Booking</div>

                    </NavLink>
                </div>
            </div>

            <div className={refundStatus ? "container" : "container hidden"}>
                <h1 className='text-center'>Refund Amount : {refund}</h1>
            </div>
            <div className="container lg:ml-16   mt-5 lg:mt-10 px-16 py-10 ">
                <div className="py-4 drop-shadow-lg px-20 flex justify-between rounded w-full bg-gray-200">
                    <div className="font-bold">Name</div>
                    <div className="font-bold">Email</div>
                    <div className="font-bold">Room no.</div>
                    <div className="font-bold">Price</div>
                    <div className="font-bold">Start Timing</div>
                    <div className="font-bold">End Timing</div>
                    <div className="font-bold">
                        action buttons
                    </div>
                </div>


                {data.map(({ _id, user, Email, roomNumber, startTime, endTime, totalPrice }) => {
                    return (
                        <div className="py-4 mt-10 drop-shadow-lg px-20 flex justify-between items-center rounded w-full bg-gray-200">

                            <div >{user}</div>
                            <div >{Email}</div>
                            <div >{roomNumber}</div>
                            <div >{totalPrice}</div>
                            <div >{new Date(startTime).toLocaleDateString()} {new Date(startTime).toLocaleTimeString('en-IN', { timeZone: 'IST' })}</div>
                            <div >{new Date(endTime).toLocaleDateString()} {new Date(endTime).toLocaleTimeString('en-IN', { timeZone: 'IST' })}</div>
                            <div className="aciton-btn flex justify-between">
                                <NavLink to={`/edit/${_id}`}>
                                    <div className="edit font-bold px-5 py-1 mr-3    bg-yellow-500 cursor-pointer rounded-lg" >edit</div>
                                </NavLink>
                                <div className="delete font-bold px-2 py-1     bg-red-500 cursor-pointer rounded-lg" onClick={() => CancelBooking(_id)}>Cancel</div>
                            </div>
                        </div>)
                })}
            </div>

        </div>
    )
}

export default Rooms