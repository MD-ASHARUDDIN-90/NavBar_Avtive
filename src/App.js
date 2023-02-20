import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const handleHomeClick = () => {
    showHome ? setShowHome(false) : setShowHome(true);
    setShowAbout(false);
    setShowContact(false)
  };
  const handleAboutClick = () => {
    showAbout ? setShowAbout(false) : setShowAbout(true);
    setShowHome(false);
    setShowContact(false)
  };
  const handleContactClick = () => {
    showContact ? setShowContact(false) : setShowContact(true);
    setShowHome(false);
    setShowAbout(false);
  };

  return (
    <>
      <div className="main">
        <h2
          onMouseOver={handleHomeClick}
          className={showHome ? 'active' : ''}
        >
          Home
        </h2>
        <h2
          onMouseOver={handleAboutClick}
          className={showAbout ? 'active' : ''}
        >
          About
        </h2>
        <h2
          onMouseOver={handleContactClick}
          className={showContact ? 'active' : ''}
        >
          Contact
        </h2>
      </div>
      {showHome ? 
        <p>
          <b>Home content</b> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut.
        </p>
  : 
        ''
      }

      {showAbout ? 
        <p>
          <b>About content</b> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Modi repudiandae cum, dolorum accusantium est
          tenetur amet ducimus deleniti alias facere cumque voluptates culpa
          nemo error, vitae officiis similique perferendis labore dicta.
          Assumenda eaque eos consequuntur cupiditate dolore, nisi ab, obcaecati
          harum, hic labore laudantium nesciunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut.
        </p>
       : 
        ''
      }
      {showContact ? 
        <p>
          <b>Contact content</b> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Modi repudiandae cum, dolorum accusantium est
          tenetur amet ducimus deleniti alias facere cumque voluptates culpa
          nemo error, vitae officiis similique perferendis labore dicta.
          Assumenda eaque eos consequuntur cupiditate dolore, nisi ab, obcaecati
          harum, hic labore laudantium nesciunt? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rerum hic libero reprehenderit in laudantium illo,
          molestias sit iusto quos alias odit sunt veniam consequatur!
          Doloremque eius illo nesciunt deserunt repellendus vitae autem
          temporibus hic? Minima molestias recusandae sunt laborum eveniet iusto
          necessitatibus ad quidem ut.
        </p>
       : 
        ''
      }
    </>
  );
}
