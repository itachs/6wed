import { useState } from "react";


export default function App() {
    const images = [
      { src: 'images/pic1.jpg', alt: 'Closeup of a human eye' },
      { src: 'images/pic2.jpg', alt: 'Rock that looks like a wave' },
      { src: 'images/pic3.jpg', alt: 'Purple and white pansies' },
      { src: 'images/pic4.jpg', alt: "Section of wall from a pharaoh's tomb" },
      { src: 'images/pic5.jpg', alt: 'Large moth on a leaf' },
      ];
      const [displaySrc,setDisplaySrc] = useState("images/pic1.jpg");
      const [displayAlt,setDisplayAlt]=useState("Closeup of a human eye") ;
      const [darkeButtan,setDarkeButton]=useState("Darken");
      const [darkMode,setDarkMode]=useState(false);
      function clickSetDis(src,alt)  {
        setDisplaySrc(src);
        setDisplayAlt(alt);
      };

      function handleButtonClick(){
        if(darkeButtan == "Darken"){
            setDarkeButton("Litten");
            setDarkMode(true);
        }else{
            setDarkeButton("Darken");
            setDarkMode(false);
        }

      };
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
          className="displayed-img"
          src={displaySrc}
          alt={displayAlt}
        />
          <div 
            className="overlay"
            style={{
                backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}
            ></div>
          <button className="dark" onClick={handleButtonClick}>{darkeButtan}</button>
        </div>
        <div className="thumb-bar">
          {images.map((image) =>{
            return (
              <img 
              key={image.src} 
              src={image.src} 
              alt={image.alt}
              onClick={ () =>
                clickSetDis(image.src,image.alt)
              }
               />
            );
          })}
        </div>
      </>
    );
}