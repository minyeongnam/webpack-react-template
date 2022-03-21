import temp from '~/assets/svg/temp.svg';
import TempComponents from '~/assets/svg/temp2.svg?inline';

const App = () => {
  return (
    <div>
      Hello, World
      <img src={temp} alt='' />
      <TempComponents />
    </div>
  );
};

export default App;
