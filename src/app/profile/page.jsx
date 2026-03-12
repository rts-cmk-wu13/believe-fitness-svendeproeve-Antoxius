import { cookies } from "next/headers";
import Link from "next/link"
import { redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";
import InstructorActivities from "@/app/components/InstructorActivities/index.jsx";
import LeaveClassButton from "@/app/components/LeaveClassButton";

export default async function ProfilePage() {

    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get("userId");
    const tokenCookie = cookieStore.get("authToken");

    // Fallback: user is not logged in
    if (!userIdCookie || !tokenCookie) {
        redirect("/login");
    }

    const userId = userIdCookie.value;
    const token = tokenCookie.value;

    console.log(userId);
    console.log(token);
    const res = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        cache: "no-store" // for at sikre at jeg altid får opdaterede data og ikke en cached version, da det er brugerens profil og den skal være opdateret
    })

    // hvis token mangler/er udløbet/ugyldigt, send brugeren til login
    if (res.status === 401 || res.status === 403) {
        redirect("/login");
    }
    
    const user = await res.json();
    // localStorage.setItem("userClasses", JSON.stringify(user.classes)) // gemmer brugerens aktiviteter i localStorage, så jeg kan bruge det på andre sider uden at skulle hente det igen
    console.log(user);

    const isInstructor = user.role === "instructor" || user.role === "admin";

return (
    <>
        <div className="mx-7">
            <div className="flex justify-between">
                <h1 className=" text-center text-2xl py-5">My Profile</h1>
            </div>
            <div className="flex items-center gap-4">
                <FaUser className="text-black text-6xl p-3 rounded-full bg-primary"/>
                <div className="flex flex-col py-3">
                    <p className="mt-2 text-2xl font-bold">{user.userFirstName} {user.userLastName}</p>
                    <p>{isInstructor ? "Instructor" : "Member"}</p>
                </div>
            </div>
            <div className="m-5">

            { isInstructor ? (
                <>
                    <Link
                        href="/create-class"
                        className="bg-background self-start text-sm rounded-full inline-block font-bold uppercase bg-primary px-6 py-3"
                    >
                        ADD CLASS
                    </Link>
                    
                    <InstructorActivities userId={user.id}/>
                </>
            ) : (
                <ul className="p-3 mt-4 border  rounded-2xl">
                    {user.classes.length > 0 ? user.classes.map(classes => (
                        <li key={classes.id} className=" rounded-xl mb-5 flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">{classes.className}</h3>
                            <p>{classes.classDay} - {classes.classTime}</p>
                            <div className="flex justify-between gap-5">
                                <button className="bg-background self-start text-sm rounded-full inline-block font-bold uppercase bg-primary px-5 py-3">
                                    <Link href={`/classes/${classes.id}`} >Show Class</Link>
                                </button>
                                <LeaveClassButton
                                    classId={classes.id}
                                    className="bg-background self-start text-sm rounded-full inline-block font-bold uppercase bg-primary px-6 py-3"
                                />

                            </div>
                        </li>
                    )) : <div>
                        <p>You are not enrolled in any classes yet. Go to the classes page to find a class that suits you!</p> 
                        <Link href="/classes" className="text-primary underline">Go to Classes</Link>
                        </div>
                    }
                </ul>
            )}
            </div>
        </div>
    </>
)
}