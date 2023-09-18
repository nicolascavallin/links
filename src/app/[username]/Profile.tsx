type Props = {
  username: string;
  name: string;
  imageUrl: string;
};

export default function ProfileComponent({ username, name, imageUrl }: Props) {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full w-32 h-32 mb-3"
        />
        <h1 className="text-white text-2xl">{name}</h1>
        <h2 className="text-gray-400">@{username}</h2>
      </div>
    </div>
  );
}
