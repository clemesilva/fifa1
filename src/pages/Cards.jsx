import FormsCards from "../components/FormsCards";
import Card_real from "../components/Card";
import { Grid } from "@nextui-org/react";

export default function Cards() {
  return (
    <>
      <Grid md={6}>
        <div className="card-container">
          <Card_real />
        </div>
      </Grid>

      <Grid md={6}>
        <div className=" card-forms">
          <FormsCards />
        </div>
      </Grid>
    </>
  );
}
