import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  // const [session, loading] = useSession();

  // console.log({ session, loading });

  return (
    <div className="w-[98%] md:max-w-xl mx-auto">
      <div className="flex gap-2 justify-center text-blue-400 underline">
        <Link
          href="/"
          className={`${
            router.pathname === '/' ? 'font-semibold text-blue-500' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            router.pathname.startsWith('/about')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          About
        </Link>
        <Link
          href="/profile"
          className={`${
            router.pathname.startsWith('/profile')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          Profile
        </Link>
        <Link
          href="/blogs"
          className={`${
            router.pathname.startsWith('/blogs')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/posts"
          className={`${
            router.pathname.startsWith('/posts')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          Posts
        </Link>
        <Link
          href="/dashboard"
          className={`${
            router.pathname.startsWith('/posts')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          Dashboard
        </Link>{' '}
        <p
          onClick={signIn}
          className={`cursor-pointer ${
            router.pathname.startsWith('/posts')
              ? 'font-semibold text-blue-500 '
              : ''
          }`}
        >
          SignIn
        </p>
        <p
          onClick={signOut}
          className={` cursor-pointer ${
            router.pathname.startsWith('/posts')
              ? 'font-semibold text-blue-500'
              : ''
          }`}
        >
          SignOut
        </p>
      </div>
      <main>{children}</main>
    </div>
  );
}
