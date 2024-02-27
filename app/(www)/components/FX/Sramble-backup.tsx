"use client"
import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  const [output, setOutput] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#____';
  let frame = 0;
  let frameRequest = 0;
  let queue: any[] = [];

  useEffect(() => {
    setText(text);
  }, [text]);

  const setText = (newText: string) => {
    const oldText = output;
    const length = Math.max(oldText.length, newText.length);
    queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 200);
      const end = start + Math.floor(Math.random() * 200);
      queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(frameRequest);
    frame = 0;
    update();
  };

  const update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i];
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    setOutput(output);
    if (complete === queue.length) {
      // resolve
    } else {
      frameRequest = requestAnimationFrame(update);
      frame++;
    }
  };

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return <div dangerouslySetInnerHTML={{ __html: output }} />;
};

export default ScrambleText;
