import React from "react";
import { ClockBox, ClockText, Colon } from "./styled";
import { Timestamp } from "../timer-updater";
import { addLeadingZero } from "../../shared/time";

type ClockProps = {
  time: Timestamp;
  showSeconds: boolean;
};

export const Clock = (props: ClockProps) => (
  <ClockBox>
    <ClockText>
      <Time time={props.time} showSeconds={props.showSeconds} />
    </ClockText>
  </ClockBox>
);

const Time = (props: ClockProps) => {
  const date = new Date(props.time);

  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  return (
    <>
      {hours}
      <Colon>:</Colon>
      {minutes}
      {props.showSeconds && (
        <>
          <Colon>:</Colon>
          {seconds}
        </>
      )}
    </>
  );
};
