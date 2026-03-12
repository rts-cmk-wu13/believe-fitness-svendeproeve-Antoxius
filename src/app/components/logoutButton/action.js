"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("authToken")
    cookieStore.delete("userId")
    cookieStore.delete("role")
    // delete funktionen sletter value i cookien og max-age bliver sat til 0, så cookien dør af sig selv.
    
    return redirect("/");
}

export async function isUserLoggedIn() {
    const cookieStore = await cookies();
    return cookieStore.has("authToken");
}