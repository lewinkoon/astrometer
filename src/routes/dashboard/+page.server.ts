import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { logger } from '$lib/server/logger';

interface LastUpdate {
    "timestamp": string[];
    "temperature": number[];
    "humidity": number[];
    "pressure": number[];
}

export const load = (async () => {
    const res = await supabase
        .from('fake')
        .select('*')
        .limit(20)
        .order('timestamp', { ascending: true });

    const data: LastUpdate = {
        timestamp: res.data!.map(item => item.timestamp),
        temperature: res.data!.map(item => item.temperature),
        humidity: res.data!.map(item => item.humidity),
        pressure: res.data!.map(item => item.pressure),
    }

    logger.info(data);

    return data;
}) satisfies PageServerLoad;