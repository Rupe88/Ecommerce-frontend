// src/globals/components/footer/Footer.jsx

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">Company</h2>
          <ul className="mt-4">
            <li className="py-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Careers</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">Support</h2>
          <ul className="mt-4">
            <li className="py-2"><a href="#" className="hover:underline">Help Center</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="py-2"><a href="#" className="hover:underline">Report a Problem</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div className="flex mt-4">
            <a href="#" className="mr-4 hover:text-gray-400">Facebook</a>
            <a href="#" className="mr-4 hover:text-gray-400">Twitter</a>
            <a href="#" className="mr-4 hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Rupesh Chaudhary. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
