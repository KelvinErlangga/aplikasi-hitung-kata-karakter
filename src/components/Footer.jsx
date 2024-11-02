import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-950 p-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Katasaya. All Rights Reserved.</p>
        <div className="mt-2">
          <button className="text-gray-400 hover:text-white mx-2">Privacy Policy</button>
          <button className="text-gray-400 hover:text-white mx-2">Terms of Service</button>
          <button className="text-gray-400 hover:text-white mx-2">Help</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
