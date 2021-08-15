import frontmatter from 'remark-frontmatter';
import presetLintRecommended from 'remark-preset-lint-recommended';
import validateLinks from 'remark-validate-links';
import presetPrettier from 'remark-preset-prettier';

export default {
	plugins: [frontmatter, presetLintRecommended, validateLinks, presetPrettier],
};
