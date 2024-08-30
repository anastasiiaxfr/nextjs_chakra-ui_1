import Link from "next/link"
import Img from "@/assets/img/logo.svg"

export default function Header() {
    return (
        <Link href="/">
            <Img alt="logo" src={Img} height="50" />
        </Link>
    )
}