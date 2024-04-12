import frontmatter from 'remark-frontmatter';
import presetLintRecommended from 'remark-preset-lint-recommended';
import validateLinks from 'remark-validate-links';
import presetPrettier from 'remark-preset-prettier';

// NOTE: Support Alerts on GitHub Markdown.
// See https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
const overriddenLintNoUndefinedReferences = [
	'remark-lint-no-undefined-references',
	{
		allow: ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION'],
	},
];

export default {
	plugins: [
		frontmatter,
		presetLintRecommended,
		validateLinks,
		presetPrettier,
		overriddenLintNoUndefinedReferences,
	],
};
