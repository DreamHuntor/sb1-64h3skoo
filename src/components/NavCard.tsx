import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  color: string;
}

export function NavCard({ title, description, icon: Icon, url, color }: NavCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className={`bg-gradient-to-r ${color} p-6`}>
          <Icon className="w-12 h-12 text-white" />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}