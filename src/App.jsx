import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="content">
        <HomePage />
      </main>
    </>
  );
}
