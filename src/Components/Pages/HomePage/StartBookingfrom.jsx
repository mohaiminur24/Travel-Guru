import React from 'react';

const StartBookingfrom = () => {
    return (
        <div className='grid grid-cols-2 w-full min-h-[calc(100vh-250px)] gap-10 justify-center items-center'>
            <div>
                <h1 className='uppercase lg:text-5xl mb-5 font-bold '>Cox's bazar</h1>
                <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse porro, minima aperiam excepturi quam reiciendis. Quis excepturi iste non sed cumque magnam vitae omnis voluptate adipisci, enim quos eveniet Quis excepturi iste non sed cumque magnam vitae omnis voluptate adipisci, enim quos eveniet</p>  
            </div>

            <div className='w-4/5 mx-auto h-auto p-5 bg-white text-black rounded-md shadow-md'>
                <form>
                    <label className='text-sm text-gray-400' htmlFor="Origin">Origin</label>
                    <input className='bg-gray-200 outline-none block w-full my-1 px-3 py-2 rounded-md text-sm' type="text"/>
                    <label className='text-sm text-gray-400' htmlFor="destination">Destination</label>
                    <input className='bg-gray-200 outline-none block w-full my-1 px-3 py-2 rounded-md text-sm' type="text" />
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <label className='text-sm text-gray-400' htmlFor="date">From</label>
                            <input className='bg-gray-200 text-gray-400 outline-none block w-full my-1 px-3 py-2 rounded-md text-sm' type="date" name="fromdate" id="" />
                        </div>
                        <div className='w-full'>
                            <label className='text-sm text-gray-400' htmlFor="todate">To</label>
                            <input className='bg-gray-200 text-gray-400 outline-none block w-full my-1 px-3 py-2 rounded-md text-sm' type="date" name="todate" id="" />
                        </div>
                    </div>
                    <input className='w-full text-center py-3 mt-5 rounded-sm shadow-sm bg-yellow-500 text-sm' type="submit" value="Start to Booking" />
                </form>

            </div>
        </div>
    );
};

export default StartBookingfrom;