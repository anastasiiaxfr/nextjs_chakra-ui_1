import Link from "next/link";
import Img from "@/assets/img/logo.svg";

export default function Header({ height = 50 }: any) {
    return (
        <Link href="/">
            <Img alt="logo" src={Img} height={height} />
        </Link>
    );
}
