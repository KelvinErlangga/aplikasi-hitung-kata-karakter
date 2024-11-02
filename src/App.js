import { useState, useEffect } from "react";
import "./App.css";
import Hasil from "./components/Hasil";
import InputKata from "./components/InputKata";
import PenghitungKata from "./controllers/PenghitungKata";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [text, setText] = useState("");
  const [jumlahKata, setJumlahKata] = useState(0);
  const [jumlahKarakter, setJumlahKarakter] = useState(0);
  const [savedTexts, setSavedTexts] = useState([]);

  // Ambil teks tersimpan dari local storage saat komponen dimuat
  useEffect(() => {
    const storedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
    setSavedTexts(storedTexts);
  }, []);

  // Handle perubahan input teks
  const handleInputChange = (inputText) => {
    setText(inputText);
    setJumlahKata(PenghitungKata.hitungKata(inputText)); // Update jumlah kata
    setJumlahKarakter(PenghitungKata.hitungKarakter(inputText)); // Update jumlah karakter
  };

  // Simpan teks ke local storage
  const handleSave = () => {
    if (text.trim()) {
      const newSavedTexts = [...savedTexts, text];
      setSavedTexts(newSavedTexts);
      localStorage.setItem("savedTexts", JSON.stringify(newSavedTexts));
      setText(""); // Kosongkan input form setelah klik simpan
      alert("Teks berhasil disimpan!");
    } else {
      alert("Silakan masukkan beberapa teks sebelum menyimpan!");
    }
  };

  // Hapus teks dari local storage
  const handleDelete = (index) => {
    const newSavedTexts = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(newSavedTexts);
    localStorage.setItem("savedTexts", JSON.stringify(newSavedTexts));
    alert("Teks berhasil dihapus!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 p-6">
        <h1 className="text-4xl text-center font-bold text-[#152c5b] mb-8">Aplikasi Penghitung Kata</h1>
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200 mx-auto">
          <InputKata text={text} onInputChange={handleInputChange} />
          <div className="flex justify-between mt-4">
            <button onClick={handleSave} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200">
              Simpan Teks
            </button>
          </div>
          <Hasil jumlahKata={jumlahKata} jumlahKarakter={jumlahKarakter} />

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800">Teks Tersimpan</h2>
            {savedTexts.length > 0 ? (
              <ul className="mt-2">
                {savedTexts.map((savedText, index) => (
                  <li key={index} className="border-b border-gray-300 py-2 text-gray-700 flex justify-between items-center">
                    <span>{savedText}</span>
                    <button onClick={() => handleDelete(index)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200">
                      Hapus
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Belum ada teks tersimpan.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
