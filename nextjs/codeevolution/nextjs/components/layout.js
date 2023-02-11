import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="w-[98%] md:max-w-xl mx-auto">
      <div className="flex gap-2 justify-center text-blue-400 underline">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/posts">Posts</Link>
      </div>
      <main>{children}</main>
    </div>
  );
}
