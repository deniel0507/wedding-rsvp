import { FC } from "react";

export interface Props{
    label:string
    placeHolder: string
}

export const Form:FC<Props> = ({
    label,
    placeHolder
}) => {

    return(
        <div className="w-[80%]">
            <p className="w-full">{label}</p>
            <input className="w-full mt-2 border border-black rounded" placeholder={placeHolder}/>
        </div>
    );
}