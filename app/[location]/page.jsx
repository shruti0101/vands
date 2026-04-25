import { serviceLocations } from "@/Data";
import { notFound } from "next/navigation";
import Location from "./Location";

export async function generateMetadata({ params }) {
    const { location } = await params;

    const rawCity = location.split("in-").pop();

    const cityName = rawCity.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

    return {
        title: `Airless Painting Machine Manufacturer in ${cityName} | Vands Engineering Solutions`,
        description: `Vands Engineering Solutions is a trusted Airless Painting Machine Manufacturer in ${cityName} offering high-performance, durable, and cost-effective industrial painting machines for construction, automotive, and manufacturing industries.`,
    };
}

const Page = async ({ params }) => {
    const { location } = await params;
    const validCity = serviceLocations.find(
        (c) => c.href.replace("/", "") === location
    );

    if (!validCity) {
        notFound();
    }

    return <Location location={location} />;
};

export default Page;
