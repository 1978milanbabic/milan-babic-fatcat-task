import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';

import { usePostData } from '@homework-task/hooks/usePostData';
import { FormGeneratorInterface } from '@homework-task/interfaces/FormGeneratorInterface';

export const FormGenerator = <FormData extends FieldValues>({
  validationSchema,
  successMessage,
  renderForm,
  onSubmit,
}: FormGeneratorInterface<FormData>) => {
  const formMethods = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit } = formMethods;

  const { mutate, status, error } = usePostData<FormData>();

  const isLoading = status === 'loading';

  const handleFormSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: onSubmit,
    });
  };

  const submitButtonText = isLoading ? 'Submitting...' : 'Submit';
  const submitButtonClass = `px-4 py-2 ${
    !isLoading ? 'bg-primary' : 'bg-disabled'
  } text-white rounded hover:bg-gray80 self-center`;
  const errorMessage = error ? `An error occurred: ${error.message}` : '';

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(handleFormSubmit)(e);
        }}
        className="space-y-4 py-4 m-auto flex flex-col"
      >
        {renderForm(formMethods as UseFormReturn<FormData>)}
        <button type="submit" className={submitButtonClass}>
          {submitButtonText}
        </button>
        {errorMessage && <p className="text-red">{errorMessage}</p>}
        {successMessage && status === 'success' && (
          <p className="text-mainGreen">{successMessage}</p>
        )}
      </form>
    </FormProvider>
  );
};
