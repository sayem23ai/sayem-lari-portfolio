import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music2 } from "lucide-react";
const preferenceKey = "sayem-audio";
function savedPreference() {
  try {
    return localStorage.getItem(preferenceKey) || "on";
  } catch {
    return "on";
  }
}
export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [volume, setVolume] = useState(0.18);
  const allowed = useRef(savedPreference() !== "off");
  const start = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !allowed.current) return;
    try {
      await audio.play();
      setOn(true);
      setFailed(false);
    } catch {
      setOn(false);
    }
  }, []);
  useEffect(() => {
    const audio = new Audio(
      import.meta.env.VITE_MUSIC_URL || "/audio/background-theme.wav",
    );
    audio.loop = true;
    audio.volume = 0.18;
    audio.preload = "none";
    audioRef.current = audio;
    audio.onerror = () => {
      setFailed(true);
      setOn(false);
    };
    void start();
    const firstInteraction = () => {
      if (allowed.current && audio.paused) void start();
    };
    document.addEventListener("pointerdown", firstInteraction);
    document.addEventListener("keydown", firstInteraction);
    return () => {
      document.removeEventListener("pointerdown", firstInteraction);
      document.removeEventListener("keydown", firstInteraction);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, [start]);
  function toggle() {
    const next = !allowed.current || !on;
    allowed.current = next;
    try {
      localStorage.setItem(preferenceKey, next ? "on" : "off");
    } catch {
      /* Audio remains usable without storage. */
    }
    if (next) void start();
    else {
      audioRef.current?.pause();
      setOn(false);
    }
  }
  return (
    <div className="audio-control" aria-label="Background music controls">
      <Music2 size={14} aria-hidden="true" />
      <button
        type="button"
        aria-pressed={on}
        onClick={toggle}
        aria-label={
          on ? "Turn background music off" : "Turn background music on"
        }
      >
        {failed ? "AUDIO UNAVAILABLE" : `MUSIC ${on ? "ON" : "OFF"}`}
      </button>
      <span className="audio-separator" />
      <button
        className="mute-button"
        type="button"
        aria-label={muted ? "Unmute music" : "Mute music"}
        aria-pressed={muted}
        onClick={() => {
          if (audioRef.current) audioRef.current.muted = !muted;
          setMuted(!muted);
        }}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
      <label className="volume-control">
        <span className="sr-only">Music volume</span>
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.01"
          value={volume}
          onChange={(e) => {
            const n = Number(e.target.value);
            setVolume(n);
            if (audioRef.current) audioRef.current.volume = n;
          }}
        />
      </label>
    </div>
  );
}
