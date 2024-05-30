import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Adopta } from "./pages/Adopta";
import { Footer } from "./components/Footer";
import { Family } from "./pages/Family";
import { PetsContextProvider } from "./context/PetsContext";
import { PetsG } from "./pages/PetsG";
import { AddPets } from "./pages/AddPets";
import { Dashboard } from "./pages/Dashboard";
import { AdoptedContextProvider } from "./context/AdoptedContext";
import { Familias } from "./pages/Familias";
import { DelateFamily } from "./pages/DelateFamily";
import { Authprovider } from "./context/AutchContext";
import { Protected } from "./Protected";
import { LoginPage } from "./pages/LoginPage";
import { NewAdoptContextProvider } from "./context/NewAdoptContext"; 
import { TableAdopt } from "./pages/TableAdopt";
import { FormulariodeAdopcion } from "./pages/FormulariodeAdopcion";
import { Conoceme } from "./pages/Conoceme";

function App() {
  return (
    <>
      <BrowserRouter>
        <Authprovider>
          <NewAdoptContextProvider>
          <PetsContextProvider>
            <AdoptedContextProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Adopta />} />
                <Route path="/nuestra-familia" element={<Family />} />
                <Route path="/pets/:id" element={<PetsG />} />
                <Route path="/formadopt/:id" element={<FormulariodeAdopcion />} />
                <Route path="/nosotros" element={<Conoceme />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<Protected />}>
                  <Route path="/dashboard" element={<TableAdopt />} />=
                  <Route path="/vermascotas" element={<Dashboard />} />
                  <Route path="/addPets" element={<AddPets />} />
                  <Route path="/addfamily" element={<Familias />} />
                  <Route path="/familyadopted" element={<DelateFamily />} />
                </Route>
              </Routes>
              <Footer />
            </AdoptedContextProvider>
          </PetsContextProvider>
          </NewAdoptContextProvider>
        </Authprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
