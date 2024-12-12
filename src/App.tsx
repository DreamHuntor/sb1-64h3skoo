import React from 'react';
import { Layout } from './components/Layout';
import { PageHeader } from './components/PageHeader';
import { NavGrid } from './components/NavGrid';

export default function App() {
  return (
    <Layout>
      <PageHeader 
        title="WatchCat"
        subtitle="实用在线工具集"
      />
      <NavGrid />
    </Layout>
  );
}