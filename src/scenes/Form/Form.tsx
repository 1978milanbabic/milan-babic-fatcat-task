import { CustomForm } from '@homework-task/components/CustomForm';
import { FormGenerator } from '@homework-task/components/FormGenerator';
import { CustomFormInterface } from '@homework-task/scenes/Form/assets/CustomFormInterface';
import { customFormValidationSchema } from '@homework-task/scenes/Form/assets/customFormValidationSchema';

export const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h1 className="text-3xl font-bold mb-4 text-center">Test Form</h1>
        <FormGenerator<CustomFormInterface>
          validationSchema={customFormValidationSchema}
          successMessage="Form submitted successfully"
          renderForm={() => <CustomForm />}
        />
      </div>
    </div>
  );
};
