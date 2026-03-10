"use client";

import { useState } from "react";
import { z } from "zod";

//    Laver validerings-regel til email.
//    `safeParse` fortæller mig om det ligner en rigtig email.
const emailSchema = z.string().trim().email();

export default function Newsletter(){
    // URL til API (ligger i .env.local)
    const newsletterUrl = process.env.NEXT_PUBLIC_NEWSLETTER_URL;

    // State: hvad brugeren skriver + besked + om vi er i gang
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    async function onSubmit(event) {
        // Så siden ikke reloader når man trykker submit.
        event.preventDefault();


        // Tjekker om email er gyldig, før API kald.
        const parsed = emailSchema.safeParse(email);
        if (!parsed.success) {
            setMessage("Please enter a valid email.");
            return;
        }

        // låser formen mens vi sender så man ikke kan klikke 100 gange.
        setIsSubmitting(true);
        setMessage("");

        // (Tjekker om input er en email.)
        await fetch(newsletterUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: parsed.data }),
        }).catch(() => {});

        // Åbner formen igen
        setIsSubmitting(false);

        // Viser besked (og rydder input)
        setEmail("");
        setMessage("Thank you for signing up for our newsletter!");
    }

    return(
        <div className="mx-5  my-8" >
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold">Sign up for our newsletter</h2>
                    <p className="py-2">Sign up to receive the latest news and announcements from Believe Fitness</p>
                    <form className="flex justify-between gap-6" onSubmit={onSubmit} noValidate>
                        <label htmlFor="newsletter-email" className="sr-only">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="newsletter-email"
                            id="newsletter-email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="border-2 w-full text-black rounded-full bg-white p-2 px-5"
                            aria-label="Email"
                            disabled={isSubmitting}
                        />
                        <button
                            type="submit"
                            className="text-[#0E1A2B] bg-yellow-400 px-2 py-1 rounded-full uppercase font-bold "
                            disabled={isSubmitting}
                        >
                            <span className="flex mx-auto align-center justify-center w-20 uppercase gap-2">
                                Sign Up
                            </span>
                        </button>
                    </form>

                    {/* Jeg bruger samme felt til både success og error beskeder. */}
                    {message && <p className="mt-2 text-red-500">{message}</p>}
            </div>
        </div>
    )
}