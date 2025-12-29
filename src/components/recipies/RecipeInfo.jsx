import { Difficulty } from "./Difficulty.jsx";
import {
  Item,
  Img,
  Name,
  AllInformation,
  InformationText,
} from "../recipies/Recipes.styled.js";
import { LuAlarmClock } from "react-icons/lu";
import { CgTimelapse } from "react-icons/cg";
import { MdOutlineBarChart } from "react-icons/md";
export const RecipeInfoFunction = ({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
}) => {
  return (
    <Item>
      <Img width="300px" src={image} alt={name} />
      <Name>{name}</Name>
      <AllInformation>
        <InformationText>
          <LuAlarmClock />
          {time} Min
        </InformationText>
        <InformationText>
          <CgTimelapse /> {servings} servings
        </InformationText>
        <InformationText>
          <MdOutlineBarChart />
          {calories} calories
        </InformationText>
      </AllInformation>
      <Difficulty value={difficulty} />
    </Item>
  );
};
export default RecipeInfoFunction;
