// src/App.js

import { Toaster } from "react-hot-toast";
import ImageUpload from "./ImageUpload";


function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl">Example Image Upload website</h1>
      </header>
      <main className="p-4">
        <ImageUpload />
      </main>
      <Toaster
        position="top-center"
         />
    </div>
  );
}

export default App;
