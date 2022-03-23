import type { NextPage } from "next";
import Router from "next/router";
import { useCallback } from "react";
import { Button } from "antd";
import styles from "../index.module.scss";

interface IProps {
  name: string;
}

const Page: NextPage<IProps> = ({ name }) => {
  const goBack = useCallback(() => {
    Router.back();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hi, {name}!</h1>
      <Button onClick={goBack}>Back</Button>
    </div>
  );
};

Page.getInitialProps = async (ctx) => {
  const { name } = ctx.query;
  return { name } as IProps;
};

export default Page;
