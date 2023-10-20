import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: grey;
  margin-top: 10px;
  border-radius: 10px;
  gap: 10px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;
