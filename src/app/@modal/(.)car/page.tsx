import { CarPage } from '@/pages-layer/CarPage';
import { CarModal } from '@/widgets/CarModal';
import { redirect } from 'next/navigation';

export default function Car({ searchParams }: { searchParams?: { id: string } }) {
	if (!searchParams || !searchParams.id) redirect('/404');
	return (
		<CarModal>
			<CarPage id={searchParams.id} />
		</CarModal>
	);
}
