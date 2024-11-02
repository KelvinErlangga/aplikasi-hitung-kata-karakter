import React from "react";

function Hasil({ jumlahKata, jumlahKarakter }) {
  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <h2 className="text-2xl font-bold text-gray-800">Hasil</h2>
      <p className="mt-2 text-lg text-gray-700">
        Jumlah Kata: <span className="font-semibold text-orange-600">{jumlahKata}</span>
      </p>
      <p className="mt-1 text-lg text-gray-700">
        Jumlah Karakter: <span className="font-semibold text-orange-600">{jumlahKarakter}</span>
      </p>
    </div>
  );
}

export default Hasil;
