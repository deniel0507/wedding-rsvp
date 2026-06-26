import { FC } from "react";

export interface Props{
}

export const OpenCardButton:FC<Props> = ({}) => {
    return(
        <div className="relative rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-800 flex items-center w-[100px] h-[100px] z-2">
            <button className="text-white font-serif p-4">Open Card</button>
        </div>
    );
}