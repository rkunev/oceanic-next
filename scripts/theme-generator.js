import { parseArgs } from 'node:util';

import theme from '../src/theme.template.json' with { type: 'json' };
import * as darkTheme from '../src/dark.js';
import * as lightTheme from '../src/light.js';

const args = parseArgs({
    args: process.argv.slice(2),
    options: {
        wip: {
            type: 'boolean',
        },
    },
});

if (args.values.wip) {
    theme.name += ' (WIP)';

    theme.themes.forEach((t) => (t.name += ' (WIP)'));
}

function interpolateTokens(key, value) {
    if (key.length && typeof value === 'string') {
        const result = value.replace(/^\{([\w]+)\}$/gi, (match, token) => {
            if (!token) {
                return match;
            }

            let value = darkTheme[token];

            if (typeof value !== 'undefined') {
                return value;
            }

            value = lightTheme[token];

            if (typeof value !== 'undefined') {
                return value;
            }

            console.warn(`Cannot resolve token - missing value: ${match}`);
            return match;
        });

        return result === 'null' ? null : result;
    }

    return value;
}

console.log(JSON.stringify(theme, interpolateTokens, 4));
