import Main from './components/main/main';
import About from './components/about/about';
import Electrocity from './components/electrocity/electrocity';
import Cases from './components/cases/cases';

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Electrocity />
      <Cases />
    </div>
  );
}
