import { FC } from "react";
import { Icon } from "./Icon";
import { useNavigate } from "react-router-dom";

export interface FooterProps{

}

export const Footer: FC<FooterProps> = () => {

    const navigate = useNavigate();

    return(
        <footer className="bg-gray-300 text-white text-center p-4 z-1">
            {/* <p>© 2026 My Website. All rights reserved.</p> */}
            <div className="flex">
                <div className="w-1/5 flex-1 bg-gray-300 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer active:bg-blue-400">
                    <Icon icon="location"/>
                    <button className="text-black font-medium mt-2" style={{fontSize: 10}}>Location</button>
                </div>
                <div className="w-1/5 flex-1 bg-gray-300 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer active:bg-blue-400">
                    <Icon icon="calendar"/>
                    <button className="text-black font-medium mt-2" style={{fontSize: 10}}>Calendar</button>
                </div>
                <div className="w-1/5 flex-1 bg-gray-300 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer active:bg-blue-400">
                    <Icon icon="contact"/>
                    <button className="text-black font-medium mt-2" style={{fontSize: 10}}>Contact</button>
                </div>
                <div 
                    className="w-1/5 flex-1 bg-gray-300 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer active:bg-blue-400"
                    onClick={() => navigate("/")}
                    >
                    <Icon icon="attendance"/>
                    <button className="text-black font-medium mt-2" style={{fontSize: 10}}>Attendance</button>
                </div>
                <div 
                    className="w-1/5 flex-1 bg-gray-300 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer active:bg-blue-400"
                    onClick={() => navigate("/attendance")}
                    >
                    <Icon icon="speech"/>
                    <button className="text-black font-medium mt-2" style={{fontSize: 10}}>Words</button>
                </div>
            </div>
        </footer>
    )
}