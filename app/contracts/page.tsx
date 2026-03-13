import type { Metadata } from 'next';
import ContractsContent from './ContractsContent';

export const metadata: Metadata = {
  title: 'Contract Vehicles',
};

export default function ContractsPage() {
  return <ContractsContent />;
}
