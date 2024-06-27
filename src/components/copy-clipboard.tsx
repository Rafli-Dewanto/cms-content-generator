import { Content } from "@/types";
import { Copy } from "lucide-react";
import React, { useState } from "react";

const CopyToClipBoard = ({ content }: { content: Content }) => {
  const [copiedMap, setCopiedMap] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (content: Content) => {
    navigator.clipboard.writeText(content?.content ?? "");

    const { id } = content;
    setCopiedMap(prevState => ({
      ...prevState,
      [id]: true,
    }));

    setTimeout(() => {
      setCopiedMap(prevState => ({
        ...prevState,
        [id]: false,
      }));
    }, 900);
  };
  return (
    <div className="relative flex items-center">
      <button onClick={() => handleCopy(content as Content)}>
        {copiedMap[content.id] ? (
          <p className="">Copied!</p>
        ) : (
          <Copy size={20} className="transition-colors hover:text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default CopyToClipBoard;
