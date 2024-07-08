import { Button, Input, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import insta from '../assets/ant-design_instagram-filled.png';
import facebook from '../assets/akar-icons_facebook-fill.png';
import heart from '../assets/heart.png'
import korzina from '../assets/korzina.png'
import { MenuOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';

function GeneralLayout() {


    const handleClick = () => {
        const navbarMenu = document.querySelector('.navbar-menu');
        if (navbarMenu) {
          navbarMenu.classList.toggle('max-lg:hidden');
          document.querySelector('main').classList.toggle('opacity-25');
        }
    }   
  return (
    <div>
      <nav className=" py-4 px-12 shadow-lg">
      <Header  style={{ display: 'flex', background: 'white', alignItems: 'center' }}> 
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ flex: 1, minWidth: 0 }}
        >
            <div className="container  flex items-center mx-auto justify-between text-gray-400 ">
                <img src={logo} alt="logo" />
                <div className="w-4/5 navbar-menu flex max-lg:hidden max-lg:w-2/3 max-lg:absolute max-lg:top-16 max-lg:border max-lg:p-8  max-lg:right-0 max-lg:flex-col gap-3 justify-evenly  items-center">
                    <NavLink  to="/allproducts">ALL PRODUCTS</NavLink>
                    <NavLink to="/aboutseedra">ABOUT SEEDRA</NavLink>
                    <NavLink to="/ourblog" >OUR BLOG</NavLink>
                    <NavLink to="/contacts" >CONTACTS</NavLink>
                    <NavLink to="/instagram">
                    <img src={insta} alt="Instagram" />
                    </NavLink>
                    <NavLink  to="/facebook">
                    <img src={facebook} alt="Facebook" />
                    </NavLink>
                    <Input.Search className='max-w-72 rounded-3xl'  placeholder="Search" />
                </div>
                <div className='flex gap-4 items-center'>
                    <NavLink><img src={heart} alt="" /></NavLink>
                    <NavLink><img src={korzina} alt="" /></NavLink>
                    <Button onClick={handleClick} className=' max-lg:block hidden pb-4' ><MenuOutlined /></Button>
                </div>
            </div>   
        </Menu>
        </Header>
      </nav>
      <main className='px-12 container '>
        <Outlet />
      </main>
      <footer className='px-12 bottom-0  fixed py-3 w-screen text-gray-500'>
        <div className='mx-auto container'>
            <div className='flex items-center py-8 justify-between flex-wrap gap-6'>
                <NavLink to="/allproducts" >ALL PRODUCTS</NavLink>
                <NavLink to="/aboutseedra" >ABOUT SEEDRA</NavLink>
                <NavLink to="/ourblog"     >OUR BLOG</NavLink>
                <img src={logo} alt="logo" />
                <NavLink to="/allproducts" >Terms&Conditions</NavLink>
                <NavLink to="/aboutseedra" >Privacy Policy</NavLink>
            </div>
            <hr />
            <div className='flex justify-between items-center py-2'>
                <div className='flex gap-4 items-center'>
                    <NavLink><img src={heart} alt="" /></NavLink>
                    <NavLink><img src={korzina} alt="" /></NavLink>
                </div>
                <p>All rights reserved</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default GeneralLayout;
