import { FC } from "react";

export const iconRegistry = {
  location: require("../assets/icon/location.png"),
  speech: require("../assets/icon/speech.png"),
  attendance: require("../assets/icon/attendance.png"),
  contact: require("../assets/icon/contact.png"),
  calendar: require("../assets/icon/calendar.png"),
};

export type IconTypes = keyof typeof iconRegistry;

export interface IconProps {
  icon: IconTypes;
}

export const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <div>
      <img 
        src={iconRegistry[icon]} 
        alt={icon} 
        style={{
          height: 'auto', 
          width: 15, 
          }}/>
    </div>
  );
};