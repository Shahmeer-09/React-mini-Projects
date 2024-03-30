import styled from "styled-components";
export const Stylefooter = styled.footer`
  background-color: ${({ theme }) => theme.color.footer};
  color: #fff;
  padding: 100px 60px;
  & ul {
    list-style-type: none;
    & li {
      margin-bottom: 20px;
    }
  }
  & p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    & ul {
      padding: 0;
    }
    & p {
      text-align: center;
    }
  }
`;
