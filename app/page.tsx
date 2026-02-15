'use client';
import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Facebook, Instagram, Linkedin, Twitter, Github, Loader2 } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-black text-white">
      
      {/* LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
          <Loader2 className="w-10 h-10 animate-spin text-white mb-4" />
          <p className="tracking-[0.3em] uppercase text-xs text-zinc-500">Initializing 3D World...</p>
        </div>
      )}

      {/* HEADER */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-10 pointer-events-none w-full text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-[0.3em] uppercase pointer-events-auto bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          fahad.social
        </h1>
      </header>

      {/* 1. THE 3D SCENE */}
      <section className="h-screen w-full sticky top-0 z-0">
        <Spline 
          scene="/scene.splinecode" 
          onLoad={() => setLoading(false)} // This turns off the loading screen
          className="w-full h-full" 
        />
      </section>

      {/* 2. SOCIAL LINKS */}
      <div className="fixed top-1/2 -translate-y-1/2 left-[5%] md:left-[8%] z-50 pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-6 p-5 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <a href="https://github.com/omarbinfahad" target="_blank" className="hover:text-zinc-400 transition-colors"><Github size={26} /></a>
          <a href="https://facebook.com/fahadomarbin" target="_blank" className="hover:text-zinc-400 transition-colors"><Facebook size={26} /></a>
          <a href="https://instagram.com/o.marbf" target="_blank" className="hover:text-zinc-400 transition-colors"><Instagram size={26} /></a>
          <a href="https://x.com/fahadomarbin" target="_blank" className="hover:text-zinc-400 transition-colors"><Twitter size={26} /></a>
          <a href="https://linkedin.com/in/omarbinfahad" target="_blank" className="hover:text-zinc-400 transition-colors"><Linkedin size={26} /></a>
          <a href="mailto:fahadomarbin@email.com" className="hover:text-zinc-400 transition-colors"><Mail size={26} /></a>
        </div>
      </div>

      {/* 3. SCROLL DOWN CONTENT (FORM) */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black via-black/90 to-transparent px-8">
        <div className="w-full max-w-sm space-y-8 text-center">
          <h2 className="text-xl tracking-[0.4em] uppercase font-light text-zinc-400">Stay Connected</h2>
          
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-4">
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your email address" 
              className="bg-transparent border-b border-zinc-700 p-4 focus:outline-none focus:border-white transition-all text-center placeholder:text-zinc-600"
            />
            <button type="submit" className="mt-4 text-xs tracking-[0.5em] uppercase border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-40 text-center space-y-4">
          <p className="text-zinc-500 font-light text-sm italic">Thank you for visiting here.</p>
          <footer className="text-[10px] text-zinc-700 tracking-[0.4em] uppercase">
            Made with Love from Sydney, Australia
          </footer>
        </div>
      </section>

    </main>
  );
}