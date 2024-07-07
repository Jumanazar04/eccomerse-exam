import { Input } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import insta from '../assets/ant-design_instagram-filled.png';
import facebook from '../assets/akar-icons_facebook-fill.png';
import heart from '../assets/heart.png'
import korzina from '../assets/korzina.png'

function GeneralLayout() {
  return (
    <div>
      <nav className=" p-4 px-12 shadow-lg">
        <div className="container mx-auto flex items-center justify-between text-gray-400">
          <img src={logo} alt="logo" />
          <div className="w-4/5 flex justify-evenly items-center">
            <NavLink exact to="/allproducts" activeClassName="active">ALL PRODUCTS</NavLink>
            <NavLink exact to="/aboutseedra" activeClassName="active">ABOUT SEEDRA</NavLink>
            <NavLink exact to="/ourblog" activeClassName="active">OUR BLOG</NavLink>
            <NavLink exact to="/contacts" activeClassName="active">CONTACTS</NavLink>
            <NavLink exact to="/instagram">
              <img src={insta} alt="Instagram" />
            </NavLink>
            <NavLink exact to="/facebook">
              <img src={facebook} alt="Facebook" />
            </NavLink>
            <Input.Search className='max-w-72 rounded-3xl'  placeholder="Search" />
          </div>
          <div className='flex gap-4 items-center'>
            <NavLink><img src={heart} alt="" /></NavLink>
            <NavLink><img src={korzina} alt="" /></NavLink>
          </div>
        </div>
      </nav>
      <main className='px-12 container '>
        <Outlet />
      </main>
      <footer className='px-12 bottom-0 fixed py-3 w-screen text-gray-500'>
        <div className='flex items-center py-8 justify-between'>
            <NavLink exact to="/allproducts" activeClassName="active">ALL PRODUCTS</NavLink>
            <NavLink exact to="/aboutseedra" activeClassName="active">ABOUT SEEDRA</NavLink>
            <NavLink exact to="/ourblog" activeClassName="active">OUR BLOG</NavLink>
            <img src={logo} alt="logo" />
            <NavLink exact to="/allproducts" activeClassName="active">Terms&Conditions</NavLink>
            <NavLink exact to="/aboutseedra" activeClassName="active">Privacy Policy</NavLink>
        </div>
        <hr />
        <div className='flex justify-between items-center py-2'>
            <div className='flex gap-4 items-center'>
                <NavLink><img src={heart} alt="" /></NavLink>
                <NavLink><img src={korzina} alt="" /></NavLink>
            </div>
            <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default GeneralLayout;
