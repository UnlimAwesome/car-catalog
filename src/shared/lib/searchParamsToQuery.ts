import { ISearchParams } from '@/shared/lib/ISearchParams';

export function searchParamsToQuery(searchParams: ISearchParams) {
	return Object.entries(searchParams)
		.map(([key, value]) =>
			Array.isArray(value)
				? (value as string[]).map((v: string, i) => key + '[]=' + v).reduce((prev, next) => prev + '&' + next)
				: key + '=' + value
		)
		.reduce((prev, next) => prev + '&' + next);
}
