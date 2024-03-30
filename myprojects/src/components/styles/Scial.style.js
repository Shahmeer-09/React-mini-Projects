import styled from "styled-components";

export const Scialstyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & li {
    list-style: none;
  }
  & a {
    border: 1px solid #fff;
    border-radius: 50px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
`;
