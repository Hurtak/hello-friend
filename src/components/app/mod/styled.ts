import styled from "styled-components/macro";
import * as s from "../../../styles";

export const Layout = styled.div({
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  minWidth: s.size(300),
  padding: s.grid(1),
  overflow: "auto",
});

export const BackgroundWrapper = styled.div({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
});

export const AppContent = styled.main({
  display: "flex",
  flex: "1 0 0",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  zIndex: 2,
});

type AppSettingsProps = { opened: boolean; contentHeight: number | null };

export const AppSettingsWrapper = styled.aside.attrs((props: AppSettingsProps) => ({
  style: {
    ...(props.opened && {
      height: typeof props.contentHeight === "number" ? s.size(props.contentHeight) : "auto",
    }),
  },
}))((props: AppSettingsProps) => ({
  position: "absolute",
  direction: "rtl", // To make the overflow cropping from the right side
  top: s.size(s.dimensions.settingsSpacing),
  right: s.size(s.dimensions.settingsSpacing),
  width: s.size(s.dimensions.settingsButtonSizeAndSpacing),
  height: s.size(s.dimensions.settingsButtonSizeAndSpacing),
  transition: s.animations.default,
  overflow: "hidden",
  zIndex: 3,

  ...(props.opened && {
    width: s.size(s.dimensions.settingsWidth),
  }),
}));
