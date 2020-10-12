---
title: Ellx Standard Library
---

<style>
  #md.wrapper ul {
    font-size: 13px;
    line-height: 2;
    list-style-type: none;
    font-family: monospace;
    padding: 0rem 0.8rem;
    margin: 1rem 0;
    background: #EEE;
    margin-bottom: 2rem;
  }

  #md.wrapper .tree ul {
    background: transparent;
  }

  .mode-dark #md ul {
    background: #444;
  }

  ul em, ul strong {
    letter-spacing: 0.4px;
  }

  p {
    padding: 1rem 0;
  }
</style>

# Ellx standard library

### UI components

#### Text field

- **PROPS** <small>(name | default value | type)</small>
- _value_ | '' | (String)
- _dense_ | false | (Boolean)
- _outlined_ | false | (Boolean)
- _size_ | 2 | (Number)
- _label_ | '' | (String)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)

##### Basic

{ input({ label: 'My field with a label'}) }

```
{ input({ label: 'My field with a label'}) }
```

##### Numeric

Arbitrary props can be passed directly to the input including type.

{ input({ label: 'Numeric field', type: 'number' }) }

```
{ input({ label: 'Numeric field', type: 'number' }) }
```

##### Dense

Most components support `dense` prop to be able to fit in exactly one cell on a sheet (size 20x100px).

{ input({ label: 'Numeric field', dense: true }) }

```
{ input({ label: 'Numeric field', dense: true }) }
```

##### Disabled

{ input({ label: "Disabled", disabled: true }) }

```
{ input({ label: "Disabled", disabled: true }) }
```

##### Outlined

{ input({ label: "Outlined", outlined: true }) }

```
{ input({ label: "Outlined", outlined: true }) }
```

<br>

---

#### Button

- **PROPS**
- _dense_ | false | (Boolean)
- _size_ | 2 | (Number)
- _label_ | '' | (String)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)
- _loading_ | false | (Boolean)
- _onClick_ | () => {} | (Function)

##### Basic

{ button({ label: "Submit" }) }

```
{ button({ label: "Submit" }) }
```

##### Dense

{ button({ label: "Submit", dense: true }) }

```
{ button({ label: "Submit", dense: true }) }
```

##### Disabled

{ button({ label: "Disabled", disabled: true }) }

```
{ button({ label: "Disabled", disabled: true }) }
```

##### Loading

{ button({ label: "Loading", loading: true }) }

```
{ button({ label: "Loading", loading: true }) }
```

##### Stale

{ button({ label: "Stale", stale: true }) }

```
{ button({ label: "Stale", stale: true }) }
```

<br>

---

#### Select

- _value_ | '' | (String)
- _options_ | [] | (Array)
- _label_ | '' | (String)
- _outlined_ | false | (Boolean)
- _dense_ | false | (Boolean)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)

<small>_Selected value: {s}_</small>
{ s = select({ options: ['One', 'Two', 'Three'] })}

```
{ s = select({ options: ['One', 'Two', 'Three'] })}
```

##### Dense

{ select({ options: ['One', 'Two', 'Three'], dense: true }) }

```
{ select({ options: ['One', 'Two', 'Three'], dense: true }) }
```

##### Disabled

{ select({ options: ['One', 'Two', 'Three'], disabled: true }) }

```
{ select({ options: ['One', 'Two', 'Three'], disabled: true }) }
```

##### Outlined

{ select({ options: ['One', 'Two', 'Three'], outlined: true }) }

```
{ select({ options: ['One', 'Two', 'Three'], outlined: true }) }
```

<br>

---

#### Checkbox

- **PROPS** <small>(name | default value | type)</small>
- _value_ | '' | (String)
- _dense_ | false | (Boolean)
- _label_ | '' | (String)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)

{ checkbox({ label: "Submit" }) }

```
{ checkbox({ label: "Submit" }) }
```

<br>

---

#### Radio button

- **PROPS** <small>(name | default value | type)</small>
- _value_ | '' | (String)
- _options_ | [] | (Array)
- _direction_ | (horizontal|vertical) | (Enum)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)

##### Vertical (default)

{ radio({ options: typeOptions }) }

```
{ radio({ options: typeOptions }) }
```

##### Horizontal

{ radio({ options: typeOptions, direction: 'horizontal' }) }

```
{ radio({ options: typeOptions, direction: 'horizontal' }) }
```

---

#### Toggle

- **PROPS**
- _value_ | false | (Boolean)
- _label_ | '' | (String)

{ toggle({ label: 'My switch' }) }

```
{ toggle({ label: 'My switch' }) }
```

#### Slider

- **PROPS**
- _value_ | 50 | (Number)
- _min_ | 50 | (Number)
- _max_ | 50 | (Number)
- _dense_ | false | (Boolean)
- _size_ | 2 | (Number)
- _disabled_ | false | (Boolean)
- _stale_ | false | (Boolean)

{ r = slider() }
{r}

```
{ r = slider() }
{r}
```

<br>

---

#### Upload

Upload component exposes its only prop `value` which returns content of a file attached to the basic file input. Use `JSON.parse` to parse JSON and `ellx-hub/lib/utils/csv.js` to parse CSV files.

- **PROPS**
- _value_ | null | (FileReader output)

{ up = upload()}

```
{ up = upload()}
```

<div class="font-mono text-xs py-2">

{up}

</div>

<br>

---

#### Download

Download `value` as a file with MIME type `type`. Disabled if value is empty or null.

- **PROPS**
- _value_ | null | Input file content as text
- _label_ | '' | (String)
- _type_ | 'text/plain' | (String)
- _filename_ | '' | (String)

{ download({ value: up || 'test' }) }

```
{ download({ value: up || 'test' }) }
```

---

#### Spinner

Standard Ellx progress indicator

- **PROPS**
- _size_ | 20 | Input file content as text
- _fill_ | '#000000' | (String)

{ spinner({ size: 70 }) }

```
{ spinner({ size: 70 }) }
```

---

#### Interval

Returns output of `gen` function every `ms` milliseconds.

- **PROPS**
- _ms_ | null | (Number)
- _gen_ | () => {} | (Function)

{ interval({ gen: () => Math.random(), ms: 500 }) }

```
{ interval({ gen: () => Math.random(), ms: 500 }) }
```

---

#### Pretty

Tiny wrapper over [svelte-json-tree](https://github.com/tanhauhau/svelte-json-tree). Outputs any object as an expandable treeview. Useful for debugging or displaying object values in real time.

- **PROPS**
- _value_ | null | any

{ pretty({ gen: () => Math.random(), ms: 500 }) }

```
{ interval({ gen: () => Math.random(), ms: 500 }) }
```
