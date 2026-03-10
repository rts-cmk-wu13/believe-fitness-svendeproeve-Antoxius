"use server";
import {z} from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { contactSchema, loginSchema } from "./schemas";

// const values = Object.fromEntries(formData)


export async function loginUser (prevState, formData) {

    const cookieStore = await cookies();
    const username = formData.get("username");
    const password = formData.get("password");

    // if (username === prevState.values.username && password === prevState.values.password) {
    //     return prevState // Ingen ændring hvis brugeren har indtastet det samme som i forrige forsøg, så returner forrige state så de ikke overloader formen med den samme fejlmeddelelse igen og igen
    // }

    // -----Login Validation start -----
    const result = loginSchema.safeParse({ username, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors);
        return {
            values: { username, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }
    // ----- Validation end -----

    // ----- Fetch start -----
    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    // ----- Fetch end -----

    // ----- error handling start -----
    if (!response.ok) {
        return {
            values: { username, password },
            errors: { form: ["Forkert brugernavn eller adgangskode"]}
            // Laver [] for at holde samme data struktur som de andre fejl (arrays), for at jeg kan håndtere det ens på frontend
        }
    }
    // ----- error handling end -----

    // console.log(response);
    
    const data = await response.json();

    cookieStore.set("authToken", data.token)
    cookieStore.set("userId", data.userId) // sætter cookie med userID, så jeg fx kan hente brugerens data på andre sider
    cookieStore.set("role", data.role) // sætter cookie med brugerens rolle, så jeg fx kan håndtere adgangskontrol

    return redirect("/profile"); // sender brugeren til forsiden efter login brug fx. redirect("/profile") hvis du vil sende dem til en profilside efter login
    
}

export async function submitContact(prevState, formData) {
    const name = (formData.get("name") ?? "").toString();
    const email = (formData.get("email") ?? "").toString();
    const message = (formData.get("message") ?? "").toString();

    const result = contactSchema.safeParse({ name, email, message });

    if (!result.success) {
        return {
            data: { name, email, message },
            success: false,
            errors: z.flattenError(result.error).fieldErrors,
        };
    }
    // Validering slut

    // API fetch start
    try {
        const response = await fetch("http://localhost:4000/api/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            return {
                data: { name, email, message },
                success: false,
                errors: { form: [`Kunne ikke sende beskeden (${response.status}).`] },
            };
        }
    } catch {
        return {
            data: { name, email, message },
            success: false,
            errors: { form: ["Kunne ikke sende beskeden. Prøv igen senere."] },
        };
    }
    // API fetch slut

    // Returnere et tomt objekt
    return {
        data: { name: "", email: "", message: "" },
        success: true,
        errors: undefined,
    };

    
}