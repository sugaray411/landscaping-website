import { useState, useEffect } from 'react'

interface LightboxProps {
  images: { src: string; alt: string }[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, isOpen, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, onClose, onNext, onPrev])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Image Container */}
      <div className="max-w-4xl max-h-full p-4 flex items-center justify-center">
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-4xl overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {}}
            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
              index === currentIndex ? 'border-white scale-110' : 'border-gray-500 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Background click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      />
    </div>
  )
}
