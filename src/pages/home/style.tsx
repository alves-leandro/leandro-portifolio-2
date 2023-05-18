import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { css } from "@stitches/react";
import backgroundImg from "@/public/static/img/background/minha-removebg-grey2.png";
import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$grey1",
  padding: "12rem 0 8rem 0",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const DivAbout = styled("div", {
  backgroundColor: "transparent",
  color: "$grey4",
  display: "flex",

  p: {
    display: "flex",
    fontSize: "$title4",
    fontWeight: "500",
    alignItems: "center",
  },

  span: {
    marginLeft: "10px",
    background: "$gradientText",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "800",
    fontSize: "$title1"
  },
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    flexDirection: "column",
  },
})

export const HeaderContent = styled("div", {
  justifyContent: "center",
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "36rem",
  },
  "@mobile": {
    width: "100%",
  },
  ".name": {
    color: "$brand2",
    fontWeight: "600",
    fontSize: "$title4",
  },
  h1: {
    color: "$grey4",
    fontSize: "$title1",
    span: {
      color: "$brand1",
    },
  },
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",

  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },

  "@mobile": {
    [`& ${Button}`]: {
      marginRight: "$2",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  },
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "6rem",
  marginTop: "$4",

  img: {
    borderRadius: "20%",
    filter: "grayscale(100%)",
    "&:hover": {
      filter: "grayscale(0%)",
      transition: "transform 0.5s ease-in-out",
      transform: "scale(1.2)",
    },
  },

    

  "@tablet": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "@mobile": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@mobileLittle": {
    display: "flex",
    overflow: "auto",
    margin: "0 -1rem",
    paddingInline: "1rem",
  },
});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 11rem",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "4rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
