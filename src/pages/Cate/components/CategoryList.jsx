import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PATH_NAME } from 'configs';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const StyledList = styled(List)(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'background.paper',
  '& .MuiListItem-root:not(.category-heading)': {
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  '& .MuiListItemButton-root': {
    paddingTop: 0,
    paddingBottom: 0,
    '&.active': { backgroundColor: theme.palette.primary.light },
  },
}));
const StyledCollapse = styled(Collapse)(({ theme }) => ({
  '& .MuiListItemButton-root': {
    paddingLeft: theme.spacing(3),
  },
}));
const dummyCategoryList = [
  {
    title: 'Category 1',
    href: PATH_NAME.CATEGORY + '/category1',
    isOpened: null,
    subList: null,
  },
  {
    title: 'Category 2',
    href: null,
    isOpened: false,
    subList: [
      {
        subTitle: 'Subcate 21',
        subHref: PATH_NAME.CATEGORY + '/subcate21',
      },
      {
        subTitle: 'Subcate 22',
        subHref: PATH_NAME.CATEGORY + '/subcate22',
      },
    ],
  },
  {
    title: 'Category 3',
    href: null,
    isOpened: false,
    subList: [
      {
        subTitle: 'Subcate 31',
        subHref: PATH_NAME.CATEGORY + '/subcate31',
      },
      {
        subTitle: 'Subcate 32',
        subHref: PATH_NAME.CATEGORY + '/subcate32',
      },
    ],
  },
  {
    title: 'Category 4',
    href: PATH_NAME.CATEGORY + '/category4',
    isOpened: null,
    subList: null,
  },
  {
    title: 'Category 5',
    href: PATH_NAME.CATEGORY + '/category5',
    isOpened: null,
    subList: null,
  },
  {
    title: 'Category 6',
    href: PATH_NAME.CATEGORY + '/category6',
    isOpened: null,
    subList: null,
  },
  {
    title: 'Category 7',
    href: PATH_NAME.CATEGORY + '/category7',
    isOpened: null,
    subList: null,
  },
  {
    title: 'Combo',
    href: null,
    isOpened: false,
    subList: [
      {
        subTitle: 'Combo 1',
        subHref: PATH_NAME.CATEGORY + '/combo1',
      },
      {
        subTitle: 'Combo 2',
        subHref: PATH_NAME.CATEGORY + '/combo2',
      },
    ],
  },
];
const CategoryList = () => {
  const [categoryList, setCategoryList] = useState(dummyCategoryList);
  const handleClick = (title) => {
    const updatedCategoryList = categoryList.slice();
    const index = updatedCategoryList.findIndex((cate) => cate.title === title);
    updatedCategoryList[index].isOpened = !updatedCategoryList[index].isOpened;
    setCategoryList(updatedCategoryList);
  };

  return (
    <StyledList disablePadding>
      <ListItem sx={{ paddingTop: 0 }} className="category-heading">
        <ListItemText
          primary="Danh mục sản phẩm"
          sx={{
            mt: 0,
            '& .MuiTypography-root': { lineHeight: 1 },
          }}
        />
      </ListItem>
      {categoryList.map((cate) =>
        !cate.subList ? (
          <ListItem key={cate.title}>
            <ListItemButton component={NavLink} to={cate.href} exact>
              <ListItemText primary={cate.title} />
            </ListItemButton>
          </ListItem>
        ) : (
          <div key={cate.title}>
            <ListItem>
              <ListItemButton onClick={() => handleClick(cate.title)}>
                <ListItemText primary={cate.title} />
                {cate.isOpened ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <StyledCollapse in={cate.isOpened} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {cate.subList.map((subCate) => (
                  <ListItem key={subCate.subTitle}>
                    <ListItemButton
                      component={NavLink}
                      to={subCate.subHref}
                      exact
                    >
                      <ListItemText primary={subCate.subTitle} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </StyledCollapse>
          </div>
        ),
      )}
    </StyledList>
  );
};

export default CategoryList;
