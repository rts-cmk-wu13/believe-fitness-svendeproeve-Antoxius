"use client"

import Link from "next/link"

export default function LoginButton () {

return (
    
    <>
        <div className="flex gap-5 ">
            <button className="relative font-bold flex py-3 rounded-lg text-black">
                    <Link className="uppercase py-3 px-5 rounded-full bg-amber-300" href="/classes">Classes</Link>
            </button>
            <button className="relative font-bold flex py-3 rounded-lg text-black">
                    <Link className="uppercase py-3 px-5 rounded-full bg-amber-300" href="./login">log in</Link>
            </button>
        </div>
        
    
    </>
)
}