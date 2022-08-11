import masterball from './imgs/masterball1.png';
import './css/loading.css';

const Loading = () => {
  return (
    <div className='loader'>
      <div className='spinner'><img src={masterball} alt="" /></div>
      <div className='loading'>Loading</div>
    </div>
  );
};

export default Loading;