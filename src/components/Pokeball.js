import { useEffect, useRef } from 'react';
import pokeball from './imgs/pokeball2.png';
import './css/pokeball.css';

const Pokeball = () => {
  const imgRef = useRef();

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const rotation = window.scrollY / 20 + 90;
      imgRef.current.style.transform = `rotate(${rotation}deg)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='pokeball'>
      <img ref={imgRef} src={pokeball}></img>
    </div>
  );
};

export default Pokeball;
