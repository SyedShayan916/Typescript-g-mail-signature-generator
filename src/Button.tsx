import React from 'react';

interface IconCopyButtonProps {
  icon: string; // The Facebook icon you want to copy
}

const IconCopyButton: React.FC<IconCopyButtonProps> = ({ icon }) => {
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = icon;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <button onClick={copyToClipboard}>
      Copy Facebook Icon
    </button>
  );
};

export default IconCopyButton;
