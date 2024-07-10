import { UserList } from '@homework-task/components/UserList';

export const List = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <UserList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" />
    </div>
  );
};
