import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation(); // Correctly import 't' function from useTranslation

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value; // Get selected language
    i18n.changeLanguage(language); // Change language dynamically
  };

  return (
    <div>
      <LanguageSelector />
      <h1>{t('welcome')}</h1> {/* Use 't' to display translated text */}
      <select
        className="bg-[#2A254B] text-white border border-gray-500 rounded text-xs mr-2"
        aria-label="Language Select"
        onChange={handleLanguageChange} // Add onChange to handle language change
      >
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;