import React from "react";
import {
  GreetingContainer,
  GreetingBody,
  GreetingNameAccent,
  GreetingName,
  GreetingDeveloper,
  GreetingDeveloperUnderline
} from "./Greeting.styled.";
import { Title } from "../Title";
import { Button } from "../Button";

const Greeting = () => {
  return (
    <GreetingBody>
      <GreetingContainer>
        <Title title="Hello" size="small" />
        <GreetingName>
          I'm <GreetingNameAccent>Dmytro</GreetingNameAccent>
        </GreetingName>
        <GreetingDeveloper>
          <GreetingDeveloperUnderline>
            Frontend Developer
          </GreetingDeveloperUnderline>
        </GreetingDeveloper>
        <GreetingDeveloper>
          I can translate all your ideas into reality!
        </GreetingDeveloper>
        <Button text="Contact me" />
      </GreetingContainer>
    </GreetingBody>
  );
};

export default Greeting;
