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
</style>

# Ellx standard library

### UI components

#### Text field


- **PROPS** <small>(name | default value | type)</small>
- *value* | '' | (String)
- *dense* | false | (Boolean)
- *size* | 2 | (Number)
- *label* | '' | (String)

##### Basic
{ textField({ label: 'My field with a label'}) }

##### Numeric
Arbitrary props can be passed directly to the input including type.

{ textField({ label: 'Numeric field', type: 'number' }) }

##### Dense
Most components support `dense` prop to be able to fit in exactly one cell on a sheet (size 20x100px).

{ textField({ label: 'Numeric field', dense: true }) }

<br>

----

#### Button

- **PROPS**
- *dense* | false | (Boolean)
- *size* | 2 | (Number)
- *label* | '' | (String)
- *onClick* | () => {} | (Function)


##### Basic
{ button({ label: "Submit" }) }

##### Dense
{ button({ label: "Submit", dense: true }) }

<br>

----

#### Select

- *value* | '' | (String)
- *options* | [] | (Array)
- *label* | '' | (String)
- *dense* | false | (Boolean)

<small>*Selected value: {s}*</small>
{ s = select({ options: ['One', 'Two', 'Three'] })}

<br>

----

#### Checkbox

- **PROPS** <small>(name | default value | type)</small>
- *value* | '' | (String)
- *dense* | false | (Boolean)
- *label* | '' | (String)

{ checkbox({ label: "Submit" }) }

<br>

----


#### Radio button

- **PROPS** <small>(name | default value | type)</small>
- *value* | '' | (String)
- *options* | [] | (Array)
- *direction* | (horizontal|vertical) | (Enum)

##### Vertical (default)
{ radio({ options: typeOptions }) }

##### Horizontal
{ radio({ options: typeOptions, direction: 'horizontal' }) }

#### Slider

- **PROPS**
- *value* | 50 | (Number)
- *min* | 50 | (Number)
- *max* | 50 | (Number)
- *dense* | false | (Boolean)
- *size* | 2 | (Number)

{ r = slider()}
{r}

<br>

----

#### Upload

Upload component exposes its only prop `value` which returns content of a file attached to the basic file input. Use `JSON.parse` to parse JSON and `ellx-hub/lib/utils/csv.js` to parse CSV files.

- **PROPS**
- *value* | null | (FileReader output)

{ up = upload()}
{up}

<br>

----