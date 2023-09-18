import ProfileComponent from "./Profile";
import BrandComponent from "./Brand";
import LinksComponent from "./Links";
import { Link as LinkType } from "./types";
import { redirect } from "next/navigation";

type PageProps = {
  params: {
    username: string;
  };
};

type UserData = {
  user: {
    username: string;
    name: string;
    image_url: string;
  };
  links: LinkType[];
};

async function getUserData(username: string): Promise<UserData | null> {
  const data = await new Promise((resolve) => {
    if (username !== "nico") {
      resolve(null);
    }

    resolve({
      user: {
        username: "nicolascavallin",
        name: "Nico",
        image_url: "https://thispersondoesnotexist.com/",
      },
      links: [
        {
          id: "1",
          title: "Twitter",
          url: "https://twitter.com/nicolascavallin",
        },
        {
          id: "2",
          title: "GitHub",
          url: "https://github.com/nicolascavallin",
        },
        {
          id: "3",
          title: "LinkedIn",
          url: "https://linkedin.com/in/nicolascavallin",
        },
      ],
    });
  });

  return data as UserData | null;
}

export default async function Page({ params: { username } }: PageProps) {
  const data = await getUserData(username);

  if (!data) {
    redirect(`/new?username=${username}`);
  }

  return (
    <div className="flex flex-col w-full max-w-screen-md p-4 pb-0 min-w-[375px]">
      <ProfileComponent
        name={data.user.name}
        username={data.user.username}
        imageUrl={data.user.image_url}
      />
      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
      <LinksComponent links={data.links} />
      <BrandComponent />
    </div>
  );
}
