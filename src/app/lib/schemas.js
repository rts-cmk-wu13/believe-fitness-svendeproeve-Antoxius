import { z } from "zod";


export const loginSchema = z.object({
    username: z.string().min(1, "Indtast dit brugernavn"),
    password: z.string().min(4, "Adgangskoden skal være mindst 4 tegn lang")
});

export const contactSchema = z.object({
    name: z.string().min(1, "Indtast dit navn"),
    email: z.string().email("Indtast en gyldig email adresse"),
    message: z.string().min(1, "Skriv en besked")
})