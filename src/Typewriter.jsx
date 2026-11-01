import { useEffect, useState } from "react";

export default function Typewriter({ words, label, speed = 85 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letters, setLetters] = useState(1);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const complete = letters === words[wordIndex].length;
    const timeout = window.setTimeout(() => {
      if (!deleting && complete) setDeleting(true);
      else if (deleting && letters === 0) {
        setWordIndex((current) => (current + 1) % words.length);
        setDeleting(false);
      } else setLetters((current) => current + (deleting ? -1 : 1));
    }, deleting ? 42 : complete ? 1550 : letters === 0 ? 250 : speed);
    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, letters, deleting, speed]);

  return (
    <span className="typewriter" aria-label={label || words.join(", ")}>
      <span className="typewriter-reserve" aria-hidden="true">{words.reduce((longest, word) => word.length > longest.length ? word : longest, "")}</span>
      <span className="typewriter-text" aria-hidden="true">{words[wordIndex].slice(0, letters)}<span className="typewriter-caret" /></span>
    </span>
  );
}
