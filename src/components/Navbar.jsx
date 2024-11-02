import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          Kata<span className="text-orange-400">saya</span>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <button className="text-gray-300 hover:text-white">Beranda</button>
          </li>
          <li>
            <button className="text-gray-300 hover:text-white">Fitur</button>
          </li>
          <li>
            <button className="text-gray-300 hover:text-white">Tentang Kami</button>
          </li>
          <li>
            <button className="text-gray-300 hover:text-white">Kontak</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
