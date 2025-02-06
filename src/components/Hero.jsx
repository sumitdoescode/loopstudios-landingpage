const Hero = () => {
    return (
        <section className="relative h-[60vh] bg-[url('/images/image-hero.jpg')] bg-cover bg-center flex items-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="border-4 border-white text-white text-4xl md:text-6xl uppercase p-6 w-2/3">Immersive Experiences That Deliver</h1>
            </div>
        </section>
    );
};

export default Hero;
