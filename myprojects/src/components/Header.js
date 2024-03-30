import { Styledheader, Logo, Nav, Image } from "./styles/Header.style";
import { Button } from "./styles/Button.styled";
import Container from "./styles/Container";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <Styledheader>
      <Container>
        <Nav>
          <Logo src="./img/logo.svg" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./img/illustration-mockups.svg" />
        </Flex>
      </Container>
    </Styledheader>
  );
}
