"use client"
import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  const [output, setOutput] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#____';
  const frameRef = useRef(0);
  const frameRequestRef = useRef(0);
  const queueRef = useRef<any[]>([]);

  useEffect(() => {
    const setText = (newText: string) => {
      const oldText = output;
      const length = Math.max(oldText.length, newText.length);
      queueRef.current = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 200);
        const end = start + Math.floor(Math.random() * 200);
        queueRef.current.push({ from, to, start, end });
      }
      cancelAnimationFrame(frameRequestRef.current);
      frameRef.current = 0;
      update();
    };

    setText(text);
  }, [text]);

  const update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0, n = queueRef.current.length; i < n; i++) {
      let { from, to, start, end, char } = queueRef.current[i];
      if (frameRef.current >= end) {
        complete++;
        output += to;
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queueRef.current[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    setOutput(output);
    if (complete === queueRef.current.length) {
      // resolve
    } else {
      frameRequestRef.current = requestAnimationFrame(update);
      frameRef.current++;
    }
  };

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <div dangerouslySetInnerHTML={{ __html: output }} />;
};

export default ScrambleText;
