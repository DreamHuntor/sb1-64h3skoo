import React from 'react';

interface AmountInputProps {
  amount: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AmountInput({ amount, onChange }: AmountInputProps) {
  return (
    <div>
      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
        输入金额
      </label>
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={onChange}
        placeholder="请输入金额"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
      />
      <p className="mt-1 text-sm text-gray-500">
        支持最大金额：9999亿9999万9999元99角9分
      </p>
    </div>
  );
}