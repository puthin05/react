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
       
        <div className="anime-card">
          <img src="https://images4.alphacoders.com/566/566163.jpg" alt="Hunter x Hunter" />
          <h2>Hunter x Hunter</h2>
         <p>"Hunter x Hunter" is an anime and manga series that follows Gon Freecss, a young boy who aspires to become a Hunter and find his missing father while embarking on thrilling adventures in a world filled with unique challenges, creatures, and Nen, a mysterious power system.</p>
        </div>
        <div className="anime-card">
          <img src="https://wallpapercave.com/dwp2x/wp1837539.jpg" alt="Attack on Titans" />
          <h2>Attack on Titans</h2>
          <p>"Attack on Titan" is a popular anime and manga series set in a world where humanity must defend itself from giant humanoid creatures while uncovering dark secrets about their existence. It follows Eren Yeager and his friends as they join the fight against these Titans to reclaim their world.</p>
        </div>
        <div className="anime-card">
          <img src="https://images2.alphacoders.com/133/1335374.jpeg" alt="Tokyo Revengers" />
          <h2>Tokyo Revengers</h2>
          <p>"Tokyo Revengers" is an anime series that follows Takemichi Hanagaki, a man who discovers he can time-travel and uses this ability to change the past and prevent a tragic future involving gang conflicts and lost loved ones.</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
