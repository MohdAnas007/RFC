import React from 'react';

function Top() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-6 py-4 transition-all duration-300 border-b border-zinc-200/50 bg-zinc-50/80 backdrop-blur-md md:px-12 md:py-6">
      <h1 className="text-3xl font-black tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-amber-600 md:text-4xl">
        RFC
      </h1>
    </header>
  );
}

export default Top;