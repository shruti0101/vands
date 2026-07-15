

// import { memo } from "react";
// import {
//   ShieldCheck,
//   Settings,
//   BadgeDollarSign,
//   Headphones,
//   Layers,
//   Award,
// } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     Icon: Award,
//     title: "11+ Years of Industry Experience",
//     desc: "With over a decade of experience, Vands Engineering Solutions has developed strong expertise in manufacturing and supplying Airless Painting Machines and surface preparation equipment. Our in-depth industry knowledge helps us understand customer requirements accurately and deliver the most suitable solutions for different industrial applications.",
//   },
//   {
//     id: 2,
//     Icon: Layers,
//     title: "Complete Range of Products Under One Roof",
//     desc: "We offer a wide range of products including Airless Painting Machines, Airless Paint Sprayers, Shot Blasting Machines, Sand Blasting Machines, and Metalizing Equipment. This allows our customers to source all their painting and surface treatment needs from a single, reliable supplier.",
//   },
//   {
//     id: 3,
//     Icon: ShieldCheck,
//     title: "High-Quality Standards and Durable Products",
//     desc: "As a trusted Airless Painting Machine Manufacturer, we ensure that all our machines are built using high-grade materials and modern technology. Each product is tested for durability, efficiency, and consistent performance to meet demanding industrial conditions.",
//   },
//   {
//     id: 4,
//     Icon: BadgeDollarSign,
//     title: "Competitive Pricing for Maximum Value",
//     desc: "Being a leading Airless Painting Machine Wholesaler, we provide cost-effective pricing that benefits contractors, dealers, and bulk buyers. Our pricing structure is designed to deliver maximum value without compromising on product quality.",
//   },
//   {
//     id: 5,
//     Icon: Headphones,
//     title: "Strong After-Sales Support and Service",
//     desc: "We believe in long-term customer relationships and provide complete after-sales support including technical assistance, product guidance, and maintenance help to ensure smooth and uninterrupted operations.",
//   },
//   {
//     id: 6,
//     Icon: Settings,
//     title: "Customized Solutions as per Requirement",
//     desc: "We understand that every project is unique, which is why we offer customized solutions tailored to specific industrial needs. Our team works closely with clients to recommend the right equipment for maximum efficiency and productivity.",
//   },
// ];

// function WhyChooseUs() {
//   return (
//     <section className="hidden overflow-hidden bg-white pb-7 lg:block lg:py-16">
//       <div className="mx-auto w-full px-6 md:px-20 xl:px-24">
//         {/* Top */}
//         <div className="mb-10 grid items-center gap-10 lg:grid-cols-2">
//           {/* Video */}
//           <div className="relative overflow-hidden rounded-3xl">
//             <video
//               className="h-[300px] w-full object-cover md:h-[580px]"
//               poster="/video-poster.webp"
//               preload="metadata"
//               muted
//               playsInline
//               controls={false}
//               autoPlay
//               loop
//             >
//               <source src="/Vands.mp4" type="video/mp4" />
//             </video>

//             <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-6 py-3 shadow-lg backdrop-blur">
//               <h4 className="text-lg font-semibold text-gray-900">
//                 11+ Years Experience
//               </h4>
//             </div>
//           </div>

//           {/* Text */}
//           <div>
//             <p className="mb-3 text-md font-semibold uppercase tracking-[0.2em] text-red-500">
//               why purchase our Paint machine
//             </p>

//             <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-5xl">
//               Your Trusted Partner for Airless Painting & Surface Preparation
//               Solutions
//             </h2>

//             <p className="mt-5 text-lg leading-relaxed text-black">
//               With over a decade of experience, Vands Engineering Solutions has
//               developed strong expertise in manufacturing and supplying Airless
//               Painting Machines and surface preparation equipment. Our in-depth
//               industry knowledge helps us understand customer requirements
//               accurately and deliver the most suitable solutions for different
//               industrial applications.
//             </p>
//           </div>
//         </div>

//         {/* Features */}
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map(({ id, Icon, title, desc }) => (
//             <div
//               key={id}
//               className="group rounded-2xl border border-black bg-red-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               <div className="mb-4 flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
//                   <Icon size={26} />
//                 </div>

//                 <h3 className="text-lg font-semibold leading-snug text-black">
//                   {title}
//                 </h3>
//               </div>

//               <p className="text-sm leading-relaxed text-black md:text-base">
//                 {desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default memo(WhyChooseUs);