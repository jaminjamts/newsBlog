import Link from "next/link"

export default function BlueButton({ title, link }) {
    return <Link href={link}>
        <button className="bg-[var(--blue)] rounded-md text-[var(--background)] py-[10px] px-4 text-sm font-medium]" href={link}>{title}</button>
    </Link>
}