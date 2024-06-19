import { CatalogPage } from '@/pages-layer/Catalog';
import { parseSearchParams } from '@/shared/lib/parseSearchParams';

export default function Home({ searchParams }: { searchParams: any }) {
	const parsedSearchParams = parseSearchParams(searchParams);
	return <CatalogPage searchParams={parsedSearchParams} />;
}
