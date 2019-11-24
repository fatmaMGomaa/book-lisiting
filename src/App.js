import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Index from "./components/Index/Index";
import BookPage from "./components/BookPage/BookPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import AuthorPage from "./components/AuthorPage/AuthorPage";
import DataContextProvider from "./components/contexts/DataContext";
import EditModeContextProvider from "./components/contexts/EditModeContext";
import CategoryForm from "./components/Forms/CategoryForm/CategoryForm";
import AuthorForm from "./components/Forms/AuthorForm/AuthorForm";

function App() {
  return (
    <div className="app-container">
      <EditModeContextProvider>
        <DataContextProvider>
          <Header />
          <div className="left">
            <SideBar />
          </div>
          <div className="right">
            <Switch>
              <Route exact path="/" component={Index} />;
              <Route exact path={"/category/new"} component={CategoryForm} />
              <Route exact path={"/author/new"} component={AuthorForm} />
              <Route exact path={"/book/:bookId"} component={BookPage} />
              <Route
                exact
                path={"/category/:categoryId"}
                component={CategoryPage}
              />
              <Route
                exact
                path={"/category/:categoryId/edit"}
                component={CategoryForm}
              />
              <Route exact path={"/author/:authorId"} component={AuthorPage} />
              <Route
                exact
                path={"/author/:authorId/edit"}
                component={AuthorForm}
              />
            </Switch>
          </div>
          <Footer />
        </DataContextProvider>
      </EditModeContextProvider>
    </div>
  );
}

export default App;
