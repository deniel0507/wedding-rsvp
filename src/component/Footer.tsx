import { FC } from "react";
import { Icon } from "./Icon";

export interface FooterProps{

}

export const Footer: FC<FooterProps> = () => {
    return(
        <footer className="bg-gray-800 text-white text-center p-4">
            {/* <p>© 2026 My Website. All rights reserved.</p> */}
            <div className="flex">
                <div className="flex-1 bg-gray-800 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer">
                    <Icon icon="location"/>
                    <button className="text-white font-medium">Location</button>
                </div>
                <div className="flex-1 bg-gray-800 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer">
                    <Icon icon="calendar"/>
                    <button className="text-white font-medium">Calendar</button>
                </div>
                <div className="flex-1 bg-gray-800 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer">
                    <Icon icon="contact"/>
                    <button className="text-white font-medium">Contact</button>
                </div>
                <div className="flex-1 bg-gray-800 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer">
                    <Icon icon="attendance"/>
                    <button className="text-white font-medium">Attendance</button>
                </div>
                <div className="flex-1 bg-gray-800 hover:bg-blue-700 flex flex-col items-center content-center p-2 rounded cursor-pointer">
                    <Icon icon="speech"/>
                    <button className="text-white font-medium">Words</button>
                </div>
            </div>
        </footer>
    )
}