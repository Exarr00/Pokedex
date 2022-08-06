import { useEffect, useRef } from 'react';
import pokeball from './imgs/pokeball2.png';
import './css/pokeball.css';

const Pokeball = () => {
  const imgRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        const rotation = window.scrollY/20 + 90;
        imgRef.current.style.transform = `rotate(${rotation}deg)`;
      });
    });
  }, []);

  return (
    <div className='pokeball'>
      <img ref={imgRef} src={pokeball}></img>
    </div>
  );
};

export default Pokeball;
