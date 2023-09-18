import { redirect } from "next/navigation";

type PageProps = {
  searchParams: { username: string | undefined };
};

async function isUsernameAvailable(username: string): Promise<boolean> {
  if (username === "nico") {
    return false;
  }

  return true;
}

export default async function Page({ searchParams: { username } }: PageProps) {
  if (!username) {
    redirect("/");
  }

  if (!(await isUsernameAvailable(username))) {
    redirect(`/${username}`);
  }

  return <h1>NEW</h1>;
}
