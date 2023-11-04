import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';

import Header from './components/layout/header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'

import Home from './components/pages/home'
import Checkout from './components/pages/checkout'
import Reserve from './components/pages/reserve'
import Menu from './components/pages/menu'
import Conatact from './components/pages/contact'
import NotFound from './components/pages/not_found'

function App() {
  return (
    <div className="App">
      <Router>

        <ThemeProvider theme={theme}>
        <Header/>

        <Main>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/reserve' element={<Reserve/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Conatact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>

        </Main>

        <Footer/>
        </ThemeProvider>

      </Router>
    </div>
  );
}

export default App;
