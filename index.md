---
title: Ellx Standard Library
---

<style>
  #md.wrapper ul, #md .container ul {
    font-size: 13px;
    line-height: 2;
    list-style-type: none;
    font-family: monospace;
    padding: 0rem 0.8rem;
    margin: 1rem 0;
    background: #EEE;
    margin-bottom: 2rem;
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
- *value* | '' | (String)
- *dense* | false | (Boolean)
- *outlined* | false | (Boolean)
- *size* | 2 | (Number)
- *label* | '' | (String)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)

##### Basic
{ input({ label: 'My field with a label'}) }

##### Numeric
Arbitrary props can be passed directly to the input including type.

{ input({ label: 'Numeric field', type: 'number' }) }

##### Dense
Most components support `dense` prop to be able to fit in exactly one cell on a sheet (size 20x100px).

{ input({ label: 'Numeric field', dense: true }) }

##### Disabled
{ input({ label: "Disabled", disabled: true }) }

##### Outlined
{ input({ label: "Outlined", outlined: true }) }

<br>

----

#### Button

- **PROPS**
- *dense* | false | (Boolean)
- *size* | 2 | (Number)
- *label* | '' | (String)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)
- *loading* | false | (Boolean)
- *onClick* | () => {} | (Function)


##### Basic
{ button({ label: "Submit" }) }

##### Dense
{ button({ label: "Submit", dense: true }) }

##### Disabled
{ button({ label: "Disabled", disabled: true }) }

##### Loading
{ button({ label: "Loading", loading: true }) }

##### Stale
{ button({ label: "Stale", stale: true }) }

<br>

----

#### Select

- *value* | '' | (String)
- *options* | [] | (Array)
- *label* | '' | (String)
- *outlined* | false | (Boolean)
- *dense* | false | (Boolean)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)

<small>*Selected value: {s}*</small>
{ s = select({ options: ['One', 'Two', 'Three'] })}

##### Dense
{ select({ options: ['One', 'Two', 'Three'], dense: true }) }

##### Disabled
{ select({ options: ['One', 'Two', 'Three'], disabled: true }) }

##### Outlined
{ select({ options: ['One', 'Two', 'Three'], outlined: true }) }


<br>

----

#### Checkbox

- **PROPS** <small>(name | default value | type)</small>
- *value* | '' | (String)
- *dense* | false | (Boolean)
- *label* | '' | (String)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)

{ checkbox({ label: "Submit" }) }

<br>

----


#### Radio button

- **PROPS** <small>(name | default value | type)</small>
- *value* | '' | (String)
- *options* | [] | (Array)
- *direction* | (horizontal|vertical) | (Enum)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)

##### Vertical (default)
{ radio({ options: typeOptions }) }

##### Horizontal
{ radio({ options: typeOptions, direction: 'horizontal' }) }

----

#### Toggle

- **PROPS**
- *value* | false | (Boolean)
- *label* | '' | (String)

{ toggle({ label: 'My switch' }) }

#### Slider

- **PROPS**
- *value* | 50 | (Number)
- *min* | 50 | (Number)
- *max* | 50 | (Number)
- *dense* | false | (Boolean)
- *size* | 2 | (Number)
- *disabled* | false | (Boolean)
- *stale* | false | (Boolean)

{ r = slider() }
{r}

<br>

----

#### Upload

Upload component exposes its only prop `value` which returns content of a file attached to the basic file input. Use `JSON.parse` to parse JSON and `ellx-hub/lib/utils/csv.js` to parse CSV files.

- **PROPS**
- *value* | null | (FileReader output)

{ up = upload()}

<div class="font-mono text-xs py-2">

{up}

</div>

<br>

----

#### Download

Download `value` as a file with MIME type `type`. Disabled if value is empty or null.

- **PROPS**
- *value* | null | Input file content as text
- *label* | '' | (String)
- *type* | 'text/plain' | (String)
- *filename* | '' | (String)

{ download({ value: up || 'test' }) }

----

#### Spinner

Standard Ellx progress indicator

- **PROPS**
- *size* | 20 | Input file content as text
- *dur* | '' | (String)
- *fill* | 'default' | (String)

{ spinner({ size: 70 }) }

----

#### Interval

Return specified value every `n` ms.

- **PROPS**
- *size* | 20 | Input file content as text
- *dur* | '' | (String)
- *fill* | 'default' | (String)

{ interval({ gen: () => Math.random(), ms: 500 }) }
