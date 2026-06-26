import { FC } from "react";

export interface Props{
    checkboxLabel: string
}

export const CheckBox:FC<Props> = ({checkboxLabel}) => {
    return(
        <div className="">
            <div className="flex gap-2">
                <input className="" type="checkbox"/>
                <p>{checkboxLabel}</p>
            </div>
        </div>
    );
}