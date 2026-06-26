import { FC } from "react";

export interface Props{

}

export const SelectBox:FC<Props> = () => {
    return(
        <div className="w-[80%] flex gap-4">
            <p>How many pax? </p>
            <select className="border border-black rounded px-4">
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    );
}