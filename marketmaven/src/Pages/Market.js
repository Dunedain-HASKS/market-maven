import DropdownMenu from "../Components/DropDownMenu";
import { Container } from "@mui/system";

export default function Market() {
  return (
    <>
      <Container>
        <h1 style={{ marginTop: "10px" }}>Market !</h1>
        <DropdownMenu />
      </Container>
    </>
  );
}
