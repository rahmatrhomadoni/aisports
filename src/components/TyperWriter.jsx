import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/responsive.css';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay); // Waktu tunggu antara setiap karakter (ms)

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text, delay]);

  return <p className='type-writer'>{currentText}</p>;
};

export default Typewriter;
