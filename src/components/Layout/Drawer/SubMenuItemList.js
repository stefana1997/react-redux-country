import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SubMenuItem from "./SubMenuItem";

const useStyles = makeStyles(() => ({
  padding: {
    padding: 0,
  },
}));

const SubMenuItemsList = ({ menuList, onClickItem }) => {
  const classes = useStyles();

  return (
    <Grid>
      <List className={classes.padding}>
        {menuList.map((item) => (
          <SubMenuItem
            key={item.name}
            literal={item.name}
            onClick={() => onClickItem(item.name)}
          />
        ))}
      </List>
    </Grid>
  );
};

export default SubMenuItemsList;