import Pretty from './Pretty.svelte';
import ellxify from '/utils/svelte.js';

export const pretty = ellxify(Pretty);

export default value => pretty({ value });
