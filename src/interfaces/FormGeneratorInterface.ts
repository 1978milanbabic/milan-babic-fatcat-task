import { ReactNode } from 'react';
import { ZodSchema } from 'zod';

export interface FormGeneratorInterface {
  validationSchema: ZodSchema<any>;
  renderForm: (methods: any) => ReactNode;
  successMessage?: string;
}
