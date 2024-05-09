import FormsCards from "../components/FormsCards";
import Card_real from "../components/Card";
import { Divider } from "@nextui-org/react";

export default function Cards() {
  // const [info, setInfo] = useState("");
  // handleSubmit = () => {};
  return (
    <>
      <div style={{ backgroundColor: "#333333" }}>
        <div className="card-container" style={{ marginRight: "600px" }}>
          <Card_real />
        </div>
        <Divider orientation="vertical" />

        <div
          className=" card-forms"
          style={{
            marginLeft: "900px",
            marginTop: "-190px",
            paddingBlock: "60px",
          }}
        >
          <FormsCards />
        </div>
      </div>
    </>
  );
}
