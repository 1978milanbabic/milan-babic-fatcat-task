import { useFormContext } from 'react-hook-form';
import { FieldPropsInterface } from '@homework-task/interfaces/FieldPropsInterface';
import clsx from 'clsx';

const CustomForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderField = ({
    id, 
    label, 
    type = 'text', 
    placeholder = '',
    autoFocus = false,
    margin = 'mb-4',
    fullWidth = false,
    required = false
  }: FieldPropsInterface) => (
    <div className={clsx('mb-4 flex flex-col', fullWidth ? 'w-full' : 'w-8/12', margin ? 'm-auto' : '')}>
      <label htmlFor={id} className="font-semibold text-black">
        {label}
      </label>
      {type !== 'textarea' ? (
        <input
          id={id}
          type={type}
          {...register(id)}
          className='border px-2 py-1 rounded-lg text-gray80'
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
        />
      ) : (
        <textarea
          id={id}
          {...register(id)}
          className="border px-2 py-1 rounded-lg text-gray80"
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
        />
      )}
      {errors[id] && (
        <p className="text-red">{errors[id].message as string}</p>
      )}
    </div>
  );

  return (
    <>
      {renderField({
        id: 'title',
        label: 'Title',
        placeholder: 'Title',
      })}
      {renderField({
        id: 'body', 
        label: 'Body',
        type: 'textarea',
      })}
    </>
  );
};

export default CustomForm;
