import type { Metadata } from 'next';
import InsightsContent from './InsightsContent';

export const metadata: Metadata = {
  title: 'Insights',
};

export default function InsightsPage() {
  return <InsightsContent />;
}
