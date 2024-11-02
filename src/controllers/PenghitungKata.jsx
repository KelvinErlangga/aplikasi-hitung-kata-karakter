class PenghitungKata {
    static hitungKata(text) {
      const trimmedText = text.trim();
      if (!trimmedText) {
        return 0; // Return 0 jika teks kosong
      }
      const arrayKata = trimmedText.split(/\s+/);
      return arrayKata.length; // Return jumlah kata
    }
  
    static hitungKarakter(text) {
      return text.length; // Return jumlah karakter
    }
  }
  
  export default PenghitungKata;
  