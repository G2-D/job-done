import styled from 'styled-components';

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;

    header {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        background: #21222C;
        position: sticky;
        top: 0;
        z-index: 10;
        padding: 30px 0px
    }

    > p {
        color: #fff;
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #ffffff;
    max-width: 433px;
    margin-top: 40px;
    line-height: 56px;
`;

export const UsersList = styled.div`  
    margin-top: 40px;
    max-width: 714px;

    a {
        background: #2c2e43;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #ffffff;
            }

            p {
                font-size: 18px;
                color: #e0e0e0;
                margin-top: 4px;
                white-space: nowrap;
                width: 30em;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }

    }
`;