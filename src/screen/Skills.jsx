import React from "react";
import { MainLayout } from "../component/MainLayout.tsx";
import { Footer } from "../component/Footer.tsx";

function Skills() {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        
        {/* Main content */}
        <div className="flex-1 flex items-center justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Click Mes
          </button>
        </div>

        {/* Footer always at bottom */}
        <Footer></Footer>
      </div>
    </MainLayout>
  );
}

export default Skills;