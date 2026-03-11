import Image from "next/image";
import Link from "next/link";
import { BiSolidRectangle } from "react-icons/bi";

export default function SplashPage() {
  return (
    <div>
      <main className="relative min-h-screen overflow-hidden">
        <Image
          src="/splash.jpg"
          alt="Splash background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-screen flex-col items-start justify-end gap-6 text-left pb-12">
          <div className="px-10">
            <p className="text-6xl font-bold text-yellow-400">Believe</p>
            <p className="text-6xl font-bold text-yellow-400">Fitness</p>
          </div>
          <div className="flex items-center gap-7">
            <BiSolidRectangle className="text-white inline-block scale-x-[3] scale-y-[0.25]" />
            <p className="text-white text-2xl font-bold"> Train like a pro</p>
          </div>
          <Link
            href="/home"
            className="uppercase mt-5 mx-auto font-bold bg-primary text-black px-6 py-3 rounded-full">Start training</Link>
        </div>
      </main>
    </div>
  );
}
