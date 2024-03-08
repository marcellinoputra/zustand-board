import { Grid } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useStore from "@/store/store";

export default function TodoAdd() {
  const store = useStore((state) => state);

  return (
    <>
      <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
        <Input
          value={store.newTodo}
          onChange={(evt) => store.setNewTodo(evt.target.value)}
          placeholder="New todo"
        />
        <Button onClick={() => store.addTodo()}>Add Todo</Button>
      </Grid>
    </>
  );
}
