import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Scialstyle } from "./styles/Scial.style";
export default function Scial() {
  return (
    <Scialstyle>
      <li>
        <a href="https://facebook.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </Scialstyle>
  );
}
