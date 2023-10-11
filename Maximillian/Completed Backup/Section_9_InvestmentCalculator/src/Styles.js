import styled from "styled-components";

export const P = styled.p`
  text-align: center;
  color: ${(props) => (props.color ? props.color : "black")};
`;
