import React from "react";
import { view } from "@risingstack/react-easy-state";
import { state } from "../../../../../state";
import { Text, Section, InputCheckBox, Spacer } from "./styled";

export const SettingsCleanVersion = view(() => (
  <Section title="Clean version">
    {!state.settings.cleanVersion && (
      <>
        <Text>
          Settings button will be hidden unless you hover over him. Also a bunch of useless text,
          like this paragraph, will be hidden.
        </Text>
        <Spacer size={0.5} />
      </>
    )}

    <InputCheckBox
      checked={state.settings.cleanVersion}
      onChange={state.settings.toggleCleanVersion}
    >
      No fluff
    </InputCheckBox>
  </Section>
));
