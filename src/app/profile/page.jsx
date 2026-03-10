import { cookies } from "next/headers";
import Link from "next/link"
import { FaUser } from "react-icons/fa";
// import Navigation from "../components/Navigation";
import InstructorActivities from "@/app/components/InstructorActivities/index.jsx";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId").value;
    const token = cookieStore.get("authToken").value;

    console.log(userId);
    console.log(token);
    const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        cache: "no-store" // for at sikre at jeg altid får opdaterede data og ikke en cached version, da det er brugerens profil og den skal være opdateret
    })
    
    const user = await res.json();
    // localStorage.setItem("userClasses", JSON.stringify(user.classes)) // gemmer brugerens aktiviteter i localStorage, så jeg kan bruge det på andre sider uden at skulle hente det igen
    console.log(user);

return (
    <>
        <div className="mx-7">
            <div className="flex justify-between">
                <h1 className=" text-center text-2xl py-5">My Profile</h1>
                <button>Knap</button>
            </div>
            <div className="flex items-center gap-4">
                <FaUser className="text-black text-6xl p-3 rounded-full bg-primary"/>
                <div className="flex flex-col py-3">
                    <p className="mt-2 text-2xl font-bold">{user.userFirstName} {user.userLastName}</p>
                    <p>{user.role == "instructor" ? "Instructor" : "Member"}</p>
                </div>
            </div>
            <div className="m-5">

            { user.role === "admin" ? (
                <>
                    <p className="">You are an instructor, and therefore have no enrolled classes.</p>
                    <InstructorActivities userId={user.id}/>
                </>
            ) : (
                <ul className="p-3 mt-4 border  rounded-2xl">
                    {user.classes.map(classes => (
                        <li key={classes.id} className=" rounded-xl mb-5 flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">{classes.className}</h3>
                            <p>{classes.classDay} - {classes.classTime}</p>
                            <div className="flex justify-between gap-5">
                                <button className="bg-background self-start text-sm rounded-full inline-block font-bold uppercase bg-primary px-5 py-3">
                                    <Link href={`/activities/${classes.id}`} >Show Class</Link>
                                </button>
                                <button className="bg-background self-start text-sm rounded-full inline-block font-bold uppercase bg-primary px-6 py-3">Leave</button>

                            </div>
                        </li>
                    ))}
                </ul>
            )}
            </div>

        </div>
        {/* <Navigation /> */}
    </>
)
}