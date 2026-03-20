import Image from "next/image";
import { FaAward, FaRocket, FaAtom } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  const items = [
    {
      icon: <FaAtom className="text-5xl text-teal-500" />,
      title: "Quality Assurance",
      text: "We never compromise in quality. We believe that success and customer satisfaction are inextricably linked. Without maintaining quality standards, it is impossible to win the trust of the customers.",
    },
    {
      icon: <FaRocket className="text-5xl text-teal-500" />,
      title: "Our Infrastructure",
      text: "We are supported by a formidable infrastructure facility that is spread across a wide area for organized business operations. We have equipped our manufacturing tools with the latest technology. The products are stored efficiently to have peaceful recovery at the time of requirement.",
    },
    {
      icon: <FaAward className="text-5xl text-teal-500" />,
      title: "Why Us?",
      text: "Throughout the year, we have reached a reputed position in the market due to the high quality of our machines. We have created good reviews in the market due to our transparency in our business contacts. Our company guarantees that the functions of the company are carried out methodically.",
    },
  ];

  return (
    <div>
   <section
  style={{ backgroundImage: "url('/home/eco3-1024x745.webp')" }}
  className="relative w-full bg-cover bg-center h-[350px] md:h-[400px] lg:h-[500px]"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-white mt-15 md:mt-0 text-3xl sm:text-4xl md:text-6xl font-bold z-10 text-center leading-tight">
      About us
    </h2>
  </div>
</section>


      <section>
        <div className="max-w-7xl mx-auto px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/home/about.webp"
              alt="About Us Image"
              width={550}
              height={400}
              className="rounded-lg shadow-lg"
            />

            <div className=" ">
              <h1 className="text-3xl md:text-5xl text-black font-semibold mb-7">
                Welcome to SBS Machinery Pvt Ltd
              </h1>
              <p className="text-black text-lg leading-relaxed">
                Welcome to SBS Machinery Pvt Ltd{" "}
                <span className="text-cyan-500 underline font-semibold">
                  <Link href="/categories/paper-plate-making-machine">
                    Paper Plate Making Machine ,
                  </Link>{" "}
                  <Link href="/categories/paper-die-cutting-machine">
                    {" "}
                    Paper Die Cutting Machine ,
                  </Link>{" "}
                  <Link href="/categories/paper-cup-making-machine">
                    Paper cup Making Machine ,
                  </Link>{" "}
                  <Link href="/categories/bio-degradable-bag-making-machine">
                    {" "}
                    Bio-degradable Bag Making Machine ,
                  </Link>{" "}
                  <Link href="/categories/flexo-printing-machine">
                    Flexo Printing Machine ,
                  </Link>{" "}
                  <Link href="/categories/non-woven-bag-making-machines">
                    Non Woven Bag Making Machines ,
                  </Link>{" "}
                  <Link href="/categories/offset-printing-machine">
                    Offset Bag Printing Machine ,
                  </Link>
                </span> 
                   {" "}     etc. We have earned an international reputation to maintain a
                well defined quality control policy as per international
                standards of manufacturing. We never compromise in quality of
                raw material and advanced tooling machines which are commonly
                used in production process. As a result of such extensive
                quality control operations, all our products come with flawless
                quality and offer unique performance. Our aim to maintaining
                quality standards, and provide the best machines to our
                customers.
              </p>
              <div className="space-y-3 mt-4 ">
                {/* Phone Info Box */}
                <div className="flex items-center gap-4 py-1 px-4  border border-gray-100 hover:shadow-lg transition">
                  {/* Phone Icon Circle */}
                  <div className="w-17 h-17  hover:bg-[#10C098] flex items-center justify-center rounded-full bg-[#176BB0] border-2 border-[#F7C600] shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.27 1.06l-2.1 2.1a16 16 0 007.07 7.07l2.1-2.1a1 1 0 011.06-.27l3.6 1.2a1 1 0 01.684.95V20a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 7V5z"
                      />
                    </svg>
                  </div>

                  {/* Text + Number */}
                  <div>
                    <p className="text-sm text-black">Call 24 hrs / 7 Days</p>
                    <p className="text-lg font-bold text-[#00537B] hover:text-[#003d58] transition">
                      <a
                        href="tel:+918810570771"
                        className="block underline"
                      >
                        +91 8810570771
                      </a>
                      <a
                        href="tel:+917042039777"
                        className="block underline"
                      >
                        +91 7042039777
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "radial-gradient(at center center, #87AFE2 0%, #305788 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto py-16 px-6 text-white space-y-20">
          {/* First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Paper Die Cutting Machine Manufacturers & Supplier in India
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                SBS Machinery is one of the leading manufacturers of Paper Die
                Cutting Machines in India. Our machines are known for their
                precision, reliability, and cutting-edge technology. They are
                built to meet the diverse needs of paper manufacturers, ensuring
                clean and accurate cuts for various paper products. We have a
                wide presence in cities like Hyderabad, Pune, Kolkata, and
                Ahmedabad, delivering products that meet the highest standards
                of quality and efficiency.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <Image
                width={500}
                height={300}
                src="/about/Paper-Die-Cutting-Machine.webp"
                alt="Paper Die Cutting Machine"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <Image
                width={500}
                height={300}
                src="/about/biodegradable-plastic-bag-making-machine-500x500-Photoroom.webp"
                alt="Biodegradable Plastic Bag Making Machine"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bio-Degradable Bag Making Machine Manufacturers & Supplier in
                India
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                As one of the top Bio-Degradable Bag Making Machine
                Manufacturers in India, SBS Machinery offers innovative and
                sustainable solutions for the growing demand for eco-friendly
                products. Our machines are designed to produce bio-degradable
                bags that meet environmental standards while ensuring high
                efficiency and reliability. Serving key markets such as Delhi
                NCR, Bangalore, Mumbai, and Pune, we are committed to
                contributing to the sustainable future of packaging with our
                state-of-the-art machines.
              </p>
            </div>
          </div>

          {/* Third */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Flexo Printing Machine Manufacturers & Supplier in India
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                SBS Machinery is renowned for its cutting-edge Flexo Printing
                Machines, perfect for high-quality printing on various
                substrates. As prominent Flexo Printing Machine Manufacturers in
                India, Delhi NCR, we offer machines that ensure exceptional
                print quality and precision. Our machines are built to handle
                multiple printing tasks, offering flexibility and efficiency for
                businesses in the printing industry.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <Image
                width={500}
                height={300}
                src="/about/Flexo-Printing-Machine.webp"
                alt="Flexo Printing Machine"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Fourth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <Image
                width={800}
                height={400}
                src="/about/Non-Woven-Bag-Making-Machine.webp"
                alt="Non-Woven Bag Making Machine"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Non-Woven Bag Making Machine Manufacturers & Supplier in India
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                SBS Machinery is renowned for its advanced Non-Woven Bag Making
                Machines, designed for efficiency and reliability. As one of the
                leading Non-Woven Bag Making Machine Manufacturers in India, we
                provide solutions that help businesses meet growing demand for
                eco-friendly bags while maintaining quality and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl text-center font-bold mb-7">
          Non-Woven Bag Making Machine Manufacturers & Supplier in India
        </h2>

        <p className="text-2xl text-center ">
          SBS Machinery offers advanced Offset Bag Printing Machines, ideal for
          high-quality printing on paper and non-woven bags. As one of the
          leading Offset Bag Printing Machine Manufacturers in India, we provide
          machines that guarantee superior print quality, high-speed production,
          and long-lasting performance. Our machines are engineered to meet the
          evolving demands of the printing and packaging industry.
        </p>
      </section>

      {/* mission vision section */}

      <section
        style={{ backgroundImage: "url('/about/missionbg.webp')" }}
        className="py-16 px-10"
      >
        <div className="grid grid-cols-1   md:grid-cols-2 gap-8 items-center">
          {/* left Side */}
          <div className="flex justify-center">
            <Image
              width={800}
              height={400}
              src="/about/New-Project-22.webp"
              alt="ourmission"
              className="border-10 border-white rounded-lg"
            />
          </div>

          {/* Right Side -  */}
          <div>
            <h2 className="text-7xl text-[#1B67B8] font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed">
              At SBS Machinery Pvt. Ltd., our mission is to provide innovative,
              reliable, and high-performance machinery solutions that empower
              industries to achieve their operational goals. We are committed to
              delivering exceptional quality, efficiency, and customer
              satisfaction through continuous technological advancements and
              unparalleled service. By fostering a culture of excellence and
              sustainability, we aim to be a trusted partner in driving
              industrial progress.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10 md:mt-35 md:grid-cols-2 gap-8 items-center">
          {/* left Side */}
          <div>
            <h2 className="text-7xl text-[#1B67B8]  font-bold mt-5 mb-4">
              Our Vision
            </h2>
            <p className="text-xl leading-relaxed">
              Our vision is to become a global leader in machinery Manufacturer
              and Importer by setting benchmarks for quality, innovation, and
              customer-centric solutions. We aspire to revolutionize industrial
              processes by integrating cutting-edge technology with sustainable
              practices, contributing to a future where businesses operate with
              maximum productivity and minimal environmental impact. Through
              strong partnerships and a relentless pursuit of excellence, we
              envision SBS Machinery Pvt. Ltd. as a symbol of reliability and
              innovation in the machinery industry.
            </p>
          </div>

          {/* Right Side -  */}

          <div className="flex justify-center">
            <Image
              width={800}
              height={400}
              src="/about/360_F_137907818_LNzsqtQT7OAZ98BuA3T4TKiEbEOY543G.webp"
              alt="ourvision"
              className="border-10 border-white rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-9 py-12 bg-white">
        {items.map((item, i) => (
          <div key={i} className="bg-gray-100 p-12 text-center shadow-sm">
            <div className="flex justify-center  mb-4">{item.icon}</div>
            <h3 className=" font-semibold text-3xl mb-4">{item.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
