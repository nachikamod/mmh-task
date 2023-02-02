import { useState } from "react";
import logo from "../assets/images/index.png";
import handshake from "../assets/images/handshake.png";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-black shadow">
            <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <a href="javascript:void(0)">
                            <img src={logo} alt="Logo" style={{height: "30px"}}/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Services</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Company</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)" className="flex items-start justify-start">For MMH<span className="text-[10px] mr-2">TM</span> Partner <img src={handshake} alt="handshake" style={{height: "25px", marginLeft: "5px"}}/></a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <div className="w-10 h-10 flex items-center justify-center bg-[#e4dfcf] rounded-full text-black font-bold">A</div>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)" className="bg-[#fbb902] text-black font-bold py-2 px-3 rounded hover:bg-[#d09901] ease-in duration-300">+ Book Partner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}