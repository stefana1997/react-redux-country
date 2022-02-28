import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
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

const SubMenuItem = ({
  route,
  literal,
  Icon,
  selected,
  onClick,
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
      onClick={onClick}
    >
      <ListItemText primary={literal} />
    </ListItem>
  );
  return route ? <Link to={route}>{link}</Link> : link;
};

export default SubMenuItem;