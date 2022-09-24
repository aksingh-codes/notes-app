import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotesProvider } from "./contexts/NoteContext";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/note/:id" element={<View />} />
          </Routes>
        </BrowserRouter>
      </NotesProvider>
    </div>
  );
}

export default App;
