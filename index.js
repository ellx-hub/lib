import ellxify from './components/svelte.js';
import Range from './components/Range.svelte';
import Select from './components/Select.svelte';
import Checkbox from './components/Checkbox.svelte';
import TextField from './components/TextField.svelte';
import Button from './components/Button.svelte';
import Radio from './components/Radio.svelte';

export const rangeInput = ellxify(Range);
export const select = ellxify(Select);
export const textField = ellxify(TextField);
export const button = ellxify(Button);
export const checkbox = ellxify(Checkbox);
export const radio = ellxify(Radio);
