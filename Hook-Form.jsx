import React from 'react'

const MyForm = () => {
    return (
        <>
            <div className='block mt-4'>
                <form className='p-2'>
                    <input type="text" placeholder="Full Name..." /><br />
                    <input type="text" placeholder="Email..." className='mt-1' /><br />
                    <input type="text" placeholder="Age..." className='mt-1' /><br />
                    <input type="password" placeholder="Password..." className='mt-1' /><br />
                    <input type="password" placeholder="Confirm Password..." className='mt-1' /><br />
                    <input type="submit" className='mt-2 font-semibold text-white but-blue' />
                </form>
            </div>
        </>
    )
}

export default MyForm
