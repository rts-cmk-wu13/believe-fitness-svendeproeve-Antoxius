import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateClassForm from "../components/CreateClassForm";

export default async function CreateClassPage() {
	const cookieStore = await cookies();
	const roleCookie = cookieStore.get("role").value;


	if (!roleCookie) {
		redirect("/login");
	}

	const isAdmin = roleCookie === "admin";
	if (!isAdmin) {
		redirect("/profile");
	}

	return <CreateClassForm/>;
}
