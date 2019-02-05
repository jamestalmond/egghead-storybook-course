import React from 'react';

export const Button = ({ bg, children }) => (
	<button
		style={{
			backgroundColor: bg,
			color: 'white',
			padding: '12px 24px',
			border: 'none',
			borderRadius: '4px',
			fontWeight: '700',
			fontSize: '14px'
		}}
	>
		{children}
	</button>
);
