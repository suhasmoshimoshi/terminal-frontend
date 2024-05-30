import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

function Preview({ html }) {
  const [cleanHTML, setCleanHTML] = useState('');

  useEffect(() => {
    const sanitizedHTML = DOMPurify.sanitize(html);
    setCleanHTML(sanitizedHTML);
  }, [html]);

  return (
    <div className="flex flex-col   h-screen overflow-y-auto bg-black text-green-500 font-mono">
  
      <div className="p-4 ">
        <div className="rounded-lg p-4 bg-gray-900 ">
          <h2 className="text-lg font-bold mb-2 text-white text-center border-[2px] p-2 rounded border-gray-300">Rendered HTML</h2>
          <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
        </div>
      </div>
      <div className="p-4 ">
        <div className="rounded-lg p-4 bg-gray-800 ">
          <h2 className="text-lg font-bold mb-2 text-white text-center border-[2px] p-2 rounded border-gray-300">Raw HTML</h2>
          <pre className="whitespace-pre-wrap text-yellow-300">{html}</pre>
        </div>
      </div>
    </div>
  );
}

export default Preview;
