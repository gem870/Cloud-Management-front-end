import React from "react";
import Git from '../assets/code.png';
import Twitter from '../assets/twiter.png';
import Facebook from '../assets/facebok.png';
import witch from '../assets/witchs.png';
import Instagram from '../assets/instgram.png';



const Footer = () => {
    return ( 
        <div className="w-full mt-24 bg-slate-900 text-gray-300  py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-gray-600 py-8">

                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Data Cloud</li>
                        <li>Marketing</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Supprt</h6>
                    <ul>
                        <li>Pricing</li>
                        <li>Analytics</li>
                        <li>Documentatin</li>
                        <li>Guide</li>
                        <li>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>partners</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li>Claims</li>
                        <li>Privatacy</li>
                        <li>terms</li>
                        <li>Policies</li>
                        <li>Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Scribe to our newsletter</p>
                    <p className="py4">The latestnews, article, and resources, sent to y index weekly.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input placeholder="Enter email" type="email" className="w-full p-2 mr-4 rounded-md mb-4"/>
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] mx-auto justify-between px-2 py-4 sm:flex-row text-center text-gray-500">
                <p className="py-4">2022 Workflow, LLC. All right reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <img src={Facebook} alt="/" className="w-6" />
                    <img src={Instagram} alt="/" className="w-6" />
                    <img src={Twitter} alt="/" className="w-6" />
                    <img src={witch} alt="/" className="w-6" />
                    <img src={Git} alt="/" className="w-6" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;