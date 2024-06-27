import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const nextComponentRef = useRef(null);

  const scrollToNextComponent = () => {
    const page1Element = document.getElementById('page1');
    if (page1Element) {
      page1Element.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
  };

  return (
    <ScrollContext.Provider value={scrollToNextComponent}>
      {children(nextComponentRef)} {/* Pass the ref to children */}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;