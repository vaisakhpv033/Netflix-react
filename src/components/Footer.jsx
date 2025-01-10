import { Languages, ChevronDown } from "lucide-react";
import { links } from "../data";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-16 px-[10%]">
            <div className="max-w-6xl mx-auto">
                {/* Contact Number */}
                <p className="mb-6 text-semibold">
                    Questions? Call <span className="underline">000-800-919-1694</span>
                </p>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {links.map((column, i) => (
                        <ul key={i}>
                            {column.map((link, j) => (
                                <li key={j} className="mb-3">
                                    <a
                                        href="#"
                                        className="hover:underline text-sm text-semibold underline"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                {/* Language Selector */}
                <div className="relative inline-block">
                    <Languages className="absolute left-2 top-2.5 h-4 w-4" />
                    <select className="bg-transparent border rounded px-8 py-1.5 text-sm appearance-none text-white custom-select">
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-white" />
                </div>

                {/* Copyright */}
                <p className="mt-6 text-sm">Netflix India</p>
            </div>
        </footer>
    );
}
