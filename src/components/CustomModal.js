// src/components/CustomModal.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMarkdown, clearCurrent } from '../redux/markdownSlice';

function CustomModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const markdown = useSelector((state) => state.markdown);
console.log()
  const handleSave = () => {
    dispatch(addMarkdown());
    onClose(markdown);
  };

  const handleCancel = () => {
    dispatch(clearCurrent());
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-lg font-bold mb-2">Markdown Preview</h2>
        <pre className="bg-gray-200 p-4 mb-4 rounded-lg">{markdown}</pre>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg" onClick={handleCancel}>Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
