import PageLayout from "./layout/PageLayout";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReviewCreate from "./page/ReviewCreate";
import MenuList from "./page/MenuList";
import MenuDetail from "./page/MenuDetail";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} />
                    <Route
                        path="/create"
                        element={
                            <PageLayout>
                                <ReviewCreate/>
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={
                            <PageLayout isDetailPage>
                                <MenuDetail/>
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <PageLayout>
                                <MenuList/>
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/list/:id"
                        element={
                            <PageLayout>
                                <MenuList/>
                            </PageLayout>
                        }
                    />
                    <Route
                        path="/면-찌개-김밥"
                        element={
                            <PageLayout>
                                <MenuList/>
                            </PageLayout>
                        }
                    />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
