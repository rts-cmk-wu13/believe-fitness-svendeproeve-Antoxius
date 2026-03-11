"use client";
import { submitContact } from "@/app/lib/actions";
import { useActionState, useEffect, useState } from "react";

export default function ContactForm () {
    const initialState = {
        data: {
            name: "",
            email: "",
            message: "",
        },
        success: false,
        errors: undefined,
    }
    const [formState, formAction, isPending] = useActionState (submitContact, initialState)

    const [name, setName] = useState(formState?.data?.name ?? "")
    const [emailValue, setEmailValue] = useState(formState?.data?.email ?? "")
    const [message, setMessage] = useState(formState?.data?.message ?? "")

    const [isNameFocused, setIsNameFocused] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isMessageFocused, setIsMessageFocused] = useState(false)

    useEffect(() => {
        setName(formState?.data?.name ?? "")
        setEmailValue(formState?.data?.email ?? "")
        setMessage(formState?.data?.message ?? "")
    }, [formState])

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])

    return (
        <>
        <div className="container mx-auto py-8">
        <h2 className="text-3xl mx-4 font-bold">Contact us</h2>
        <p className="mx-4">Ask us anything about Believe Fitness!</p>
        <form action={formAction} className="mx-4 my-8 flex flex-col gap-4">
            <div className="relative">
                <input
                    className="w-full border rounded-full border-gray-400 px-3 py-4"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label
                    htmlFor="name"
                    className={`pointer-events-none absolute left-3 top-4 text-base transition-none ${(isNameFocused || name.trim() !== "") ? "opacity-0" : "opacity-70"}`}
                >
                    Navn
                </label>
                {formState.errors?.name?.[0] && <p className="text-red-500">{formState.errors.name[0]}</p>}
            </div>

            <div className="relative">
                <input
                    className="w-full border rounded-full border-gray-400 px-3 py-4"
                    type="email"
                    id="email"
                    name="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <label
                    htmlFor="email"
                    className={`pointer-events-none absolute left-3 top-4 text-base transition-none ${(isEmailFocused || emailValue.trim() !== "") ? "opacity-0" : "opacity-70"}`}
                >
                    Email
                </label>
                {formState.errors?.email?.[0] && <p className="text-red-500">{formState.errors.email[0]}</p>}
            </div>

            <div className="relative">
                <textarea
                    className="w-full border rounded-2xl border-gray-400 px-3 py-4"
                    id="message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <label
                    htmlFor="message"
                    className={`pointer-events-none absolute left-3 top-4 text-base transition-none ${(isMessageFocused || message.trim() !== "") ? "opacity-0" : "opacity-70"}`}
                >
                    Besked
                </label>
                {formState.errors?.message?.[0] && <p className="text-red-500">{formState.errors.message[0]}</p>}
            </div>
            <button type="submit" className="bg-yellow-400 mx-auto px-15 py-3 uppercase font-bold text-lg rounded-full w-full">Send message</button>
        </form>
        </div>
        </>
    )
        
    }