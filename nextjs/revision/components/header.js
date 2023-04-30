import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 text-center text-white backdrop-opacity-10 backdrop-blur bg-gray-900/90 sticky top-0 z-40 flex justify-center items-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
      <Link href="/dashboard">Dashboard</Link>
    </header>
  );
}
