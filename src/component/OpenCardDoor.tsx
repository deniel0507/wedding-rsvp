import { FC } from "react";


export interface Props{
    isRight?: boolean
}

export const OpenCardDoor:FC<Props> = ({
    isRight,
}) => {

    return(
        <div className={`absolute top-0 ${isRight? "right-0": "left-0"} bg-black z-3 w-[49%] h-full`}>
        </div>
    );
}