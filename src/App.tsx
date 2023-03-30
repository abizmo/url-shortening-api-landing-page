import { LinksProvider } from '@context';
import { Layout } from '@components';
import { Home } from '@pages';

import './App.css';

function App(): JSX.Element {
  return (
    <LinksProvider>
      <Layout>
        <Home />
      </Layout>
    </LinksProvider>
  );
}

export default App;
