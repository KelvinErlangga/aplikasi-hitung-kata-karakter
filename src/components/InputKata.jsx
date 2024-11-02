import React from "react";

function InputKata({ text, onInputChange }) {
  return (
    <div className="mb-6">
      <label className="block text-xl font-medium mb-2 text-gray-700">Masukkan kata</label>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 ease-in-out"
        rows="6"
        value={text}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Ketik atau tempel teks Anda disini..."
      ></textarea>
    </div>
  );
}

export default InputKata;
