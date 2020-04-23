import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/Input";
import Todo from "../components/Todo";
import { TodosContext, TodosDispatchContext } from "../providers/TodosContext";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { todosActions } from "../reducers/todosReducer";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form: {
    display: "block",
  },
}));

export default function Todos() {
  const classes = useStyles();
  const todos = useContext(TodosContext);

  const dispatch = useContext(TodosDispatchContext);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoText.length > 0) {
      dispatch({ type: todosActions.ADD_TODO, payload: todoText });
      setTodoText("");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Enter Todo</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={todoText}
              onChange={handleChange}
              label="Name"
            />
          </FormControl>

          <Button
            // fullWidth
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Add Todo
          </Button>
        </form>

        <List className={classes.root}>
          {todos.map((todo) => {
            const labelId = `checkbox-list-label-${todo.id}`;

            return <Todo key={todo.id} labelId={labelId} item={todo} />;
          })}

          {todos.length == 0 && (
            <p style={{ textAlign: "center" }}>No Todos found!</p>
          )}
        </List>
      </div>
    </Container>
  );
}
