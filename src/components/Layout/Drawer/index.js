import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import MenuItemList from "./MenuItemList";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDrawerContext } from "../../../context/drawer-context";
import SubMenuItemsList from "./SubMenuItemList";
import CountryActions from "../../../store/country/action"

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: "static",
    display: "flex",
    paddingTop: 50
  },
  closed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // width: theme.spacing(7) + 1,
    width: 0,
    overflowX: "hidden",
  },
  opened: {
    width: "240px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const CustomDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const countries = useSelector(state => state.country.countries)
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [selectedCountryGroup, setSelectedCountryGroup] = useState()
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  
  const onClickItem = useCallback((item) => {
    setIsSubMenu(true)
    setSelectedCountryGroup(item.children)
  }, [])

  const onClickCountry = useCallback((name) => {
    toggleIsOpened(!isOpened)
    dispatch(CountryActions.getCountry(name))
  }, [dispatch, toggleIsOpened, isOpened])

  const countriesByGroup = useMemo(() => {
    if (countries && countries.length > 0) {
      countries.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      let data = countries.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.name[0];
        // if there is no property in accumulator with this letter create it
        if(!r[group]) r[group] = {group, children: [e]}
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
      }, {})
      
      // since data at this point is an object, to get array of values
      // we use Object.values method
      let result = Object.values(data)
      return result
      
    }
  }, [countries])
  useEffect(() => {
    if (!isOpened) setIsSubMenu(false)
  }, [isOpened])
  return (
    <>
      <Drawer
        anchor={"left"}
        open={isOpened}
        onClose={() => toggleIsOpened(!isOpened)}
      >
        <div className={classes.drawer}>
          <MenuItemList menuList={countriesByGroup} onClickItem={onClickItem} />
          {isSubMenu && selectedCountryGroup && <SubMenuItemsList menuList={selectedCountryGroup} onClickItem={onClickCountry} />}
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;