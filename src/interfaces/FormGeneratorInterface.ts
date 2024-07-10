import { ReactNode } from 'react';

import { UseFormReturn, FieldValues } from 'react-hook-form';
import { ZodSchema } from 'zod';

export interface FormGeneratorInterface<FormData extends FieldValues> {
  validationSchema: ZodSchema<FormData>;
  renderForm: (methods: UseFormReturn<FormData>) => ReactNode;
  successMessage?: string;
  onSubmit?: (data: FormData) => void;
}
