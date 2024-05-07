import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
function Card_real() {
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
        <p>Este wn siempre ha valido pico ahora se pegó un bune salto</p>
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
