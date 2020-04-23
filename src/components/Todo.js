import React, { useContext, memo } from "react";
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
import { TodosDispatchContext } from "../providers/TodosContext";
import { todosActions } from "../reducers/todosReducer";

export default memo(({ item, labelId }) => {
  const dispatch = useContext(TodosDispatchContext);
  return (
    <>
      <ListItem role={undefined} dense button>
        <ListItemIcon></ListItemIcon>
        <ListItemText id={labelId} primary={item.text} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() =>
              dispatch({ type: todosActions.DELETE_TODO, payload: item })
            }
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
});
