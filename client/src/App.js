import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} /> {/* url -> http://localhost:3001/ */}
          <Route path="review" > {/* url -> http://localhost:3001/review/ */}
            <Route path="list" element={<Review />} /> {/* url -> http://localhost:3001/review/list */}
            <Route path="create" element={<ReviewCreate />} /> {/* url -> http://localhost:3001/review/create */}
            <Route path=":id">
              <Route path="detail" element={<ReviewDetail />} />
              <Route path="update" element={<ReviewUpdate />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </>
    );
  }
  
  export default App;