"use client"

import { useState } from "react"

export default function CreateActivity () {

    const [name, setName] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [message, setMessage] = useState("")

    const [isNameFocused, setIsNameFocused] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isMessageFocused, setIsMessageFocused] = useState(false)

    const formState = { errors: undefined }

return (
    <div className="p-5">
        <h1 className="text-white text-3xl text-bold mb-4">Opret hold</h1>
        <form action="" onSubmit={(event) => event.preventDefault()}>
            <div className="relative">
                <input
                    className="w-full bg-gray-200 px-3 py-4"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
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
                    className="w-full bg-gray-200 px-3 py-4"
                    type="email"
                    id="email"
                    name="email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
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
                    className="w-full bg-gray-200 px-3 py-4"
                    id="message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onFocus={() => setIsMessageFocused(true)}
                    onBlur={() => setIsMessageFocused(false)}
                />
                <label
                    htmlFor="message"
                    className={`pointer-events-none absolute left-3 top-4 text-base transition-none ${(isMessageFocused || message.trim() !== "") ? "opacity-0" : "opacity-70"}`}
                >
                    Besked
                </label>
                {formState.errors?.message?.[0] && <p className="text-red-500">{formState.errors.message[0]}</p>}
            </div>
            <button type="submit" className="bg-gray-300 mx-auto px-15 py-3 text-lg rounded-xl">Send besked</button>
        </form>
    </div>
)
}