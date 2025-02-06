const VRSection = () => {
    return (
        <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
            <img src="/images/image-interactive.jpg" alt="VR Experience" className="w-full md:w-1/2 rounded-xl" />
            <div className="md:ml-10 mt-6 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold">The Leader in Interactive VR</h2>
                <p className="mt-4 text-gray-500">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.</p>
            </div>
        </section>
    );
};

export default VRSection;
