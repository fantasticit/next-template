import type { NextPage } from "next";
import Router from "next/router";
import { Button, Input } from "antd";
import styles from "./index.module.scss";
import { useCallback, useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const go = useCallback(() => {
    if (!name) return;

    Router.push({ pathname: `/${name}` });
  }, [name]);

  return (
    <div className={styles.container}>
      <h1>Next.js Template</h1>
      <div style={{ margin: "16px 0" }}>
        <Input
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button disabled={!name} onClick={go}>
        Go
      </Button>
    </div>
  );
};

export default Home;
