import { useForm, SubmitHandler, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostData } from '@homework-task/hooks/usePostData';
import { FormGeneratorInterface } from '@homework-task/interfaces/FormGeneratorInterface';

export const FormGenerator = ({ validationSchema, successMessage, renderForm }: FormGeneratorInterface) => {
  const formMethods = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit } = formMethods;

  const { mutate, status, error } = usePostData();

  const isLoading = status === 'pending';

  const onSubmitForm: SubmitHandler<any> = async (submittedData) => {
    await mutate(submittedData);
  };

  const submitButtonText = isLoading ? 'Submitting...' : 'Submit';
  const submitButtonClass = `px-4 py-2 ${!isLoading ? 'bg-primary' : 'bg-disabled'} text-white rounded hover:bg-gray80 self-center`;
  const errorMessage = error ? `An error occurred: ${error.message}` : '';

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4 py-4 m-auto flex flex-col">
        {renderForm(formMethods)}
        <button type="submit" className={submitButtonClass} >
          {submitButtonText}
        </button>
        {errorMessage && <p className="text-red">{errorMessage}</p>}
        {successMessage && status === 'success' && <p className="text-mainGreen">{successMessage}</p>}
      </form>
    </FormProvider>
  );
};
