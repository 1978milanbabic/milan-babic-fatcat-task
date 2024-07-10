import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@homework-task/styles.css';

import { Navigation } from '@homework-task/components/Navigation';
import { Form } from '@homework-task/scenes/Form/Form.tsx';
import { Landing } from '@homework-task/scenes/Landing/Landing.tsx';
import { List } from '@homework-task/scenes/List/List.tsx';
// import { Page } from '@homework-task/scenes/Page/Page.tsx';
import { NotFound } from '@homework-task/scenes/NotFound/NotFound.tsx';

const App = () => {
  return (
    <Router>
      <main>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/page" element={<Page />} />  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
