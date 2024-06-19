import { CarPage } from '@/pages-layer/CarPage';
import { redirect } from 'next/navigation';

export default function Car({ searchParams }: { searchParams?: { id: string } }) {
	if (!searchParams || !searchParams.id) redirect('/404');
	return <CarPage id={searchParams.id} />;
}
