import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_flex,
    width,
    padding,
    margin,
    bg,
    children,
    _onClick,
    height,
    left,
    borderBottom,
    is_flex_start,
    borderRadius,
    position,
    justifyContent,

    is_post_box,
    is_category_box,

    boxSizing,
    borderStyle,
    alignItems,

  } = props;

  const styles = {
    is_flex,
    width,
    height,
    padding,
    margin,
    bg,
    borderBottom,
    borderRadius,
    position,
    justifyContent,

    is_post_box,
    is_category_box,

    boxSizing,
    borderStyle,
    alignItems,

  };

  if (is_post_box) {
    return (
      <PostGridBox {...styles} onClick={_onClick}>
        {children}
      </PostGridBox>
    );
  }
  if (is_category_box) {
    return (
      <CategoryBox {...styles} onClick={_onClick}>
        {children}
      </CategoryBox>
    );
  }
  return (
    <>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: '100%',
  height: '100%',
  padding: false,
  margin: false,
  bg: false,
  borderBottom: false,
  // justifyCenter: false,
  // justifyRight: false,
  borderRadius: false,
  position: false,
  justifyContent: 'space-between',
};

const GridBox = styled.div`
  box-sizing: border-box;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ''}
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
  // ${(props) => (props.justifyCenter ? `justify-content: center` : '')}
  // ${(props) => (props.justifyRight ? `justify-content: right` : '')}
  ${(props) => (props.borderRadius ? `border-radius: 10px` : '')}
  position: ${(props) => props.position};
  justify-content: ${(props) => props.justifyContent};
  boxsizing: ${(props) => props.boxSizing};
  border-style: ${(props) => props.borderStyle};
  align-items: ${(props) => props.alignItems};

`;

const PostGridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ''}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
`;

const CategoryBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; `
      : ''}
`;

export default Grid;
