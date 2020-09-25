import React from "react";
import { Link } from "react-scroll";
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
        <Button text="Contact me" size="big">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact me
          </Link>
        </Button>
      </GreetingContainer>
    </GreetingBody>
  );
};

export default Greeting;
