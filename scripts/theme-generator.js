import { parseArgs } from 'node:util';

import theme from '../src/light-theme.template.json' with { type: 'json' };
import * as darkThemeTokens from '../src/light.js';

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

            const value = darkThemeTokens[token];

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

// // @todo I can avoid double stringify -> parse -> stringify if I read the theme template as string and use JSON.parse(tt, reviver) to interpolate the values
// import { readFileSync } from 'node:fs';
// const file = readFileSync('./src/theme.template.json', 'utf8');
console.log(JSON.stringify(theme, interpolateTokens, 4));
