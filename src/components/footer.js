import React from 'react'

const footer = () => {
    const footerfirstaname = process.env.NEXT_PUBLIC_NAME;
    const footersecondname = process.env.NEXT_PUBLIC_HIGHLIGHT;

    const footername = footerfirstaname + " " + footersecondname;

    return (
        <>            
            <footer className='p-4 text-center border-t-2 border-gray-400 flex flex-col items-center justify-center text-2xl'>
                <p className='font-normal'>Copright &copy; 2024 {footername}. All rights reserved.</p>
            </footer>
        </>
    )
}

export default footer