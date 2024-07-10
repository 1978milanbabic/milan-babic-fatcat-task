import { z as zValidate } from 'zod';
import { FormGenerator } from '@homework-task/components/FormGenerator';
import CustomForm from '@homework-task/components/CustomForm';
import { UserList } from '@homework-task/components/UserList';
import '@homework-task/styles.css';

const validationSchema = zValidate.object({
  title: zValidate.string().min(1, 'Title is required').max(50, 'Title must be less than 50 characters'),
  body: zValidate.string().min(1, 'Body is required').max(200, 'Body must be less than 200 characters'),
});

import { Landing } from '@homework-task/scenes/Landing/Landing.tsx';

const App = () => {
  return (
    <main>
      <Landing />
      <UserList />
      <FormGenerator 
        validationSchema={validationSchema} 
        successMessage='Form submitted successfully' 
        renderForm={() => <CustomForm />} 
      />
    </main>
  );
};

export default App;
