// FormsCards.js
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { useState } from "react";
import Card_real from "./Card";

export default function FormsCards() {
  const attributes = ["velocidad", "ritmo", "tiro", "pase", "def", "fisico"];
  const [formData, setFormData] = useState({
    velocidad: "",
    ritmo: "",
    tiro: "",
    pase: "",
    def: "",
    fisico: "",
  });

  const handleChange = (e, attribute) => {
    setFormData({ ...formData, [attribute]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulario enviado");
  };
  console.log("formdata".formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-4" style={{ width: "300px" }}>
        {attributes.map((att) => (
          <div
            key={att}
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
          >
            <Input
              size={att}
              type="number"
              label={att}
              value={formData[att]}
              onChange={(e) => handleChange(e, att)}
            />
          </div>
        ))}
        <Button type="submit" color="primary">
          {" "}
          Submit
        </Button>
      </div>
      <Card_real formData={formData} />
    </form>
  );
}
