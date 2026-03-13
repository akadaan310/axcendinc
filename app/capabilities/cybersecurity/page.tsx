import type { Metadata } from 'next';
import CybersecurityContent from './CybersecurityContent';

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance',
};

export default function CybersecurityPage() {
  return <CybersecurityContent />;
}
