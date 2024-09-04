import Link from "next/link";
import { getServerSession } from "next-auth";
import { authConfig } from "../_lib/auth";

export default async function Navigation() {
  const session = await getServerSession(authConfig);
  console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex gap-2 items-center hover:text-accent-400 transition-colors"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
