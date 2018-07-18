import * as React from 'react';
import { generate } from 'generate-password';
import { IReactFormEvents } from '../PasswordForm/PasswordForm.types';

import * as styles from './GeneratePassword.css';

export interface IGeneratePasswordProps {
  onGeneratePassword: (password: string) => void;
}

export interface IGeneratePasswordState {
  password: string;
  length: number;
  numbers: boolean;
  symbols: boolean;
  uppercase: boolean;
  excludeSimilarCharacters: boolean;
  strict: boolean;
}

class GeneratePassword extends React.Component<
  IGeneratePasswordProps,
  IGeneratePasswordState
> {
  public state = {
    password: '',
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: false,
    strict: false
  };

  public componentDidMount() {
    this.generatePassword();
  }

  public changeRangeValue = (e: IReactFormEvents) => {
    this.setState(
      {
        ...this.state,
        length: parseInt(e.currentTarget.value, 10)
      },
      () => {
        this.generatePassword();
      }
    );
  };

  public onChangeCheckbox = (e: IReactFormEvents) => {
    const currentValue = this.state[
      e.currentTarget.name as keyof IGeneratePasswordState
    ];
    this.setState(
      {
        ...this.state,
        [e.currentTarget.name as keyof IGeneratePasswordState]: !currentValue
      },
      () => {
        this.generatePassword();
      }
    );
  };

  public generatePassword = () => {
    const password = generate(this.state);
    this.props.onGeneratePassword(password);
    this.setState({
      ...this.state,
      password
    });
  };

  public render() {
    return (
      <div className={styles.GeneratePassword}>
        <div className={styles.PasswordValue}>{this.state.password}</div>
        <div className={styles.FormContent}>
          <div>
            <div>Length ({this.state.length})</div>
            4
            <input
              type="range"
              min="4"
              max="40"
              value={this.state.length}
              onChange={this.changeRangeValue}
            />
            40
          </div>
          <div>
            <input
              type="checkbox"
              name="numbers"
              checked={this.state.numbers}
              onChange={this.onChangeCheckbox}
            />
            Numbers
          </div>
          <div>
            <input
              type="checkbox"
              name="symbols"
              checked={this.state.symbols}
              onChange={this.onChangeCheckbox}
            />
            Symbols
          </div>
          <div>
            <input
              type="checkbox"
              name="uppercase"
              onChange={this.onChangeCheckbox}
              checked={this.state.uppercase}
            />
            Uppercase
          </div>
          <div>
            <input
              type="checkbox"
              name="excludeSimilarCharacters"
              onChange={this.onChangeCheckbox}
              checked={this.state.excludeSimilarCharacters}
            />
            Exclude Similar Characters
          </div>
          <div>
            <input
              type="checkbox"
              name="strict"
              onChange={this.onChangeCheckbox}
              checked={this.state.strict}
            />
            Strict
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratePassword;
