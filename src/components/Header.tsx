import React from 'react';
import { Banknote } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-center mb-6">
      <Banknote className="w-8 h-8 text-indigo-600 mr-2" />
      <h1 className="text-2xl font-bold text-gray-800">人民币大写转换</h1>
    </div>
  );
}