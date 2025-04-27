import type React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Bedankt voor je aanvraag | Trivi-Turbo",
  description:
    "We gaan voor je aan de slag en sturen je binnen 24 uur een ontwerp voor je zangpraktijk.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#072ac8]/10 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-[#072ac8]" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Bedankt voor je aanvraag!
        </h1>

        <p className="text-gray-600 mb-8">
          We gaan voor je aan de slag en sturen je binnen 24 uur een ontwerp.
          Tot snel!
        </p>

        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
              <CheckIcon className="h-4 w-4 text-[#072ac8]" />
            </div>
            <span className="ml-3 text-gray-700">
              Check je inbox (en spam folder) binnen 24 uur
            </span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
              <CheckIcon className="h-4 w-4 text-[#072ac8]" />
            </div>
            <span className="ml-3 text-gray-700">
              Je ontvangt een persoonlijk ontwerp voor jouw zangpraktijk
            </span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
              <CheckIcon className="h-4 w-4 text-[#072ac8]" />
            </div>
            <span className="ml-3 text-gray-700">
              Geheel vrijblijvend - geen verplichtingen
            </span>
          </div>
        </div>

        <Button asChild className="bg-[#072ac8] hover:bg-[#1e96fc] text-white">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar de homepage
          </Link>
        </Button>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Trivi-Turbo. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
