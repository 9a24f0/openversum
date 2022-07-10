import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';
import type { definitions } from '$lib/types/supabase';

export const customer = writable<definitions['customer'][]>();

export const loadCustomers = async () => {
	const { data, error } = await supabase.from<definitions['customer']>('customer').select();
	if (data) {
		customer.set(data);
	}
};
export const addCustomer = async (newCustomer: Omit<definitions['customer'], 'id'>) => {
	const { data, error } = await supabase.from('customer').insert(newCustomer);
	if (data) {
		customer.update((curr) => [...curr, data[0]]);
		return data[0];
	}
};
