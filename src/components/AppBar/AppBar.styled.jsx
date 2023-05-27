import styled from '@emotion/styled';

export const AppBarContainer = styled.div`
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: space-around;

  align-items: center;

  background-image: linear-gradient(360deg, #88bbbb, #00203e);

  border-bottom: 6px double white;

  box-shadow: 8px 0px 13px -6px rgba(0, 0, 0, 0.75);
  background-color: #b7a99f;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    padding: 15px 30px 15px 30px;
  }
`;
