import React from "react";
import styled from "styled-components/macro";
import * as s from "../../../styles/styles";
import { Icon, IconType } from "../../../icon";

export const ContactLink: React.FC<{
  href: string;
  iconType: IconType;
  children: string;
}> = ({ href, iconType, children }) => {
  return (
    <Wrapper href={href}>
      <IconWrapper>
        <Icon type={iconType} width={2} height={2} />
      </IconWrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.a({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textDecoration: "none",
});

const IconWrapper = styled.div({
  display: "block",
  marginRight: s.grid(1),
});

const Text = styled.div({
  ...s.text(),

  display: "inline-block",
  textDecoration: "none",

  borderBottomWidth: s.size(1),
  borderBottomStyle: "solid",
  borderBottomColor: s.colors.whiteTransparentBright,
});
