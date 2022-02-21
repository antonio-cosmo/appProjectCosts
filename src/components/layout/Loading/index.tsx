import loading from "../../../img/loading.svg";

import {Container} from "./styles";

export function Loading() {
  return (
    <Container>
      <img src={loading} alt="Loading" />
    </Container>
  );
}