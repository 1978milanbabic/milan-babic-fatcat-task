import './styles.css';

import { Layout } from '@homework-task/layouts/Layout.tsx';
import { Landing } from '@homework-task/scenes/Landing/Landing.tsx';

const App = () => {
  return (
    <main>
      <Layout>
        <Landing />
      </Layout>
    </main>
  );
};

export default App;
