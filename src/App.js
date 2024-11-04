// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import ImageCard from './app/js/ImageCard';
import ImageSearch from './app/js/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=46605865-50b6e91803fb38999f3a757d2&q=${term}&image_type=photo&pretty=true&per_page=60`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div class="mg_auto">
      <ImageSearch setTerm={setTerm} />
      {!isLoading && !images.length && <h1 className="nothingfound mg_auto">No Images Found</h1>}
      {isLoading ? <h1 class="nothingfound mg_auto                 text-6xl text-center mx-auto mt-32">Loading...</h1> : <div class="grid mg_auto">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

 

export default App;