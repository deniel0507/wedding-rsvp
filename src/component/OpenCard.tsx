import { FC } from "react";
import { Props } from "./OpenCardButton";
import { OpenCardButton } from "./OpenCardButton";
import { OpenCardDoor } from "./OpenCardDoor";

export interface props{

}

export const OpenCard:FC<Props> = ({}) => {
    return(
        <div>
            <div className="gap-4">
                <OpenCardDoor isRight={false}/>
                <OpenCardDoor isRight={true}/>
            </div>
            <OpenCardButton />
        </div>
    );
}