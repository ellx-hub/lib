import Pretty from './Pretty.svelte';
import ellxify from '../../utils/svelte.js';

const ellxified = ellxify(Pretty);

const pretty = value => ellxified({ value });

export default pretty;
