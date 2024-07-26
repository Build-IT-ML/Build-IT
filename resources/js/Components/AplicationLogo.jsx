import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route('Welcome')} className="cursor-pointer">
            <img src="../asset/images/navbar-logo.png" alt="logo Build-IT 2024" className="w-36" />
        </Link>
    );
}
