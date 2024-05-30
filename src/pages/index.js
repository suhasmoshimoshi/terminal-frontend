import { useState } from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import { convertMarkdownToHtml } from '../components/MarkdownProcessor';

export default function Home() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleMarkdownChange = async (newMarkdown) => {
    setMarkdown(newMarkdown);
    const html = await convertMarkdownToHtml(newMarkdown);
    setHtml(html);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-black p-4 m-[0.1rem] relative">
        <h1 className="text-center text-green-500 text-xl font-mono flicker">🤖 Neokred Markdown Editor 🤖</h1>
      </header>

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full min-h-screen md:w-1/2 h-full">
          <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        </div>
        <div className="w-full md:w-1/2 h-full border-t border-gray-300 md:border-t-0 md:border-l">
          <Preview html={html} />
        </div>
      </div>
    </div>
  );
}
