import * as React from 'react';

export interface IPasswordListItemProps {
  name: string;
  login: string;
}

export const PasswordListItem = (props: IPasswordListItemProps) => (
  <div>
    <div>{props.name}</div>
    <div>{props.login}</div>
  </div>
);
