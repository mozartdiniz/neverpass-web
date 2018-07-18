import * as React from 'react';
import { generate } from 'generate-password';
import { IReactFormEvents } from '../PasswordForm/PasswordForm.types';

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
      <div>
        <div>{this.state.password}</div>
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
          Numbers:
          <input
            type="checkbox"
            name="numbers"
            checked={this.state.numbers}
            onChange={this.onChangeCheckbox}
          />
        </div>
        <div>
          Symbols:
          <input
            type="checkbox"
            name="symbols"
            checked={this.state.symbols}
            onChange={this.onChangeCheckbox}
          />
        </div>
        <div>
          Uppercase:
          <input
            type="checkbox"
            name="uppercase"
            onChange={this.onChangeCheckbox}
            checked={this.state.uppercase}
          />
        </div>
        <div>
          Exclude Similar Characters:
          <input
            type="checkbox"
            name="excludeSimilarCharacters"
            onChange={this.onChangeCheckbox}
            checked={this.state.excludeSimilarCharacters}
          />
        </div>
        <div>
          Strict:
          <input
            type="checkbox"
            name="strict"
            onChange={this.onChangeCheckbox}
            checked={this.state.strict}
          />
        </div>
      </div>
    );
  }
}

export default GeneratePassword;
