import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Buttons', module)
	.addWithJSX('Primary brand', () => (
		<Button bg="#7fba23">Add to basket</Button>
	))
	.addWithJSX('Secondary action', () => (
		<Button bg="#0074cc">Help me choose</Button>
	));
