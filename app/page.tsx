'use client'; // Ye Line 1 par hi rahe
import { useState } from 'react';
export default function Home () 
{
  // 1. Saare variables aur function yahan andar honay chahiye
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
    if (!url) return alert("Pehle link toh dalo!");
    setLoading(true);
    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      alert(data.message || "Website ka data save ho gaya!");
    } catch (err) {
      console.error('Full error:', err)
alert("Error: " + (err instanceof Error ? err.message : String(err)));
    }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4 italic">SiteMind AI</h1>
      <p className="text-gray-400 mb-12 tracking-widest">THE FUTURE OF BUSINESS PARTNERSHIP</p>

      <div className="flex w-full max-w-lg gap-2 p-2 bg-gray-900/50 rounded-2xl border border-gray-800">
        <input 
          type="text" 
          placeholder="Drop your website link here..." 
          className="flex-1 p-4 rounded-xl bg-transparent outline-none text-white"
          value={url} // Tag ke andar
          onChange={(e) => setUrl(e.target.value)} // Tag ke andar
        />
        <button 
          onClick={handleActivate} // Tag ke andar
          disabled={loading} // Tag ke andar
          className="bg-white text-black hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
        >
          {loading ? 'Processing...' : 'ACTIVATE AI'}
        </button>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8 text-center text-gray-500 text-xs tracking-tight">
        <p>ZERO CONFIGURATION</p>
        <p>REAL-TIME LEARNING</p>
        <p>24/7 ACTIVE PARTNER</p>
      </div>
    </main>
  );
}
