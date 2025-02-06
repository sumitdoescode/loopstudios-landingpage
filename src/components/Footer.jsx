import logo from "/logo/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Loopstudios Logo" className="w-40 mb-4" />
                    <ul className="flex space-x-4">
                        {["About", "Careers", "Events", "Products", "Support"].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-4 md:mt-0 text-gray-400 text-sm">© 2025 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
