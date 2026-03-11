"use client";

import { useRouter } from "next/navigation";
import { joinClass } from "@/app/lib/actions";

export default function JoinClassButton({ classId, className }) {
	const router = useRouter();

	const handleJoin = async () => {
		await joinClass(classId);
		router.refresh();
	};

	return (
		<button type="button" onClick={handleJoin} className={className}>
			Sign up
		</button>
	);
}
