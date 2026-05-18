export default function Navbar() {
  return (
    <div className="w-full p-5 flex justify-between items-center text-white">

      <h1 className="text-2xl font-bold">
        Sentiment AI 🤖
      </h1>

      <button className="bg-white/20 px-5 py-2 rounded-xl hover:bg-white/30 transition">
        Login
      </button>

    </div>
  )
}