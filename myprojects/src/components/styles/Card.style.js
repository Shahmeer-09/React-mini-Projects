import styled from "styled-components";

export const Stylecard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.body};
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  margin: 40px 0;
  flex-direction: ${({ layout }) => layout || "row"};

  & img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
