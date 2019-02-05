import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Buttons', module)
	.addWithJSX(
		'Primary brand',
		withInfo({
			styles: {
				header: {
					h1: {
						color: 'red'
					}
				}
			},
			text: `
			description of the component
	
			~~~ js
			<Button>Click here </Button>
			~~~
			`
		})(() => <Button bg="#7fba23">Add to basket</Button>)
	)
	.addWithJSX('Secondary action', () => (
		<Button bg="#0074cc">Add to basket</Button>
	));
