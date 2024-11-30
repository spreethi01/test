import './App.css';
import { useSearchParams } from 'react-router-dom';
import Level1 from './components/level1/level1';

function App() {

  const [searchParams, setSearchParams] = useSearchParams();

  const dark = searchParams.get('dark');

  if (dark == '1') {
    return (
      <Level1></Level1>
    )
  }
  else {

    return (
      <div className="landing-container">
        <div className="content-wrapper">
          <h1 className="title">Welcome to the Ultimate Quiz Challenge</h1>
          <p className="description">Test your knowledge, earn rewards, and have fun!</p>

          <ul className="quiz-info">
            <li>🌍 Total 3 levels</li>
            <li>⏱ Each level have 5 step Challenge</li>
            <li>🏆 Find the next level Button and make it work</li>
            <li>💡 Dark Mode to continue......</li>
          </ul>
        </div>

        {/* Background Animation */}
        <div className="background-circles"></div>
      </div>
    );
  }
}

export default App;
