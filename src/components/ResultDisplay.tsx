import React from 'react';

interface ResultDisplayProps {
  result: string;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        大写结果
      </label>
      <div className="w-full min-h-[3rem] px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-lg text-gray-800 break-all">
          {result || '等待输入...'}
        </p>
      </div>
    </div>
  );
}