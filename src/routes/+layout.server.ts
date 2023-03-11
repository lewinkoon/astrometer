import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load = (async () => {
	const { data } = await supabase
		.from('bmp280')
		.select('time,temperature,pressure')
		.limit(15)
		.order('time', { ascending: false });

	return {
		bmp280: data ?? []
	};
}) satisfies LayoutServerLoad;
