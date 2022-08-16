import StyledInput from './styles';

import type { InputProps } from './types';

function Input({ value, onChange, placeholder = 'Search Players' }: InputProps) {
  return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />;
}

export default Input;
