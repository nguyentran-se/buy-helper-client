import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { initDrawerList, PROVIDER_DRAWER_WIDTH } from 'constant';
import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const StyledDrawer = styled(Drawer)({
  width: PROVIDER_DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: PROVIDER_DRAWER_WIDTH,
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    // transition: `${theme.transitions.create(['transform'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // })}`,
  },
});
const DrawerHeader = styled(Typography)(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: 24,
  fontWeight: 700,
  '& .MuiListItemIcon-root': {
    minWidth: 40,
  },
  '&.active': {
    color: theme.palette.primary.main,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
      minWidth: 40,
    },
  },
}));

const ProviderDrawer = ({ open, translate }) => {
  const [drawerList, setDrawerList] = useState(initDrawerList(translate));
  //set list haved been translated to drawerList
  useEffect(() => {
    setDrawerList(initDrawerList(translate));
  }, [translate]);

  /**
   * @implement handle open Sublist
   */
  const handleClickShowSubList = (header, title) => {
    const index = drawerList.findIndex((section) => section.header === header);
    const updatedDrawerList = [...drawerList];
    updatedDrawerList[index] = { ...drawerList[index] };
    updatedDrawerList[index].list = [...drawerList[index].list];
    const listIndex = updatedDrawerList[index].list.findIndex(
      (item) => item.title === title,
    );
    updatedDrawerList[index].list[listIndex] = {
      ...drawerList[index].list[listIndex],
    };
    updatedDrawerList[index].list[listIndex].isOpenSubList =
      !updatedDrawerList[index].list[listIndex].isOpenSubList;
    setDrawerList(updatedDrawerList);
  };

  return (
    <StyledDrawer
      // sx={{
      //   width: PROVIDER_DRAWER_WIDTH,
      //   flexShrink: 0,
      //   '& .MuiDrawer-paper': {
      //     width: PROVIDER_DRAWER_WIDTH,
      //     boxSizing: 'border-box',
      //     textTransform: 'capitalize',
      //   },
      // }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader variant="h6" component="h3">
        BuyHelper Products
      </DrawerHeader>
      <Divider />
      <List component="nav">
        {drawerList.map((section) => (
          <Box key={section.header}>
            <ListSubheader>{section.header}</ListSubheader>
            {section.list.map((listItem) => {
              return (
                <Box key={listItem.title}>
                  <StyledListItem
                    button
                    component={listItem.subList ? 'div' : NavLink}
                    to={listItem.to || null}
                    exact={listItem.to ? true : null}
                    onClick={() =>
                      listItem.subList &&
                      handleClickShowSubList(section.header, listItem.title)
                    }
                  >
                    <ListItemIcon>{listItem.icon}</ListItemIcon>
                    <ListItemText primary={listItem.title} />
                    {listItem.subList && (
                      <>
                        {listItem.isOpenSubList ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </>
                    )}
                  </StyledListItem>
                  {listItem.subList &&
                    listItem.subList.map((subListItem) => {
                      return (
                        <Collapse
                          in={listItem.isOpenSubList}
                          unmountOnExit
                          timeout="auto"
                          key={subListItem.subTitle}
                        >
                          <List>
                            <StyledListItem
                              button
                              component={NavLink}
                              to={subListItem.subTo}
                              exact
                              sx={{ pl: 5 }}
                            >
                              <ListItemIcon>{subListItem.subIcon}</ListItemIcon>
                              <ListItemText primary={subListItem.subTitle} />
                            </StyledListItem>
                          </List>
                        </Collapse>
                      );
                    })}
                </Box>
              );
            })}
          </Box>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default memo(ProviderDrawer);
