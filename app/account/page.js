import { getServerSession } from "next-auth";
import { authConfig } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await getServerSession(authConfig);
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome <span className="capitalize">{firstName}</span>
    </h2>
  );
}
