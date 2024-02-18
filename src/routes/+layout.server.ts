import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { logger } from '$lib/server/logger';

export const load = (async () => {
	const res = await supabase
		.from('fake')
		.select('*')
		.limit(30)
		.order('time', { ascending: false });

	logger.info('Data loaded');

	return res;
}) satisfies LayoutServerLoad;
