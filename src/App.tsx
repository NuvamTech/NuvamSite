import './App.css';
import { PageShell } from './components/layout/PageShell';
import { SinglePage } from './pages/SinglePage';

export default function App() {
  return (
    <PageShell>
      <SinglePage />
    </PageShell>
  );
}
