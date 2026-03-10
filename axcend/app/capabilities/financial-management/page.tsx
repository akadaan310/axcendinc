import type { Metadata } from 'next';
import FinancialContent from './FinancialContent';

export const metadata: Metadata = {
  title: 'Financial Management & FISCAM Auditing',
};

export default function FinancialManagementPage() {
  return <FinancialContent />;
}
