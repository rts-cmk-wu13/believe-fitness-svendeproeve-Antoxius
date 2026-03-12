import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateActivity from "../components/CreateActivity";

export default async function CreateClassPage() {
	const cookieStore = await cookies();
	const roleCookie = cookieStore.get("role");

	if (!roleCookie) {
		redirect("/login");
	}

	const role = roleCookie.value;
	const isInstructor = role === "instructor" || role === "admin";
	if (!isInstructor) {
		redirect("/profile");
	}

	return <CreateActivity />;
}
