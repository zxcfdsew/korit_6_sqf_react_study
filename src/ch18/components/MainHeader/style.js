import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    height: 70px;
`;

export const headerBody = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const menuToggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;