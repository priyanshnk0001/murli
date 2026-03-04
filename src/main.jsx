import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Second from './components/second.jsx'
import Third from './components/third.jsx'

function Main() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleItem = (item) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleNext = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    // Group selected items by category
    import('./data/menuData').then(({ menuData }) => {
      let message = "Selected Items Order:\n\n";
      let hasSelectedAny = false;

      // Iterate through all sections and columns in menuData
      const allSections = [menuData.section1, menuData.section2, menuData.section3];

      allSections.forEach(section => {
        section.forEach(column => {
          const itemsInCategory = column.items.filter(item => selectedItems.includes(item));

          if (itemsInCategory.length > 0) {
            hasSelectedAny = true;
            message += `*${column.title}*:\n`;
            itemsInCategory.forEach(item => {
              message += `- ${item}\n`;
            });
            message += "\n";
          }
        });
      });

      if (!hasSelectedAny) {
        // Fallback if somehow items were selected but not found in data
        message = `Selected Items:\n${selectedItems.map(item => `- ${item}`).join('\n')}`;
      }

      const encodedMessage = encodeURIComponent(message.trim());
      const phoneNumber = "9911907021"; // Using the number from the header
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
  };

  return (
    <StrictMode>
      <div className="pb-20">
        <App selectedItems={selectedItems} onToggleItem={handleToggleItem} />
        <br />
        <br />
        <Second selectedItems={selectedItems} onToggleItem={handleToggleItem} />
        <br /><br />
        <Third selectedItems={selectedItems} onToggleItem={handleToggleItem} />

        {selectedItems.length > 0 && (
          <button
            onClick={handleNext}
            className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-lg hover:bg-green-700 transition-all z-50 flex items-center gap-2"
          >
            Next (WhatsApp)
            <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {selectedItems.length}
            </span>
          </button>
        )}
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />)

