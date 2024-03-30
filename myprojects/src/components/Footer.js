import Container from "./styles/Container";
import { Flex } from "./styles/Flex.styled";
import { Stylefooter } from "./styles/Footer.style";
import Scial from "./Scial";
export default function Footer() {
  return (
    <Stylefooter>
      <Container>
        <img src="./img/Logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <Scial />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </Stylefooter>
  );
}
