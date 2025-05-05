import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BookGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;