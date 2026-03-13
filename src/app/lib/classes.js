"use server";
import { cookies } from "next/headers";

export async function getAllClasses () {
    const res = await fetch("http://localhost:4000/api/v1/classes");
    if (!res.ok) {
        throw new Error("Failed to fetch classes");
    }
    return res.json();
}

export async function getClassById (id) {
    const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch class with id ${id}`);
    }
    return res.json()
};

export async function createClass (prevState, formData) {

    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("authToken");

    const trainerId = Number(formData.get("trainerId"))
    console.log("trainerId:", typeof trainerId);
    formData.set("trainerId", trainerId);
    
    // Valider

    const assetResponse = await fetch("http://localhost:4000/api/v1/assets", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${tokenCookie.value}`,
        },
        body: formData
    });

    const assetData = await assetResponse.json();
    formData.append("assetId", assetData.id);

    const res = await fetch("http://localhost:4000/api/v1/classes", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${tokenCookie.value}`,
        },
        body: formData,
    })


}
