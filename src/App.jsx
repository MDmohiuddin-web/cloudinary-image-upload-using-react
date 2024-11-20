// src/App.js

import ImageUpload from "./ImageUpload";


function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl">Image Upload Example</h1>
      </header>
      <main className="p-4">
        <ImageUpload />
      </main>
    </div>
  );
}

export default App;
