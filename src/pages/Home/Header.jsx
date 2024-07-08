import { Button } from "antd";
import products from "../../components/api"
import { Link } from "react-router-dom";
import img1 from "../../assets/new-1.png";
import img2 from '../../assets/image-4.png'



function Header() {

    
    const product = products[4];

  return (
    <div>
        <div className="flex justify-between flex-wrap">
            <div className="max-w-2xl">
                <h1 className="text-5xl  font-bold">{product.title}</h1>
                <p className="max-w-xl my-8 leading-6 font-light">{product.description}</p>
                <div className="flex items-center gap-3  my-7">
                    {product.new ? <img src={img1}/>: ''}
                    <p className="font-extrabold text-4xl">${product.price}</p>
                    <p className="line-through font-bold text-2xl text-gray-500">${product.oldPrice}</p>
                </div>
                <div className="flex gap-3">
                    <Button className=" bg-green-600 p-6 text-white font-bold"><Link>Add to card</Link></Button>
                    <Button className="text-green-600 p-6 font-bold"><Link>Discover</Link></Button>
                </div>
            </div>
            <img src={img2} alt="ok" />
        </div>
    </div>
  )
}

export default Header