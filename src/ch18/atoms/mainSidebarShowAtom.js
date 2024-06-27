import { atom } from "recoil";

export const mainSidebarShowAtom = atom({
    // 상태의 key값, mainsidebarShowState는 사용할 일은 없지만 형식상 적어둠
    key: "mainSidebarShowState",
    // 상태의 value값
    default: false
});