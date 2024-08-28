import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.component';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="/editor" element={<h1>So you want to write, right?</h1>} />
                <Route path="/signin" element={<h1>Sign In page</h1>} />
                <Route path="/signup" element={<h1>Sign Un page</h1>} />
            </Route>
        </Routes>
    )

}

export default App;