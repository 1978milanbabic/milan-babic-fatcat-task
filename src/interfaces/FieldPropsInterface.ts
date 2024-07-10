import { InputType } from '@homework-task/types/InputType';

export interface FieldPropsInterface {
  id: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  required?: boolean;
  margin?: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
}
