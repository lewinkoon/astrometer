import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load = (async () => {
	const res = await supabase
		.from('bmp280')
		.select('time,temperature,pressure')
		.limit(20)
		.order('time', { ascending: false });

	return res;
}) satisfies LayoutServerLoad;
