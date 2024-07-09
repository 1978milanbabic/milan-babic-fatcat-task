import './styles.css';

import { Layout } from '@app-root/layouts/Layout.tsx';
import { Landing } from '@app-root/scenes/Landing/Landing.tsx';

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
