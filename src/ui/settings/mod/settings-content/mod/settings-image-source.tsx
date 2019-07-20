import React from "react";
import { view } from "react-easy-state";
import { state } from "../../../../../state";
import { Warning, InputRadio, Spacer, Section } from "./styled";

export const SettingsImageSource = view(() => {
  if (state.settings.cleanVersion) return <Errors />;

  return (
    <Section title="Image source">
      <InputRadio
        name="images"
        onChange={() => state.image.setImageSource("BING")}
        checked={state.image.imageSourceWithFallback === "BING"}
        disabled={state.browser.online === false}
      >
        Bing image of the day
      </InputRadio>

      <InputRadio
        name="images"
        onChange={() => state.image.setImageSource("LOCAL")}
        checked={state.image.imageSourceWithFallback === "LOCAL"}
      >
        Local
      </InputRadio>

      <Errors />
    </Section>
  );
});

const Errors = view(() => {
  return (
    <>
      {!state.browser.online && (
        <>
          <Spacer size={1} />
          <Warning>You are currently offline, falling back to local images.</Warning>
        </>
      )}

      {state.image.imageBing.type === "ERROR" && (
        <>
          {/* TODO: proper error matching */}
          <p>Error</p>
          <p>errorType: {state.image.imageBing.errorType}</p>
          <p>errorData: {String(state.image.imageBing.data)}</p>
          <pre>
            <code>{JSON.stringify(state.image.imageBing)}</code>
          </pre>
        </>
      )}
    </>
  );
});
