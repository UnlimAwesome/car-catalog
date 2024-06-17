import { CatalogPage } from '@/pages/Catalog';
import { parseSearchParams } from '@/shared/lib/parseSearchParams';

export default function Home({ searchParams }: { searchParams: any }) {
	const parsedSearchParams = parseSearchParams(searchParams);

	console.log('🚀 ~ Home ~ parsedSearchParams:', parsedSearchParams);

	return <CatalogPage searchParams={parsedSearchParams} />;
}
