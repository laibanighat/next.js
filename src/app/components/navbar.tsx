import Link from "next/link";

export default function Navbar() {
  return (
    <div  className="text-white border-4 border-black bg-yellow-600">
      <nav className="flex justify-around font-semibold gap-0">
        <Link href="/">Home</Link>
        <br/>
      <Link href="/about">About</Link>
      <br/>
      <Link href="/Jobs">Jobs</Link>
      <br/>
      <Link href="/Jobs/Programming">Programming</Link>
      <br/>
      <Link href="/contact">contact</Link>
      </nav>
    </div>
  );
}
      