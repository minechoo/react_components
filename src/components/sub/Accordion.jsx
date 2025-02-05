import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
			title: 'Section 1',
			content:
				'This is the content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			title: 'Section 2',
			content:
				'This is the content for section 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Section 3',
			content:
				'This is the content for section 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
		},
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-gray-900 text-lg">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-48' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className="p-6 text-gray-600 bg-gray-50 leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;