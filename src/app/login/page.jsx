import Image from "next/image";
import LoginForm from "../components/LoginForm/LoginForm";
import Link from "next/link";

export default function LoginPage () {

return (
    <>
        <div className="relative flex flex-col p-20 gap-5">
            <h1 className="text-6xl font-bold color-primary">Believe Fitness</h1>
            <div className="flex">
                <h2 className="font-bold text-2xl">Train like a pro</h2>
            </div>
        </div>
        <LoginForm />
        <div className="text-center mt-5">
            <p className="text-gray-400">Are You not yet a Believer? </p>
            <div className="flex justify-center gap-2">
                <Link href="/signup" className="text-gray-400 underline">Sign up here</Link>
                <p className="text-gray-400">to start training like a pro.</p>
            </div>
        </div>
    </>
)
}