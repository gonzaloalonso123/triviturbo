"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image src="/favicon.ico" alt="Logo" width={60} height={100} className="h-16" />
              <span className="text-2xl ml-2 font-bold text-[#072ac8]">TriviTurbo</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#diensten"
              className="text-gray-700 hover:text-[#1e96fc] px-3 py-2 rounded-md text-sm font-medium"
            >
              Diensten
            </Link>
            <Link
              href="#over-ons"
              className="text-gray-700 hover:text-[#1e96fc] px-3 py-2 rounded-md text-sm font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="#proces"
              className="text-gray-700 hover:text-[#1e96fc] px-3 py-2 rounded-md text-sm font-medium"
            >
              Proces
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#1e96fc] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Button className="bg-[#072ac8] hover:bg-[#1e96fc] text-white">Start Nu</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1e96fc] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="#diensten"
              className="text-gray-700 hover:text-[#1e96fc] block px-3 py-2 rounded-md text-base font-medium"
            >
              Diensten
            </Link>
            <Link
              href="#over-ons"
              className="text-gray-700 hover:text-[#1e96fc] block px-3 py-2 rounded-md text-base font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="#proces"
              className="text-gray-700 hover:text-[#1e96fc] block px-3 py-2 rounded-md text-base font-medium"
            >
              Proces
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#1e96fc] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Button className="w-full bg-[#072ac8] hover:bg-[#1e96fc] text-white mt-2">Start Nu</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
