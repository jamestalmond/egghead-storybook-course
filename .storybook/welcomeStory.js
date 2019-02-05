import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('Intro', () => (
	<React.Fragment>
		<h1>Welcome to your new Storybook</h1>
		<p>This is my first Storybook.</p>
	</React.Fragment>
));
