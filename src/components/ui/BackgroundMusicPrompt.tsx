"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "bgMusicPreference";

// NOTE:
// You can (and should) replace this with a legally obtained audio file you own the rights to.
// Drop it at: public/audio/slide.mp3
const AUDIO_SRC = "/audio/slide.mp3";

const TRACK_LABEL = "Slide — Calvin Harris ft. Frank Ocean";

type Preference = "on" | "off" | null;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 7.5V16.5L17 12L9 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7.5 7H10V17H7.5V7Z" fill="currentColor" />
      <path d="M14 7H16.5V17H14V7Z" fill="currentColor" />
    </svg>
  );
}

export default function BackgroundMusicPrompt() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [preference, setPreference] = useState<Preference>(null);
  const [promptOpen, setPromptOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playError, setPlayError] = useState<string | null>(null);

  const shouldShowPrompt = useMemo(() => preference === null && promptOpen, [preference, promptOpen]);

  useEffect(() => {
    // Init audio once on mount.
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audioRef.current.addEventListener("play", onPlay);
    audioRef.current.addEventListener("pause", onPause);

    return () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      audioRef.current.removeEventListener("play", onPlay);
      audioRef.current.removeEventListener("pause", onPause);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Read saved preference.
    try {
      const saved =
        (window.localStorage.getItem(STORAGE_KEY) as Preference) ?? null;
      setPreference(saved);
      // If no preference yet, show the prompt after a beat.
      if (!saved) {
        const t = window.setTimeout(() => setPromptOpen(true), 700);
        return () => window.clearTimeout(t);
      }

      // If they previously enabled it, attempt to resume.
      // Browsers may block this without a new user gesture; we fail silently.
      if (saved === "on") {
        void audioRef.current
          ?.play()
          .then(() => setPlayError(null))
          .catch(() => {
            // If autoplay is blocked, the floating control can still start it.
            setPlayError("Autoplay was blocked — tap the music button to start.");
          });
      }
    } catch {
      setPreference(null);
      setPromptOpen(true);
    }
  }, []);

  const persistPreference = (next: Exclude<Preference, null>) => {
    setPreference(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const handleEnable = async () => {
    setPlayError(null);
    persistPreference("on");
    setPromptOpen(false);

    try {
      await audioRef.current?.play();
    } catch {
      setPlayError("Your browser said ‘no autoplay’. Click the music button again.");
    }
  };

  const handleDisable = () => {
    persistPreference("off");
    setPromptOpen(false);
    audioRef.current?.pause();
  };

  const togglePlayback = async () => {
    setPlayError(null);

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      persistPreference("off");
      return;
    }

    persistPreference("on");
    try {
      await audioRef.current.play();
    } catch {
      setPlayError("Tap again to start (autoplay restrictions 🙃).");
    }
  };

  // Respect reduced motion users by keeping the UX simple.
  return (
    <>
      <AnimatePresence>
        {shouldShowPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Background music prompt"
          >
            <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" />
            <motion.div
              initial={{ y: 14, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 8, opacity: 0, scale: 0.99 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="relative w-full max-w-lg rounded-2xl border border-line bg-paper shadow-[0_12px_60px_rgba(0,0,0,0.22)]"
            >
              <div className="p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-muted">
                  Main character settings
                </p>
                <h2 className="mt-2 font-editorial text-2xl sm:text-3xl text-ink leading-tight">
                  Turn on background music?
                </h2>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  It makes the site feel 12% more cinematic. source? trust me.
                  If your volume is at 100, don’t. please.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleEnable}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-5 py-3 text-paper font-semibold hover:bg-ink/90 transition-colors"
                    aria-label="Play background music"
                  >
                    <span className="inline-flex items-center justify-center size-9 rounded-full bg-paper/10">
                      <PlayIcon className="size-5 text-paper" />
                    </span>
                    Play
                  </button>

                  <button
                    type="button"
                    onClick={handleDisable}
                    className="inline-flex items-center justify-center rounded-full border border-line bg-paper px-5 py-3 text-ink font-semibold hover:bg-wash transition-colors"
                    aria-label="No background music"
                  >
                    No thanks
                  </button>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-muted">
                  Track: <span className="font-medium text-ink">{TRACK_LABEL}</span>
                </p>

                {playError && (
                  <p className="mt-4 text-sm text-accent">{playError}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control (always available) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {playError && preference !== null && (
          <div className="max-w-[240px] rounded-xl border border-line bg-paper px-3 py-2 text-xs text-accent shadow-sm">
            {playError}
          </div>
        )}

        <button
          type="button"
          onClick={togglePlayback}
          className="group inline-flex items-center gap-3 rounded-full border border-line bg-paper/90 px-4 py-2 shadow-sm backdrop-blur hover:bg-paper transition-colors"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          <span className="inline-flex items-center justify-center size-9 rounded-full bg-wash text-ink group-hover:bg-paper transition-colors">
            {isPlaying ? (
              <PauseIcon className="size-5" />
            ) : (
              <PlayIcon className="size-5" />
            )}
          </span>
          <span className="hidden sm:block text-sm text-ink">
            {isPlaying ? "Playing" : "Music"}
          </span>
        </button>
      </div>
    </>
  );
}
