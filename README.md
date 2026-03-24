"use client";

import { Bell, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const AirlessSprayMachine = () => {
  return (
    <div className="mt-32 px-5">
      {/* hero section  */}

      <section>
        {/* image div  */}
        <div>
          <Image
            src={"/prod1.png"}
            width={1000}
            height={1000}
            alt="productpage"
          />
        </div>

        {/* content div  */}
        <div>
          {/* stars  */}
          <div>
            <div className="flex gap-1 my-1">
              <Star color="#FFC563" fill="#FFC563" />
              <Star color="#FFC563" fill="#FFC563" />
              <Star color="#FFC563" fill="#FFC563" />
              <Star color="#FFC563" fill="#FFC563" />
              <Star color="#FFC563" fill="#FFC563" />
            </div>
            <div className="font-poppins text-sm">5.0 RATING / 128 REVIEWS</div>
          </div>

          {/* main title  */}

          <h1 className="font-bold text-3xl my-5">Airless Spray Machine</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            optio accusamus nulla similique assumenda dignissimos a consequatur
            iure nemo. Alias, delectus. Nobis, quibusdam nesciunt? Quas nemo
            quos molestiae perferendis.
          </p>

          <div className="flex gap-3 items-end my-5">
            <p className="text-3xl font-bold">₹ 8990.99</p>
            <p className="line-through text-sm">₹10000.00</p>
          </div>

          <div>
            <div className="flex gap-5 my-3">
              <button className="flex gap-5 items-center font-oswald bg-[#FFC563] px-5 py-6">
                <ShoppingCart /> ADD TO CART
              </button>
              <button className="flex gap-5 items-center font-oswald border-2 border-[#FFC563] text-[#ffb431] px-5 py-6">
                <Bell /> NOTIFY ME
              </button>
            </div>
            <p className="text-sm  my-2">Global shipping available • 3-Year limited warranty</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirlessSprayMachine;
