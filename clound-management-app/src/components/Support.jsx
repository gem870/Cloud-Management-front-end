import React from "react";
import Phone from '../assets/call.png';
import Arrow from '../assets/right-arrow (1).png';
import Chip from '../assets/circuit.png';
import SupportIcon from '../assets/affiliation.png';
import Group from '../assets/groupImage.jpg';



const Support = () => {
    return ( 
        <div name='support' className="w-full  mt-10">
            <div className="w-full h-[700px] bg-gray-900/90  absolute ">
                <img src={Group} alt="/" className="w-full h-full mix-blend-overlay"/>
            </div>

          <div className="max-w-[1240px] mx-auto text-white relative">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
                <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint eum beatae optio, totam, fuga odit aliquid, molestias itaque ad ipsa fugiat! Atque velit asperiores, quam corporis facilis dignissimos nihil!</p>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt20 text-black">

                <div className="bg-white rounded-xl shadow-2xl">
                    <div >
                        <div className="w-20 h-20 rounded-md bg-indigo-600 mt-[-2rem] ml-8 shadow-2xl">
                          <img src={Phone} alt="/" className="w-10 m-auto pt-5"/>
                        </div>
                        <h3 className="font-bold text-2xl my-6 px-8">sales</h3>
                        <p className="text-gray-600 text-xl px-8 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis pariatur autem commodi, inventore delectus at nemo quidem officiis sint.</p>
                        <div className="flex bg-slate-200 pl-8 py-4 rounded-b-md">Contact Us <img src={Arrow} alt="/" className="w-5 mx-4  "/></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div >
                        <div className="w-20 h-20 rounded-md bg-indigo-600 mt-[-2rem] ml-8 shadow-2xl">
                          <img src={SupportIcon} alt="/" className="w-10 m-auto pt-5"/>
                        </div>
                        <h3 className="font-bold text-2xl my-6 px-8">Technical Support</h3>
                        <p className="text-gray-600 text-xl px-8 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis pariatur autem commodi, inventore delectus at nemo quidem officiis sint.</p>
                        <div className="flex bg-slate-200 pl-8 py-4 rounded-b-md">Contact Us <img src={Arrow} alt="/" className="w-5 mx-4  "/></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div >
                        <div className="w-20 h-20 rounded-md bg-indigo-600 mt-[-2rem] ml-8 shadow-2xl">
                          <img src={Chip} alt="/" className="w-10 m-auto pt-5"/>
                        </div>
                        <h3 className="font-bold text-2xl my-6 px-8">Media Inquires</h3>
                        <p className="text-gray-600 text-xl px-8 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis pariatur autem commodi, inventore delectus at nemo quidem officiis sint.</p>
                        <div className="flex bg-slate-200 pl-8 py-4 rounded-b-md">Contact Us <img src={Arrow} alt="/" className="w-5 mx-4  "/></div>
                    </div>
                </div>

            </div>
         </div>  

        </div>
     );
}
 
export default Support;