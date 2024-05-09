import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import FormsCards from "./FormsCards";
function Card_real(formData) {
  return (
    <Card
      className="max-w-[400px] mx-auto top-44"
      style={{ backgroundColor: "#666666" }}
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={100}
          radius="md"
          src="https://pousta.com/wp-content/uploads/2018/02/pirozzi.jpg"
          width={180}
        />
        <div className="flex flex-col">
          <p className="text-md">Nico pirozzi</p>
          <p className="text-small text-default-500" style={{ color: "white" }}>
            esquiador
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody style={{ height: "130px" }}>
        <p>Player stats</p>
        <ul>
          <li>velocidad: {formData.velocidad} </li>
          <li>ritmo: {formData.ritmo} </li>
          <li>tiro: {formData.pase} </li>
          <li>pase: {formData.def} </li>
          <li>def: {formData.fisico} </li>
          <li>fisico: {formData.tiro} </li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          style={{ color: "white" }}
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
export default Card_real;
