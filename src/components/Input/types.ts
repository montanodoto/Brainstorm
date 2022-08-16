import { BaseSyntheticEvent } from 'react';

export type InputProps = {
  onChange: (event: BaseSyntheticEvent) => void;
  value: string;
  placeholder?: string;
};
