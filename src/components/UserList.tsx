import { useUsersQuery } from '@homework-task/hooks/useFetchUsers';

export const UserList = () => {
  const { data: users = [], isLoading, error } = useUsersQuery();

  if (isLoading) return <div className="text-center mt-4 text-red-500">Loading...</div>;
  if (error)
    return <div className="text-center mt-4 text-red-500">{error.message}</div>;

  return (
    <div className="container mx-auto mt-4 p-4">
      <ul className="space-y-4">
        {users.map(({ id, name, username, email, phone }) => (
          <li key={id} className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-bold">ID: {id}</h3>
            <div className="space-y-1">
              <p>
                <span className="font-semibold text-gray-700">Name:</span>{' '}
                {name}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Username:</span>{' '}
                {username}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Email:</span>{' '}
                {email}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Phone:</span>{' '}
                {phone}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
