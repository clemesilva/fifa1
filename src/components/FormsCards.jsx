import { Input } from "@nextui-org/react";

export default function FormsCards() {
  const attributes = ["velocidad", "ritmo", "tiro", "pase", "def", "fisico"];

  return (
    <div className="w-full flex flex-col gap-4" style={{ width: "300px" }}>
      {attributes.map((att) => (
        <div
          key={att}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input size={att} type="number" label={att} />
        </div>
      ))}
    </div>
  );
}
