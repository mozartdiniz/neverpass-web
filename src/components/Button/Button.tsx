import * as React from 'react';

export interface IButtonProps {
  text: string;

  className?: string;

  onClickHandler?: () => void;
}

export const Button = (props: IButtonProps) => (
  <button onClick={props.onClickHandler} className={props.className}>
    {props.text}
  </button>
);
