module.exports = {
	plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
	importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^src/(.*)$', '^[./]'],
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	printWidth: 80,
	trailingComma: 'all',
};
