import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Buttons', module)
	.add('Primary brand', () => <Button bg="#7fba23">Add to basket</Button>)
	.add('Secondary action', () => <Button bg="#0074cc">Help me choose</Button>);
