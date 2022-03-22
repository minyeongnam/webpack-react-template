import temp from '~/assets/svg/temp.svg';
import TempComponents from '~/assets/svg/temp.svg?inline';

const App = () => {
  const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  };

  const asyncCall = async () => {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  };

  return (
    <div>
      Hello, World
      <img src={temp} alt='' />
      <TempComponents />
    </div>
  );
};

export default App;
