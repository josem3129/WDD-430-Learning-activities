"use client";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  <button onClick={handleClick}>Like ({likes})</button>;
}
