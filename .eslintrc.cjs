module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:astro/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: [
		'vue',
	],
	rules: {
	},
};
