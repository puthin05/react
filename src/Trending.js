import React from 'react';
import "./t.css";
const Trending = () => {
  return (
    <div className="anime-trending-page">
      <h1>Trending Anime</h1>
      <div className="anime-list">
        <div className="anime-card">
          <img src="https://c4.wallpaperflare.com/wallpaper/605/871/805/uzumaki-naruto-hyuuga-hinata-uzumaki-boruto-sunset-wallpaper-preview.jpg" alt="Naruto" />
          <h2>Naruto</h2>
          <p>"Naruto" is a Japanese anime and manga series about Naruto Uzumaki, a young ninja aiming to become the Hokage and facing various challenges and adversaries, with themes of friendship and perseverance.</p>
        </div>
        <div className="anime-card">
          <img src="https://c4.wallpaperflare.com/wallpaper/953/956/989/anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-inosuke-hashibira-nezuko-kamado-hd-wallpaper-preview.jpg" alt="Demon Slayer" />
          <h2>Demon Slayer</h2>
          <p>"Demon Slayer" is a Japanese anime and manga series following Tanjiro Kamado, a young boy turned demon slayer, as he seeks to avenge his family and eradicate powerful demons in a stunningly animated, action-packed world.</p>
        </div>
        <div className="anime-card">
          <img src="https://wallpapercave.com/dwp2x/wp9748306.jpg" alt="One Piece" />
          <h2>One Piece</h2>
          <p>"One Piece" is a popular Japanese manga and anime series created by Eiichiro Oda, following the adventures of Monkey D. Luffy and his diverse crew as they search for the ultimate treasure, the One Piece, in a world filled with pirates, mythical creatures, and government intrigue.</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
