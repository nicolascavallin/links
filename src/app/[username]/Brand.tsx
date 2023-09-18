import Link from "next/link";

export default function BrandComponent() {
  return (
    <div className="flex flex-1 justify-center items-end mt-2 p-2 pb-4 sticky bottom-0 backdrop-blur-sm">
      <Link className="text-center font-medium text-sm" href={"#"}>
        Creado con ♥️ en Santa Fe
      </Link>
    </div>
  );
}
