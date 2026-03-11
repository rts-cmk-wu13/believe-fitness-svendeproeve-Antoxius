import Image from "next/image";
import LoginButton from "./LoginButton";

export default function Hero () {

return (
    <>
        <div className="relative w-full h-[40vh]">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/welcome.jpg"
                    alt="Hero Image"
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-black/40" aria-hidden="true" />

            <h1 className="absolute z-10 w-60 ml-10 inset-0 flex items-center justify-center text-3xl font-bold text-yellow-400">Welcome to Believe Fitness</h1>

            <div className="ml-10 relative z-10 flex h-full items-end pb-8">
                <LoginButton />
            </div>
        </div>
    </>

)
}
