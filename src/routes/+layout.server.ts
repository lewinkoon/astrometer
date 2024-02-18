import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load = (async () => {
	const res = await supabase
		.from('fake')
		.select('*')
		.limit(30)
		.order('time', { ascending: false });

	return res;
}) satisfies LayoutServerLoad;
