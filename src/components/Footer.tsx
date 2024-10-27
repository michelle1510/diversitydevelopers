import { useState, useEffect } from "react";

export default function Footer() {

  useEffect(() => {
    const interval = setInterval(() => {
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            By @DiversityDevelopers2024
          </p>
          </span>
      <img 
        src="/assets/logo.webp" 
        alt="Logo" 
        className="w-14 h-14 object-contain mb-5"
      />
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
