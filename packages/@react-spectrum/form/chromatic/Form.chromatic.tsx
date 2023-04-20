/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {Checkbox, CheckboxGroup} from '@react-spectrum/checkbox';
import {ComboBox} from '@react-spectrum/combobox';
import {Content} from '@react-spectrum/view';
import {ContextualHelp} from '@react-spectrum/contextualhelp';
import {Form} from '../';
import {Heading} from '@react-spectrum/text';
import {Item, Picker} from '@react-spectrum/picker';
import {Meta, Story} from '@storybook/react';
import {NumberField} from '@react-spectrum/numberfield';
import {Radio, RadioGroup} from '@react-spectrum/radio';
import React from 'react';
import {SearchField} from '@react-spectrum/searchfield';
import {SpectrumFormProps} from '@react-types/form';
import {TextArea, TextField} from '@react-spectrum/textfield';

const meta: Meta<SpectrumFormProps> = {
  title: 'Form',
  component: Form
};

export default meta;

let flatOptions = [
  {id: 1, name: 'Aardvark'},
  {id: 2, name: 'Kangaroo'},
  {id: 3, name: 'Snake'}
];

const Template = (): Story<SpectrumFormProps> => (args) => (
  <Form {...args}>
    <CheckboxGroup defaultValue={['dragons']} label="Pets">
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
    <ComboBox label="More Animals">
      <Item key="red panda">Red Panda</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    <NumberField label="Test" />
    <Picker label="Animals" placeholder="Choose an animal" items={flatOptions}>
      {item => <Item key={item.id}>{item.name}</Item>}
    </Picker>
    <RadioGroup defaultValue="dragons" label="Favorite pet" name="favorite-pet-group">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
      <Radio value="dragons">Dragons</Radio>
    </RadioGroup>
    <SearchField label="Search" />
    <TextArea label="Comments" placeholder="How do you feel?" />
    <TextField
      label="City"
      placeholder="San Francisco"
      contextualHelp={(
        <ContextualHelp>
          <Heading>What is a segment?</Heading>
          <Content>Segments identify who your visitors are, what devices and services they use, where they navigated from, and much more.</Content>
        </ContextualHelp>
      )} />
  </Form>
);

// No need to make a set of all permutations, rely on each individual component story to do that for us. Just make sure Form is passing the options down
export const Default = Template().bind({});
Default.name = 'default';
Default.args = {};

export const LabelPositionSide = Template().bind({});
LabelPositionSide.name = 'label position: side';
LabelPositionSide.args = {...Default.args, labelPosition: 'side'};

export const LabelAlignEnd = Template().bind({});
LabelAlignEnd.name = 'label align: end';
LabelAlignEnd.args = {...Default.args, labelAlign: 'end'};

export const LabelAlignSideEnd = Template().bind({});
LabelAlignSideEnd.name = 'label position: side, label align: end';
LabelAlignSideEnd.args = {...Default.args, labelPosition: 'side', labelAlign: 'end'};

export const Required = Template().bind({});
Required.name = 'isRequired';
Required.args = {...Default.args, isRequired: true};

export const NecessityIndicatorLabel = Template().bind({});
NecessityIndicatorLabel.name = 'necessity indicator: label';
NecessityIndicatorLabel.args = {...Default.args, necessityIndicator: 'label'};

export const Quiet = Template().bind({});
Quiet.name = 'isQuiet';
Quiet.args = {...Default.args, isQuiet: true};

export const Emphasized = Template().bind({});
Emphasized.name = 'isEmphasized';
Emphasized.args = {...Default.args, isEmphasized: true};

export const Disabled = Template().bind({});
Disabled.name = 'isDisabled';
Disabled.args = {...Default.args, isDisabled: true};

export const ReadOnly = Template().bind({});
ReadOnly.name = 'isReadOnly';
ReadOnly.args = {...Default.args, isReadOnly: true};

export const ValidationStateInvalid = Template().bind({});
ValidationStateInvalid.name = 'validationState: invalid';
ValidationStateInvalid.args = {...Default.args, validationState: 'invalid'};

export const ValidationStateValid = Template().bind({});
ValidationStateValid.name = 'validationState: valid';
ValidationStateValid.args = {...Default.args, validationState: 'valid'};
