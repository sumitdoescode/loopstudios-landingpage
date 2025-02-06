import { useState, useEffect } from "react";
import Logo from "/logo/logo.svg";
import HamburgerIcon from "/icons/icon-hamburger.svg";
import CloseIcon from "/icons/icon-close.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Events", href: "#events" },
        { name: "Products", href: "#products" },
        { name: "Support", href: "#support" },
    ];

    return (
        <nav className="relative bg-black">
            {/* Main navbar container */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className="h-8 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <img src={isOpen ? CloseIcon : HamburgerIcon} alt={isOpen ? "Close menu" : "Open menu"} className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out`}>
                {/* Mobile menu backdrop */}
                <div className="fixed inset-0 bg-black bg-opacity-75" onClick={() => setIsOpen(false)} />

                {/* Mobile menu content */}
                <div className="relative bg-black h-full w-full">
                    <div className="flex justify-between items-center p-4">
                        {/* Logo in mobile menu */}
                        <img src={Logo} alt="Logo" className="h-8 w-auto" />
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <span className="sr-only">Close menu</span>
                            <img src={CloseIcon} alt="Close menu" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Centered navigation items */}
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-white px-3 py-3 text-2xl font-medium uppercase tracking-wide text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
