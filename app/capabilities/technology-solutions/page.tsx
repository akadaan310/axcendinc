import type { Metadata } from 'next';
import TechSolutionsContent from './TechSolutionsContent';

export const metadata: Metadata = {
  title: 'Technology Solutions',
};

export default function TechnologySolutionsPage() {
  return <TechSolutionsContent />;
}
