import path from 'path';
import { rollup } from 'rollup';
import loadConfigFile from 'rollup/dist/loadConfigFile';

export default function barrel(options = {}) {
	return {
		name: 'rollup-plugin-rollup',

		async load(id) {
			if (!id.endsWith('.rollup.js')) {
				return null;
			}

			const config = path.resolve(__dirname, id);
			const { options, warnings } = await loadConfigFile(config, { format: 'es' });
			warnings.flush();

			if (options.length != 1) {
				console.error(`${id} must produce a single output`);
				return null;
			}

			const bundle = await rollup(options[0]);
			const generated = await bundle.generate({ format: 'es' });
			const output = generated.output[0];

			return {
				code: `export default ${JSON.stringify(output.code)}`,
				map: { mappings: '' }
			};
		}
	}
}
