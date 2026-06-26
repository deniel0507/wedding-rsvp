
import { FC, ReactNode } from "react";
import { Footer } from "./Footer";

export interface MainLayoutProps{
    children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({
    children
}) => {
    return(
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center">
                { children }
            </main>
            <Footer></Footer>
        </div>
    );
}