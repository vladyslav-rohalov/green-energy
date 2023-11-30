import Main from './components/main/main';
import About from './components/about/about';
import Electrocity from './components/electrocity/electrocity';
import Cases from './components/cases/cases';
import Faq from './components/faq/faq';
import Conatacts from './components/contacts/contacts';

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Electrocity />
      <Cases />
      <Faq />
      <Conatacts />
    </div>
  );
}
