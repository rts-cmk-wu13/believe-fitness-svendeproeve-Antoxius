export async function getAllActivities () {
    const res = await fetch("http://localhost:4000/api/v1/classes");
    if (!res.ok) {
        throw new Error("Failed to fetch classes");
    }
    return res.json();
}

export async function getActivityById (id) {
    const res = await fetch(`http://localhost:4000/api/v1/classes/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch class with id ${id}`);
    }
    return res.json()
};