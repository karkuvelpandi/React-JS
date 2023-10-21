import React from "react";
import { Container } from "../UI/Container";
import { Card } from "../UI/Card";

export const UserList = (props) => {
  return (
    <Container>
      <p>UserList</p>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Card>
              <p>{item.name + " (Age " + item.age + ")"}</p>
            </Card>
          );
        })}
    </Container>
  );
};
