import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, color } from '@storybook/addon-knobs/react';

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
		})(() => <Button bg={color('bg', '#7fba23')}>Add to basket</Button>)
	)
	.addWithJSX('Secondary action', () => (
		<Button bg={color('bg', '#0074cc')}>Add to basket</Button>
	))
	.addWithJSX('Disabled', () => (
		<Button bg={color('bg', '#afb7c5')}>Add to basket</Button>
	));
