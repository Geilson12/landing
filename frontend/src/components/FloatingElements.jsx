import React from 'react';
import { floatingElements } from '../data/mock';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute animate-${element.animation}`}
          style={{
            ...element.position,
            width: element.size,
            height: element.size,
          }}
        >
          <div
            className="w-full h-full opacity-20"
            style={{
              background: element.color,
              borderRadius: element.shape === 'sphere' ? '50%' : element.shape === 'cube' ? '8px' : '0',
              clipPath: element.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
              boxShadow: `0 0 20px ${element.color}40`,
              filter: 'blur(1px)',
            }}
          />
        </div>
      ))}
      
      {/* Neon corner glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-10 blur-3xl rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 opacity-10 blur-3xl rounded-full" />
    </div>
  );
};