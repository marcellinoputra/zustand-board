// import { ColorModeSwitcher } from "../color-switcher";
import useStore, { Todo } from "@/store/store";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

import { Grid } from "@chakra-ui/react";

export default function TopBar() {
  const store = useStore((state) => state);

  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      .then((tds: Todo[]) => store.setTodos(tds));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1ft" columnGap="3">
      <ModeToggle />
      {/* <ColorModeSwitcher /> */}
      <Button>Load</Button>
    </Grid>
  );
}
