import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      width: 240,
      textAlign: "center",
      "&:hover": {
        // backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
      "&$selected": {
        // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
    },
    selected: {},
    listIcon: {
      minWidth: "auto",
      paddingRight: theme.spacing(2),
    },
    icon: {
      color: theme.palette.text.primary,
    },
  })
);


const MenuItem = ({
  route,
  literal,
  selected,
  onClickItem,
}) => {
  const classes = useStyles();

  const link = (
    <ListItem
      button
      selected={selected}
      classes={{
        selected: classes.selected,
        button: classes.button,
      }}
      onClick={onClickItem}
    >
      <ListItemText primary={literal} />
    </ListItem>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default MenuItem;