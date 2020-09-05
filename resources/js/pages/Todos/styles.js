import styled, {css} from 'styled-components';

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e3e3e3;
    transition: color 0.2s;

    &:hover {
      color: #a8a8b3;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const UserInfo = styled.section`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  background: #21222C;
  z-index: 10000;

  header {
    display: flex;
    align-items: center;
    padding: 0px 20px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #ffffff;
      }

      p {
        font-size: 18px;
        color: #e0e0e0;
        margin-top: 4px;
      }
    }
  }
`;

export const TodosContainer = styled.div`
    margin-top: 20px;
    display: flex;
    height: 100%;

    .drag-hover{
        background: #2c2d3b;
        height: 100vw;
    }


    > div {
        width: 50%;
        padding: 0px 20px;
        height: 100vw;

        h2 {
            font-size: 20px;
            color: #fff;
        }

        & + div {
            border-left: 1px solid rgba(255,255,255,0.1)
        }
    }
`;

export const Card = styled.div`
    background: #2c2e43;
    border: 1px solid #bdc50c;
    border-radius: 5px;
    padding: 15px;
    transition: transform 0.2s;
    cursor: grab;

    &:hover {
        transform: translateX(5px);
    }

    p {
        color: #fff;
        margin-top: 0;
        margin-bottom: 0;
    }

    & + div {
        margin-top: 10px;
    }

    ${({ completed }) =>
      completed &&
      css`
        border: 1px solid #3dc50c
      `}
`;  