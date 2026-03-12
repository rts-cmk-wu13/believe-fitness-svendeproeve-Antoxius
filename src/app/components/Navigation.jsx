"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import LogoutButton from "./logoutButton/LogoutButton";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);

	useEffect(() => {
		if (isOpen) {
			const previousOverflow = document.body.style.overflow;
			document.body.style.overflow = "hidden";

			return () => {
				document.body.style.overflow = previousOverflow;
			};
		}
	}, [isOpen]);

	const menuButton = (
		<button
			type="button"
			onClick={openMenu}
			className="absolute top-6 right-6 z-40 text-3xl p-3 text-gray-500"
		>
			<HiMenuAlt3 />
		</button>
	);

	const menuOverlay = (
		<div className="fixed inset-0 z-50 bg-background text-foreground">
			<div className="flex h-full flex-col">
				<div className="flex items-center justify-end p-6">
					<button
						type="button"
						onClick={closeMenu}
						className="text-5xl font-bold text-gray-500"
					>
						<IoIosClose />
					</button>
				</div>

				<nav className="flex flex-1 flex-col items-center justify-center gap-6">
					<Link href="/home" onClick={closeMenu}>
						Home
					</Link>
					<Link href="/classes" onClick={closeMenu}>
						Classes
					</Link>
					<Link href="/search" onClick={closeMenu}>
						Search
					</Link>
					<Link href="/profile" onClick={closeMenu}>
						My Profile
					</Link>
					<LogoutButton onClick={closeMenu} />
				</nav>
			</div>
		</div>
	);

	if (isOpen) {
		return menuOverlay;
	} else {
		return menuButton;
	}
}