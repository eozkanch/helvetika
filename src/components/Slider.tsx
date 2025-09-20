'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => [
    {
      id: 1,
      title: "Trouvez facilement votre futur logement avec Helvetika",
      subtitle: "Solutions de location et reprise de bail à Genève",
      bgImage: "/images/je-suis-proprietaire.jpg"
    },
    {
      id: 2,
      title: "Reprise de bail simplifiée",
      subtitle: "Transférez votre bail en toute sécurité",
      bgImage: "/images/reprise-de-bail.jpg"
    },
    {
      id: 3,
      title: "Propriétaires, louez en confiance",
      subtitle: "Gestion complète de vos biens immobiliers",
      bgImage: "/images/resiliation-anticipee.jpg"
    }
  ], []);

  // Auto-slide functionality with reduced motion support
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  return (
    <section 
      className="relative w-full h-96 overflow-hidden"
      aria-label="Image carousel"
      role="region"
    >
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        aria-live="polite"
        aria-atomic="true"
      >
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className="w-full h-full flex-shrink-0 flex items-center justify-center relative overflow-hidden"
            aria-hidden={index !== currentSlide}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt=""
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
                quality={85}
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-8 max-w-5xl ">
              {/* Glassmorphism Background */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent drop-shadow-2xl">
                    {slide.title}
                  </span>
                </h2>
                <p className="text-md md:text-2xl text-white font-semibold mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
                  {slide.subtitle}
                </p>
                
                
                
               
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Previous slide"
        type="button"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label="Next slide"
        type="button"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
              index === currentSlide 
                ? 'bg-black' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
            type="button"
          />
        ))}
      </div>

   
    </section>
  );
}
