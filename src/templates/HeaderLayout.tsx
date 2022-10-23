import { memo, ReactNode, VFC } from "react";
import { Header } from "../components/organism/layout/Header";

type Props = {
  //tagで囲った要素を受け取る
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((propss) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
