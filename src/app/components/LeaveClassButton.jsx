"use client";

import { useRouter } from "next/navigation";
import { leaveClass } from "@/app/lib/actions";

export default function LeaveClassButton({ classId, className }) {
	const router = useRouter();

	const handleLeave = async () => {
		await leaveClass(classId);
		router.refresh();
	};

	return (
		<button type="button" onClick={handleLeave} className={className}>
			Leave
		</button>
	);
}
