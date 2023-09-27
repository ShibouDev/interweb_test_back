module.exports = {
	extends: ['prettier', 'eslint:recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', '@typescript-eslint', 'import'],
	root: true,
	env: {
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		React: true,
		google: true,
		mount: true,
		mountWithRouter: true,
		shallow: true,
		shallowWithRouter: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
	rules: {
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'import/no-anonymous-default-export': [
			'error',
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowCallExpression: true, // The true value here is for backward compatibility
				allowNew: false,
				allowLiteral: false,
				allowObject: false,
			},
		],
		'require-await': 'off',
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
				warnOnUnassignedImports: true,
			},
		],
		'max-len': ['error', { code: 150, comments: 200 }],
		'prettier/prettier': 'error',
		'jsx-a11y/href-no-hash': 0,
	},
};
