import { useState } from "react";

const creations = [
    { title: "Deep Earth", img: "/images/image-deep-earth.jpg" },
    { title: "Night Arcade", img: "/images/image-night-arcade.jpg" },
    { title: "Soccer Team VR", img: "/images/image-soccer-team.jpg" },
    { title: "The Grid", img: "/images/image-grid.jpg" },
    { title: "From Up Above VR", img: "/images/image-from-above.jpg" },
    { title: "Pocket Borealis", img: "/images/image-pocket-borealis.jpg" },
    { title: "The Curiosity", img: "/images/image-curiosity.jpg" },
    { title: "Make It Fisheye", img: "/images/image-fisheye.jpg" },
];

const Creations = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Our Creations</h2>
                <button className="border-2 border-black px-6 py-2 uppercase hover:bg-black hover:text-white">See All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {creations.map((item) => (
                    <div key={item.title} className="relative group">
                        <img src={item.img} alt={item.title} className="w-full rounded-lg" />
                        <h3 className="absolute bottom-4 left-4 text-white text-xl uppercase">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Creations;
