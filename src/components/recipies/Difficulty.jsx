import { Div, Title, Button } from "./Difficulty.styled";

export const Difficulty = ({ value }) => {
  return (
    <Div>
      <Title>Difficulty</Title>
      <Button active={value === 0}>Easy</Button>
      <Button active={value === 1}>Medium</Button>
      <Button active={value === 2}>Hard</Button>
    </Div>
  );
};
