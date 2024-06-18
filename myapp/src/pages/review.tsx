import reviews from '@/data/myData'
import { IReview } from '@/interface/IReview'
import React, { useState } from 'react'

export default function review() {
    const [index, setindex] = useState<number>(0)
    const next = () => {
        if (index < reviews.length - 1) {
            setindex(index + 1)
        } else {
            setindex(0)
        }
    }
    const remove = () => {
        if (index <= 0) {
            setindex(reviews.length - 1)
        }
        else{

            setindex(index-1)
            
        }
    }

    return (
        <div>
            <div className='w-[700px] mx-auto bg-slate-400 text-center '>
                <div>
                    <img className='photo w-[100px] h-[100px] p-30 mx-auto rounded-full' src={reviews[index].image} alt="" />
                </div>
                <div>
                    <h2>{reviews[index].name}</h2>
                </div>
                <div>
                    <h3 className='forjob'>{reviews[index].job}</h3>
                </div>
                <div>
                    <p>{reviews[index].text}</p>
                </div>
                <div>
                    <button onClick={remove}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </button>
                    <button onClick={next}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}