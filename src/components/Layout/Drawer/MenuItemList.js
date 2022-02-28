import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "./MenuItem";

const useStyles = makeStyles(() => ({
  padding: {
    padding: 0,
  },
}));

const MenuItemsList = ({ menuList, onClickItem }) => {
  const classes = useStyles();

  return (
    <Grid>
      <List className={classes.padding}>
        {menuList.map((item) => (
          <MenuItem
            key={item.group}
            literal={item.group}
            onClickItem={() => onClickItem(item)}
          />
        ))}
      </List>
    </Grid>
  );
};

export default MenuItemsList;