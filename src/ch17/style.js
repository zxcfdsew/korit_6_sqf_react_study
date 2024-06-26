import { css } from "@emotion/react";

export const container1 = (width, height) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    border: 1px solid #dbdbdb;
    width: ${width};
    height: ${height};
`;

export const container2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 350px;
    height: 350px;
`;

export const container3 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 200px;
`;

export const button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 80px;
    height: 35px;
    border-radius: 5px;
`;