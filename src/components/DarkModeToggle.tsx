import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="sr-only peer"
        />
        <div className="w-14 h-8 bg-gray-300 peer-checked:bg-gray-700 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 transition-colors duration-300 flex items-center justify-between px-1">
          <span className="text-yellow-400 text-sm">☀️</span>
          <span className="text-white text-sm">🌙</span>
        </div>
        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 transform peer-checked:translate-x-6" />
      </label>
    </div>
  );
};

export default DarkModeToggle;
