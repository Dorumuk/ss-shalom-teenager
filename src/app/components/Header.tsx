import Link from "next/link";
import SignInBtn from "./SignInBtn";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2">
      <Link href="/">
        <h1 className="text-3xl font-bold">Shalom</h1>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link className="px-2" href="#">
          Posts
        </Link>
        <Link className="px-2" href="/lunch_menu">
          Lunch Menu
        </Link>
        <SignInBtn />
      </nav>
    </header>
  );
}
