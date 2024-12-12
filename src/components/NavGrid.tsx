import React from 'react';
import { NavCard } from './NavCard';
import { navItems } from '../data/navItems';

export function NavGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {navItems.map((item, index) => (
        <NavCard key={index} {...item} />
      ))}
    </div>
  );
}