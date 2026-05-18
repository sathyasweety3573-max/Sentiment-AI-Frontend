import { useState } from "react";
import Loader from "./Loader";

export default function SentimentBox() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setResult("Please type something 😅");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("https://sentiment-ai-backend.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      });

      const data = await response.json();

      setResult(data.sentiment || "No result received 😅");
    } catch (error) {
      console.log("ERROR:", error);
      setResult("Server Error 😢");
    } finally {
      setLoading(false);
    }
  };

  const startVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      setResult("Voice input not supported in this browser 😢");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };

    recognition.onerror = () => {
      setResult("Voice input error 😢");
    };

    recognition.start();
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 mt-10 w-full max-w-2xl">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your feelings here..."
        className="w-full h-40 p-5 rounded-2xl bg-white/20 text-white placeholder-gray-300 outline-none"
      />

      <div className="flex flex-wrap gap-4 justify-center mt-5">
        <button
          onClick={analyzeSentiment}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white px-6 py-3 rounded-2xl transition"
        >
          {loading ? "Analyzing..." : "Analyze ✨"}
        </button>

        <button
          onClick={startVoiceInput}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl transition"
        >
          Voice 🎤
        </button>
      </div>

      <div className="text-center mt-8">
        {loading ? (
          <Loader />
        ) : (
          <div className="text-3xl font-bold text-white animate-bounce">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
