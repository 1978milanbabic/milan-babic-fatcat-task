import { useUsersQuery } from '@homework-task/hooks/useFetchUsers';

export const UserList = () => {
  const { data: users = [], isLoading, error } = useUsersQuery();

  if (isLoading) return <div className="text-center mt-4 text-mainGreen">Loading...</div>;
  if (error)
    return <div className="text-center mt-4 text-red">{error.message}</div>;

  return (
    <div className="container mx-auto mt-4 p-4">
      <ul className="space-y-4">
        {users.map(({ id, name, username, email, phone }) => (
          <li key={id} className="p-4 border rounded-lg shadow-sm text-gray80">
            <h3 className="text-lg font-bold text-black">ID: {id}</h3>
            <p>
              <span className="font-semibold text-black">Name:</span>{' '}
              {name}
            </p>
            <p>
              <span className="font-semibold text-black">Username:</span>{' '}
              {username}
            </p>
            <p>
              <span className="font-semibold text-black">Email:</span>{' '}
              {email}
            </p>
            <p>
              <span className="font-semibold text-black">Phone:</span>{' '}
              {phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
