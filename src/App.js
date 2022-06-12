import React, { useState, useRef, useEffect } from 'react';
import Footer from './components/Navigation/Footer';
import Sidebar from './components/Sidebar';
import { Link, Outlet } from 'react-router-dom';
import { CloseMenuIcon, OpenMenuIcon, Button } from './components/Styled';
import logo from './images/taylor-H.png';
function App() {
  const [open, setOpen] = useState(true);
  // const viewWidth = window.innerWidth;
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
    });
  }, []);
  return (
    <>
      <header>
        {/* <div className="header"> */}
        <Link to="/">
          <div className="name-container">
              <img src={logo} alt="Taylor Hembree" className="logo" />
          </div>
        </Link>
          <div className="hamburg-icon">
            {open ? (
              <Button onClick={() => setOpen(!open)}>
                <CloseMenuIcon />
              </Button>
            ) : (
              <Button onClick={() => setOpen(true)}>
                <OpenMenuIcon />
              </Button>
            )}
          </div>
        {/* </div> */}
      </header>
      <div className="home-container">
        <div className={'flex-item-left'}>
          <Outlet />
        </div>
        <div
          ref={ref}
          className={`flex-item-right ${open ? 'open' : 'closed'}`}>
          <Sidebar setOpen={setOpen} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
