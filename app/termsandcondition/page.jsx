
import React from "react";

export const metadata = {
  title: "Terms and Conditions",
  description: "Home Terms and Conditions",
};


const TermsAndConditions = () => {




  return (
    <div>
      {/* 🔹 Title Section with BG */}
      <section
        style={{ backgroundImage: "url(/testimonialbg.webp)" }}
        className="bg-center h-[50vh] md:h-[85vh] bg-cover bg-no-repeat w-full py-20 flex justify-center items-center "
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow-lg">
          Terms And Conditions
        </h1>
      </section>

      {/* 🔹 Content Section (No BG) */}
     
    </div>
  );
};

export default TermsAndConditions;
