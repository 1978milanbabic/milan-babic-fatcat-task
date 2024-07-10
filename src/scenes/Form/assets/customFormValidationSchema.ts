import { z as zValidate } from 'zod';

export const customFormValidationSchema = zValidate
  .object({
    title: zValidate
      .string()
      .min(1, 'Title is required')
      .max(50, 'Title must be less than 50 characters'),
    body: zValidate
      .string()
      .min(1, 'Body is required')
      .max(200, 'Body must be less than 200 characters'),
  })
  .required();
