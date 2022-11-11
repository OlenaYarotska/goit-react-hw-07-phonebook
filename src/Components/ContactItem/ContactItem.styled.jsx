import styled from '@emotion/styled';
export const Item = styled.li`
display: flex;
flex-wrap: wrap;
`;
export const ContactName = styled.p`
  margin-right: 5px;
  margin-bottom: 10px;
  font-weight: 700;
`;
export const ContactNumber = styled.p``;

export const Button = styled.button`
  margin-left: auto;
  margin-bottom: 5px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 0.7rem;
  outline: none;
  padding: 1px 15px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    cursor: pointer;
    background-color: #cc2b2b;
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
  }
`;
