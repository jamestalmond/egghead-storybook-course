import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
	.add('with brand background', () => (
		<Button bg="#7fba23">Add to basket</Button>
	))
	.add('with action background', () => (
		<Button bg="#0074cc">Help me choose</Button>
	));
