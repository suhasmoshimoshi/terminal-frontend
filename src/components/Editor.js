// components/Editor.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMarkdown, removeMarkdown } from '../reducers/savedMarkdownSlice';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

function Editor({ onMarkdownChange }) {
  const [markdown, setMarkdown] = useState('');
  const [showTab, setShowTab] = useState(false);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const savedMarkdowns = useSelector((state) => state.savedMarkdown.entries);

  const handleSaveMarkdown = () => {
    if (markdown.trim() !== '') {
      dispatch(addMarkdown(markdown.trim())); // Trimming whitespace
      setMarkdown('');
    }
  };

  const handleDeleteMarkdown = (id) => {
    dispatch(removeMarkdown(id));
  };

  const copyMarkdownExample = () => {
    const markdownExample = `# Markdown Example

This is a **bold** text.

## Lists

- Item 1
- Item 2
- Item 3

## Code Block

\`\`\`javascript
function greet(name) {
 console.log(\`Hello, \${name}!\`);
}

greet('World');
\`\`\`

## Links

[Neokred](https://neokred.tech/)`;
    navigator.clipboard.writeText(markdownExample);
    setCopied(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-y-auto bg-black p-4">
      <div className="flex gap-5 sm:gap-2 justify-between mb-4">
        <button
          className="text-green-500 font-mono px-2 py-1 mb-2 rounded bg-gray-700"
          onClick={() => setShowTab(!showTab)}
        >
          {showTab ? 'Hide Saved Markdowns' : 'Show Saved Markdowns'}
        </button>
        <button
          className={`text-green-500 font-mono px-2 py-1 mb-2 rounded bg-gray-700 ${
            copied ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={copyMarkdownExample}
        >
          {copied ? 'Copied!' : 'Copy Markdown Example'}
        </button>
        <button
          className="text-green-500 font-mono px-2 py-1 mb-2 rounded bg-gray-700"
          onClick={handleSaveMarkdown}
        >
          Save Markdown
        </button>
      </div>
      {showTab && (
        <div className="mb-4">
          <h2 className="text-green-500 font-mono mb-2">Saved Markdowns:</h2>
          {savedMarkdowns.length === 0 ? (
            <p className="text-white">No saved markdowns. Add some markdowns!</p>
          ) : (
            <div className="bg-gray-900 p-2 rounded-lg font-mono text-white">
              {savedMarkdowns.map((entry) => (
                <div key={entry.id} className="mb-2">
                  <div className="relative border border-green-500 p-2">
                    <div className="whitespace-pre-line">{entry.content}</div>
                    <button
                      className="text-red-500 font-mono px-2 py-1 rounded bg-gray-700 absolute top-3 right-3"
                      onClick={() => handleDeleteMarkdown(entry.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <MdEditor
        className={`flex-grow bg-black text-green-500 font-mono p-4 rounded-lg outline-none resize-none ${
          showTab ? 'hidden' : ''
        }`}
        onChange={({ text }) => {
          setMarkdown(text);
          onMarkdownChange(text);
        }}
        value={markdown}
        view={{ menu: true, md: true, html: false }}
      />
    </div>
  );
}

export default Editor;