"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function ProductVideos() {

  // 🔥 Helper to convert YouTube URL → embed + thumbnail
  const getVideoData = (url) => {
    const idMatch = url.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/
    )
    const id = idMatch ? idMatch[1] : ""

    return {
      embed: `https://www.youtube.com/embed/${id}`,
      thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    }
  }

  const videos = [
    {
      id: "video1",
      title: "Jaguar 5.5 LPM C-301 Power Plant PNUMATIC Airless Spray Painting Machine",
      youtube: "https://youtu.be/0bV-Guzi4F4",
    },
    {
      id: "video2",
      title: "8.1 LPM Surya 10 Electrical Airless Texture Sprayer",
      youtube: "https://youtu.be/dr7O_CeLUbs?si=yUSqC28CouSAAHMe",
    },
    {
      id: "video3",
      title: "2.3 LPM Prithvi 499EC Furniture Painting Sprayer",
      youtube: "https://youtu.be/paom1njRM2A?si=ih-CEoVxC0jvBjTE",
    },
    {
      id: "video4",
      title: "6.3 LPM Surya 9 Wall Painting Sprayer",
      youtube: "https://youtu.be/zJLRUWAh38g?si=lVm7vloRKxaXKffp",
    },
    {
      id: "video5",
      title: "2.8 LPM Prithvi 599 Infrastructure Painting Sprayer",
      youtube: "https://youtu.be/FhZk4ZTLJi0?si=43mQ11_aOW3gqm98",
    },
    {
      id: "video6",
      title: "7 LPM C 451 Corrosion Preventive Coating Machine",
      youtube: "https://youtu.be/ryluwieHUNI?si=CiX1t17uI7XC9jic",
    },
       {
      id: "video6",
      title: "7 LPM C 451 Corrosion Preventive Coating Machine",
      youtube: "https://youtu.be/H7MwuAsTeME?si=G5vsp5dnb7DbaQcm",
    },
  ].map((v) => {
    const data = getVideoData(v.youtube)
    return { ...v, url: data.embed, thumb: data.thumb }
  })

  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <section className=" py-7 md:py-20 bg-white">

      <div className="w-full mx-auto px-6 md:px-20">

        {/* Heading */}
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Product Video Showcase
          </h2>

          <p className="mt-2 text-gray-600 max-w-xl mx-auto text-lg">
            Explore real-time performance and applications of our machines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Main Video */}
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <iframe
                src={activeVideo.url}
                title="product video"
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-900">
              {activeVideo.title}
            </h3>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-6">

            {videos.slice(1).map((video, index) => {

              const isActive = activeVideo.id === video.id

              return (
                <div
                  key={index}
                  onClick={() => setActiveVideo(video)}
                  className="cursor-pointer group"
                >

                  {/* Thumbnail */}
                  <div
                    className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 
                    ${isActive ? "ring-2 ring-red-500 scale-105" : "hover:scale-105"}`}
                  >

                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg group-hover:scale-110 transition">
                        <Play className="w-5 h-5 text-black fill-black" />
                      </div>
                    </div>

                  </div>

                  {/* Title */}
                  <p className="text-xs mt-2 text-black font-medium leading-snug line-clamp-2 group-hover:text-red-600 transition">
                    {video.title}
                  </p>
                </div>
              )
            })}
<div className="col-span-3 flex justify-center mt-2">
  <a
    href="https://www.youtube.com/@vandsengg/videos"
    className="py-3 px-5 rounded-xl bg-red-500 backdrop-blur-md border border-white transition cursor-pointer"
  >
    <span className="text-md font-semibold text-white">
      Watch More →
    </span>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}