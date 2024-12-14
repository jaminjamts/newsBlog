import Link from "next/link";

export default function MainButton({ link, title }) {
    return <Link href={link}>
        <button className="text-base text-[var(--secondary)]" >{title}</button>
    </Link>
}
