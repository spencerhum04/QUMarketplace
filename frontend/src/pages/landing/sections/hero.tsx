import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  searchActive: boolean;
  setSearchActive: (value: boolean) => void;
}

export default function Hero({ searchActive, setSearchActive }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSearchActive(false);
      }
    }

    if (searchActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchActive, setSearchActive]);

  return (
    <div className="w-full h-screen bg-slate-600">
      <div className="h-full flex flex-col items-center justify-center">
        <motion.div
          ref={containerRef}
          initial={false}
          animate={{
            top: searchActive ? 12.5 : '33vh',
            scale: searchActive ? 0.8 : 1,
          }}
          transition={{ stiffness: 200, damping: 20 }}
          className="w-3/5 flex flex-col items-center justify-center gap-y-8 z-50"
          style={{
            transform: 'translateX(-50%)',
            position: 'absolute',
          }}
        >
          {!searchActive && (
            <div className="text-5xl font-black text-white">QUMarketplace</div>
          )}
          <input
            name="searchbar"
            className="w-full bg-white rounded-full text-black px-6 py-4 shadow-xl outline-none"
            placeholder="Browse the catalogue"
            onFocus={() => setSearchActive(true)}
          />
        </motion.div>
      </div>
    </div>
  );
}