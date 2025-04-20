import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-[#072ac8] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Pagina Niet Gevonden</h2>
      <p className="text-gray-600 max-w-md mb-8">De pagina die u probeert te bezoeken bestaat niet of is verplaatst.</p>
      <Link href="/">
        <Button className="bg-[#072ac8] hover:bg-[#1e96fc]">Terug naar Home</Button>
      </Link>
    </div>
  )
}
