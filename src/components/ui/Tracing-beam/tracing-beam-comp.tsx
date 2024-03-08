"use client";

// import { calsans } from "@/fonts/calsans";
// import { twMerge } from "tailwind-merge";

import a from '../../../assets/Image/a.jpg'
import b from '../../../assets/Image/b.jpg'
import c from '../../../assets/Image/c.jpg'
import d from '../../../assets/Image/d.jpg'

import { TracingBeam } from "../Tracing-beam/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        {/* <p className={twMerge(calsans.className, "text-xl mb-4")}>
                            {item.title}
                        </p> */}

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-4 object-cover border-4 border-slate-500"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
       
        description: (
            <>

                <div>
                    <p className='text-2xl font-bold'>Bangladesh Army International University of Science and Technology</p>
                    <div className='font-bold text-lg text-slate-500'>
                        <p>Cumilla, Bangladesh</p>
                        <p>Certificate for highest attendance</p>
                        <p>Issue Date: 18 November 2023</p>
                    </div>
                </div>

            </>
        ),
        badge: "Certificate for highest attendance",
        image: b
    },
    {
        
        description: (
            <>
                <div>
                    <p className='text-2xl font-bold'>Googl Digital Garage</p>
                    <div className='font-bold text-lg text-slate-500'>
                        <p>World Wide</p>
                        <p>Certificate for completing Digital Marketing</p>
                        <p>Issue Date: 07 January 2022</p>
                    </div>
                </div>
            </>
        ),
        badge: "Digital Marketing",
        image: d
    },
    {
       
        description: (
            <>
                <div>
                    <p className='text-2xl font-bold'>Bangladesh Chemistry Society</p>
                    <div className='font-bold text-lg text-slate-500'>
                        <p>Dhaka, Bangladesh</p>
                        <p>Certificate for participated in Chemistry Olympiad</p>
                        <p>Issue Date: 19 January 2018</p>
                    </div>
                </div>
            </>
        ),
        badge: "Bangladesh Chemistry Olympiad",
        image: c
    },
    {
        
        description: (
            <>
                <div>
                    <p className='text-2xl font-bold'>FM Institute</p>
                    <div className='font-bold text-lg text-slate-500'>
                        <p>Cumilla, Bangladesh</p>
                        <p>Certificate for completing Spoken English Language Course</p>
                        <p>Issue Date: 10 March 2017</p>
                    </div>
                </div>
            </>
        ),
        badge: "Spoken English Language Course",
        image: a
    },
];
