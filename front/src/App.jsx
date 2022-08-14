
import Layout from './layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './layout/routing/Routing';

function App() {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

export default App;
