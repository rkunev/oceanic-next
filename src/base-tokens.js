export const transparent = '#00000000';

export const red_600 = '#d6384bff'; // oklch(0.588 0.201 20)
export const red_500 = '#ec5f67ff'; // oklch(0.668 0.174 20)

export const brown_600 = '#a45f46ff'; // oklch(0.558 0.098 41)
export const brown_500 = '#ab7967ff'; // oklch(0.622 0.069 41)

export const orange_600 = '#ea8634ff'; // oklch(0.715 0.153 56)
export const orange_500 = '#f99157ff'; // oklch(0.756 0.146 48)

export const yellow_600 = '#d3ab0dff'; //  oklch(0.756 0.152 92) | I also liked #ebb80f
export const yellow_500 = '#fac863ff'; // oklch(0.858 0.131 83)

export const green_600 = '#5aa352ff'; // oklch(0.648 0.137 142)
export const green_500 = '#99c794ff'; // oklch(0.784 0.086 142)
export const green_400 = '#c8dcc1ff'; // oklch(0.872 0.042 138)
export const green_300 = '#dfeadbff'; // oklch(0.925 0.023 137)

export const cyan_900 = '#1b3a40ff'; // oklch(0.327 0.038 212)
export const cyan_800 = '#2f434eff'; // oklch(0.371 0.032 233)
export const cyan_700 = '#4b6f7bff'; // oklch(0.519 0.045 221)
export const cyan_600 = '#379a9aff'; // oklch(0.63 0.09 195)
export const cyan_500 = '#5fb3b3ff'; // oklch(0.714 0.082 195)
export const cyan_400 = '#d4e2e2ff'; // oklch(0.902 0.015 197)
export const cyan_300 = '#dde4e4ff'; // oklch(0.914 0.008 197)

export const blue_600 = '#3082cfff'; // oklch(0.595 0.141 250)
export const blue_500 = '#6699ccff'; // oklch(0.668 0.094 249)
export const blue_200 = '#cdd3deff'; // oklch(0.866 0.017 263) | this could've been part of the neutral family, but until the light theme is ready I'll keep it as blue

export const magenta_600 = '#a344a7ff'; // oklch(0.55 0.175 326) | I initially used a formula to shift the color towards a darker tone (l - 30%, c + 44% of magenta_500), but it was doo dim and desaturated in the light theme
export const magenta_500 = '#c594c5ff'; // oklch(0.729 0.088 326)

export const neutral_900 = '#12262fff'; // oklch(0.256 0.031 229)
export const neutral_800 = '#152c35ff'; // oklch(0.279 0.033 225)
export const neutral_700 = '#3f4b4bff'; // oklch(0.402 0.015 197)
export const neutral_600 = '#65737eff'; // oklch(0.548 0.024 242)
export const neutral_500 = '#959da5ff'; // oklch(0.692 0.015 248)
export const neutral_400 = '#e9eeeeff'; // oklch(0.945 0.005 197)
export const neutral_300 =  '#f4f6f6ff'; // oklch(0.972 0.002 197) | I really like #eff3f3ff which has a nice green tint, but I think not all people will like it as I do
export const neutral_200 = '#fafbfbff'; // oklch(0.987 0.001 197)

export const withAlpha = (value, opacity) => value.slice(0, -2) + Math.round(opacity * 255).toString(16);
