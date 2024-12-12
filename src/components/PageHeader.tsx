import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </header>
  );
}