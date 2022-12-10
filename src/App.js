import './App.css';
import leaf from './assets/leaf.svg';
import previous from "./assets/icon-forward.png"; 
import { useState} from 'react';
import { interiorData } from './interiorData';
import { plantData } from './plantData';


function App() {
  const [slideImage, setSlideImage] = useState(0);
  const {interiorImage, text} = interiorData[slideImage];

  const [plants, setPlants] = useState(plantData);

  const previousSlide = () => {
    setSlideImage(slideImage => {
      slideImage --; 
      if (slideImage < 0) {
        return interiorData.length - 1 
      }
      return slideImage
    })
  }

  const nextSlide = () => {
    setSlideImage(slideImage => {
      slideImage ++;
      if (slideImage > interiorData.length -1) {
        slideImage = 0
      }
      return slideImage;
    })
  }

  const removeItem = (id) => {
    let newList = plants.filter(plant => plant.id !== id);
    setPlants(newList);
  }


  return (
    <div className="App">
      <header>
        <div className='title-box'>
          <h1>Create your own indoor oasis</h1>
        </div>

        <div className="slide-box">
          <div className='greendecoration-box'></div>
          <div className="image-box">
            <img src={interiorImage} alt="plants in an interior"/>
          </div>
          <div className="slides-info">
            <img  src={leaf} className='leaf-one' alt=""/>
            <h3 className='slide-text'>{text}</h3>
            <img src={leaf} className='leaf-two' alt=""/>
            <div className="btn-div">
              <button className="btn-slides" onClick={previousSlide} aria-label="previous"><img className="btn-slides-previous" src={previous} width="30px" alt="previous"/></button>
              <button className="btn-slides" onClick={nextSlide} aria-label="next"><img src={previous} width="30px" alt="next"/></button>
            </div>
          </div>
        </div>

      </header>

      <section className="suggestion-section">
        <h2>Your top {plants.length} suggestions</h2>
        <div className='suggestion-block'>      

        {plants.map (item => {
          const {id, plantName, description, image} = item;

          return (
              <div key={id} className='card'>
                <img className='plant-image' src={image} alt="plant"/>
                <h3>{plantName}</h3>
                <p>{description}</p>
                <button className='remove-btn' onClick={() => removeItem(id)}>Remove from suggestions</button>
              </div>
          )
        })}
        </div>  
      </section>
    </div>
  );
}

export default App;
