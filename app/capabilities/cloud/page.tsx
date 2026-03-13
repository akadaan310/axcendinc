import type { Metadata } from 'next';
import CloudContent from './CloudContent';

export const metadata: Metadata = {
  title: 'Cloud Architecture & Migration',
};

export default function CloudPage() {
  return <CloudContent />;
}
