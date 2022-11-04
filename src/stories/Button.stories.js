import { Button } from "../components/Button";
import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Button />;
});
