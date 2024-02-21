import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase';

interface LastUpdate {
	date: string;
	temperature: number;
	humidity: number;
	pressure: number;
}

function formatDate(dateString: string) {
	const date = new Date(dateString);

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear().toString().slice(-2);

	return `${day}/${month}/${year}`;
}

export const load = (async () => {
	const res = await supabase
		.from('fake')
		.select('*')
		.limit(1)
		.order('timestamp', { ascending: true });

	const data: LastUpdate = {
		date: formatDate(res.data![0].timestamp),
		temperature: res.data![0].temperature,
		humidity: res.data![0].humidity,
		pressure: res.data![0].pressure
	}

	return data;
}) satisfies PageLoad;
