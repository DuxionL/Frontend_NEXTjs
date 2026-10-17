"use client";

import { useState } from "react";

type MenuCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export default function MenuCard({
  image,
  name,
  description,
  price,
}: MenuCardProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(false);

  const handleLike = () => {
    if (liked) {
      setCount((c) => Math.max(0, c - 1));
      setLiked(false);
    } else {
      setCount((c) => c + 1);
      setLiked(true);
      setPop(true);
      setTimeout(() => setPop(false), 250);
    }
  };

  return (
    <article className="menu-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={name} className="menu-img" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="menu-footer">
        <span className="price">{price}</span>
        <div className="like-widget">
          <button
            className={`like-btn${liked ? " liked" : ""}${pop ? " like-pop" : ""}`}
            type="button"
            aria-label="Suka menu ini"
            onClick={handleLike}
          >
            <span className="like-icon">{liked ? "\u2665" : "\u2661"}</span>
          </button>
          <span className="like-count">{count}</span>
        </div>
      </div>
    </article>
  );
}