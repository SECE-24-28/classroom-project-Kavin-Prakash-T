const Footer=()=>{
  return(
    <>
    <div className="bg-slate-800 p-4 text-gray-300 flex items-center justify-around">
        <div className="flex flex-col justify-center flex-start p-2 w-[250px]">
            <h1 className="text-lg underline mb-2">Quick Links</h1>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Sitemaps</a>
        </div>
       <div className="flex flex-col justify-center flex-start p-2 w-[250px]">
            <h1 className="text-lg underline mb-2">Shop Now</h1>
            <a href="">Collections</a>
            <a href="">Trending Products</a>
            <a href="">New Arrival Products</a>
            <a href="">Sitemaps</a>
        </div>
        <div className="flex flex-col justify-center flex-start p-2 w-[250px]">
            <h1 className="text-lg underline mb-2">Reach Us</h1>
            <a href="">444,some main road, some area, some,street, bangalore,india -560077</a>
            <a href="">+91 888-xxx-xxxx</a>
            <a href="">e-shop@gmail.com</a>
        </div>
    </div>
    <div className="bg-slate-800 border-t border-gray-300 p-5 text-gray-300 text-center">
        © 2030 e-shop. All Rights Reserved.
    </div>
    </>
  )
}

export default Footer;