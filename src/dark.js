const withAlpha = (value, opacity) => value.slice(0, -2) + Math.round(opacity * 255).toString(16);

// base tokens
const transparent = '#00000000';

const red_500 = '#ec5f67ff'; // oklch(0.668 0.174 20)

const brown_500 = '#ab7967ff'; // oklch(0.622 0.069 41)

const orange_500 = '#f99157ff'; // oklch(0.756 0.146 48)

const yellow_500 = '#fac863ff'; // oklch(0.858 0.131 83)

const green_500 = '#99c794ff'; // oklch(0.784 0.086 142)
const green_400 = '#c8dcc1ff'; // oklch(0.872 0.042 138)
const green_300 = '#dfeadbff'; // oklch(0.925 0.023 137)

const cyan_900 = '#1b3a40ff'; // oklch(0.327 0.038 212)
const cyan_800 = '#2f434eff'; // oklch(0.371 0.032 233)
const cyan_700 = '#4b6f7bff'; // oklch(0.519 0.045 221)
const cyan_600 = '#4b6f7b44'; // oklch(0.519 0.045 221 / 0.27)
const cyan_500 = '#5fb3b3ff'; // oklch(0.714 0.082 195)

const blue_500 = '#6699ccff'; // oklch(0.668 0.094 249)
const blue_200 = '#cdd3deff'; // oklch(0.866 0.017 263) | this could've been part of the neutral family, but until the light theme is ready I'll keep it as blue

const magenta_500 = '#c594c5ff'; // oklch(0.729 0.088 326)

const neutral_900 = '#12262fff'; // oklch(0.256 0.031 229)
const neutral_800 = '#152c35ff'; // oklch(0.279 0.033 225)
const neutral_700 = '#65737eff'; // oklch(0.548 0.024 242)
const neutral_600 = '#959da544'; // oklch(0.692 0.015 248 / 0.27)
const neutral_500 = '#959da533'; // oklch(0.692 0.015 248 / 0.2)

// Surface
export const background = neutral_900;
export const surface_background = neutral_800;
export const elevated_surface_background = background;
export const panel_background = background;
export const panel_focused_border = cyan_500; // focus outline in the file tree
export const panel_indent_guide = neutral_600;
export const panel_indent_guide_hover = cyan_700;
export const panel_indent_guide_active = neutral_700;
export const panel_overlay_background = null; // @todo no idea what this is
export const panel_overlay_hover = null; // @todo no idea what this is
export const pane_focused_border = panel_focused_border; // @todo no idea what this is

// Border
export const border = neutral_900; // a transparent border looks best for the editor/panels, but will make the checkbox in Markdown preview illegible
export const border_variant = cyan_900;
export const border_focused = panel_focused_border; // Git panel, file focus indicator
export const border_selected = blue_500; // @todo no idea what this is; one-dark uses the same value for hint/info/renamed border
export const border_transparent = transparent;
export const border_disabled = cyan_700; // @todo no idea what this is; one-dark and other built-in themes use the same value as hidden_border

// Text
export const text = blue_200;
export const text_muted = cyan_700;
export const text_placeholder = cyan_700;
export const text_disabled = cyan_700; // @todo maybe use a different dark gray color to diff between placeholder and disabled text?
export const text_accent = cyan_500;
export const link_text_hover = yellow_500;

// Icon
export const icon = text;
export const icon_muted = text_muted;
export const icon_disabled = cyan_700;
export const icon_accent = text_accent;

// Editor
export const editor_foreground = text;
export const editor_background = neutral_800;
export const editor_gutter_background = editor_background;
export const editor_active_line_background = cyan_800;
export const editor_highlighted_line_background = cyan_600;
export const editor_debugger_active_line_background = null; // @todo no idea what this is and built-in themes don't provide anything for this
export const editor_subheader_background = background; // Git panel and References panel, the collapsible file name accordion title box
export const editor_active_line_number = text;
export const editor_line_number = neutral_700;
export const editor_hover_line_number = cyan_500; // editor line number color on hover in the References panel
export const editor_invisible = neutral_700;
export const editor_wrap_guide = panel_indent_guide; // set `"wrap_guides": [80],` in settings to show the editor wrap guides
export const editor_active_wrap_guide = panel_indent_guide_active;
export const editor_indent_guide = panel_indent_guide;
export const editor_indent_guide_active = panel_indent_guide_active;
export const editor_document_highlight_read_background = cyan_600;
export const editor_document_highlight_write_background = withAlpha(neutral_700, 0.4); // @todo no idea what this is; other built-in themes use editor_invisible with 40% opacity
export const editor_document_highlight_bracket_background = cyan_600;
export const search_match_background = cyan_700;

// Navigation
export const status_bar_background = background;
export const title_bar_background = status_bar_background;
export const title_bar_inactive_background = status_bar_background;
export const toolbar_background = editor_background;

// Element
export const element_background = background;
export const element_hover = cyan_900; // this is the hover color of file tree items
export const element_active = neutral_800; // @todo no idea what this is
export const element_selected = neutral_800; // bg color of the currently opened file tree item
export const element_selection_background = null; // @todo no idea what this is
export const element_disabled = neutral_800; // @todo no idea what this is

// Ghost Element
export const ghost_element_background = transparent;
export const ghost_element_disabled = element_disabled;
export const ghost_element_hover = element_hover; // cmd palette line bg on hover
export const ghost_element_active = element_active;
export const ghost_element_selected = editor_active_line_background; // cmd pallete and intellisense line background

// Drop Target
export const drop_target_background = cyan_700;
export const drop_target_border = blue_200; // not used in the default Ayu/One themes; is in the default fallback theme with a contrasting light color close to drop target background

// Tabs
export const tab_bar_background = background;
export const tab_inactive_background = background;
export const tab_active_background = editor_background;

// Scrollbar
export const scrollbar_thumb_background = neutral_500;
export const scrollbar_thumb_hover_background = neutral_600;
export const scrollbar_thumb_active_background = neutral_500;
export const scrollbar_thumb_border = transparent;
export const scrollbar_track_background = editor_background;
export const scrollbar_track_border = background;

// Minimap
export const minimap_thumb_background = neutral_500;
export const minimap_thumb_hover_background = neutral_600;
export const minimap_thumb_active_background = neutral_500;
export const minimap_thumb_border = background;

// Status
export const hint = blue_500; // controls git lens commit author text color
export const hint_background = neutral_900;
export const hint_border = hint;
export const info = blue_500; // @todo hint and info are different colors in one dark, one light, and ayu light
export const info_background = neutral_900;
export const info_border = info;
export const success = green_500;
export const success_background = green_300;
export const success_border = green_400;
export const warning = orange_500;
export const warning_background = neutral_900;
export const warning_border = warning;
export const error = red_500;
export const error_background = neutral_900;
export const error_border = error;
export const created = success;
export const created_background = success_background;
export const created_border = success_border;
export const modified = warning;
export const modified_background = warning_background;
export const modified_border = warning_border;
export const deleted = red_500;
export const deleted_background = neutral_900;
export const deleted_border = deleted;
export const conflict = warning; // @todo this needs to be manually tested; oceanic-next v1 used a very light background and border for conflict and modified
export const conflict_background = warning_background;
export const conflict_border = warning_border;
export const renamed = blue_500;
export const renamed_background = neutral_900;
export const renamed_border = renamed;
export const hidden = cyan_700;
export const hidden_background = neutral_900;
export const hidden_border = hidden;
export const ignored = cyan_700;
export const ignored_background = neutral_900;
export const ignored_border = ignored;
export const predictive = cyan_700; // @todo haven't tested this; it may look wonky
export const predictive_background = green_300;
export const predictive_border = green_400;
export const unreachable = cyan_700; // @todo haven't tested this; it may look wonky
export const unreachable_background = neutral_900;
export const unreachable_border = unreachable;

// Version Control
export const version_control_added = green_500; // controls the color of the indicators in the gutter and the background of the git diff
export const version_control_deleted = red_500;
export const version_control_modified = orange_500;
export const version_control_renamed = blue_500;
export const version_control_conflict = orange_500; // @todo no idea what this is and needs a revisit
export const version_control_ignored = cyan_700; // @todo no idea what this is; ayu-light uses a gray color
export const version_control_conflict_marker_ours = green_300; // @todo haven't tested this; one-dark uses the same bg as success_background
export const version_control_conflict_marker_theirs = neutral_900; // @todo haven't tested this; one-dark uses the same bg as info_background

// Terminal
// bright colors are a hardcoded version of the regular color adjust by (94% lightness, +5.3% chroma, +2 hue)
// most terminals use the same color but a different font weight to represent dim colors
export const terminal_background = editor_background;
export const terminal_foreground = text;
export const terminal_bright_foreground = terminal_foreground;
export const terminal_dim_foreground = terminal_foreground;
export const terminal_ansi_red = red_500;
export const terminal_ansi_dim_red = terminal_ansi_red;
export const terminal_ansi_bright_red = '#e24e54';  // oklch(0.628 0.183 22)
export const terminal_ansi_blue = blue_500;
export const terminal_ansi_dim_blue = terminal_ansi_blue;
export const terminal_ansi_bright_blue = '#598cc2'; // oklch(0.628 0.099 251)
export const terminal_ansi_cyan = cyan_500;
export const terminal_ansi_dim_cyan = terminal_ansi_cyan;
export const terminal_ansi_bright_cyan = '#4ba6a8'; // oklch(0.671 0.086 197)
export const terminal_ansi_black = neutral_800;
export const terminal_ansi_dim_black = terminal_ansi_black;
export const terminal_ansi_bright_black = '#102832'; // oklch(0.262 0.035 227)
export const terminal_ansi_green = green_500;
export const terminal_ansi_dim_green = terminal_ansi_green;
export const terminal_ansi_bright_green = '#87b985'; // oklch(0.737 0.091 144)
export const terminal_ansi_white = text;
export const terminal_ansi_dim_white = terminal_ansi_white;
export const terminal_ansi_bright_white = '#bcc2ce'; // oklch(0.814 0.018 265)
export const terminal_ansi_yellow = yellow_500;
export const terminal_ansi_dim_yellow = terminal_ansi_yellow;
export const terminal_ansi_bright_yellow = '#e9b848'; // oklch(0.807 0.138 85)
export const terminal_ansi_magenta = magenta_500;
export const terminal_ansi_dim_magenta = terminal_ansi_magenta;
export const terminal_ansi_bright_magenta = '#b985b7'; // oklch(0.685 0.093 328)

// Players
export const players_0_cursor = text;
export const players_0_background = players_0_cursor;
export const players_0_selection = withAlpha(players_0_background, 0.24);
export const players_1_cursor = red_500;
export const players_1_background = players_1_cursor;
export const players_1_selection = withAlpha(players_1_background, 0.24);
export const players_2_cursor = blue_500;
export const players_2_background = players_2_cursor;
export const players_2_selection = withAlpha(players_2_background, 0.24);
export const players_3_cursor = cyan_500;
export const players_3_background = players_3_cursor;
export const players_3_selection = withAlpha(players_3_background, 0.24);
export const players_4_cursor = green_500;
export const players_4_background = players_4_cursor;
export const players_4_selection = withAlpha(players_4_background, 0.24);
export const players_5_cursor = yellow_500;
export const players_5_background = players_5_cursor;
export const players_5_selection = withAlpha(players_5_background, 0.24);
export const players_6_cursor = magenta_500;
export const players_6_background = players_6_cursor;
export const players_6_selection = withAlpha(players_6_background, 0.24);
export const players_7_cursor = brown_500;
export const players_7_background = players_7_cursor;
export const players_7_selection = withAlpha(players_7_background, 0.24);

// Comments & Docs
export const syntax_comment_color = neutral_700;
export const syntax_comment_doc_color = brown_500; // is this the tripple-slash type of comments in languages that support them like Rust

// Strings & Literals
export const syntax_string_color = green_500;
export const syntax_string_escape_color = syntax_comment_doc_color;
export const syntax_string_regex_color = orange_500;
export const syntax_string_special_color = syntax_string_color;
export const syntax_string_special_symbol_color = syntax_string_color;
export const syntax_text_literal_color = syntax_string_color;

// Numbers & Constants
export const syntax_number_color = orange_500;
export const syntax_boolean_color = syntax_number_color;
export const syntax_constant_color = yellow_500;

// Keywords & Operators
export const syntax_keyword_color = magenta_500;
export const syntax_operator_color = cyan_500;
export const syntax_preproc_color = text; // @todo no idea what this is

// Functions & Methods
export const syntax_function_color = blue_500;
export const syntax_constructor_color = blue_500; // oceanic v1 used orange, but I liked red (stands out from methods), but will keep it blue (subtle, same as method color)
export const syntax_attribute_color = syntax_keyword_color; // html attributes

// Types & Classes
export const syntax_type_color = blue_500;
export const syntax_enum_color = orange_500;
export const syntax_namespace_color = blue_200; // @todo no idea what this is, I'll just use the same as preproc
export const syntax_variant_color = blue_500; // @todo no idea what this is, I'll just use the same as syntax_type_color

// Variables & Properties
export const syntax_variable_color = text;
export const syntax_variable_special_color = blue_200; // @todo no idea what this is, but one dark theme uses a different color for variable and variable.special
export const syntax_property_color = yellow_500;
export const syntax_label_color = blue_500; // @todo no idea what this is

// Punctuation
export const syntax_punctuation_color = text;
export const syntax_punctuation_bracket_color = text;
export const syntax_punctuation_delimiter_color = syntax_operator_color;
export const syntax_punctuation_list_marker_color = orange_500; // @todo no idea what this is
export const syntax_punctuation_markup_color = orange_500; // @todo no idea what this is
export const syntax_punctuation_special_color = cyan_500; // @todo no idea what this is; ayu-light uses the same color as boolean

// Markup & Tags
export const syntax_tag_color = red_500;
export const syntax_title_color = orange_500; // @todo no idea where this is
export const syntax_emphasis_color = blue_500; // @todo no idea where this is
export const syntax_emphasis_strong_color = brown_500; // @todo no idea where this is
export const syntax_link_text_color = blue_500;
export const syntax_link_uri_color = syntax_link_text_color;
export const syntax_selector_color = orange_500; // @todo no idea what this is, but in one-dark it is the same as constant and in ayu-light it is the same as boolean and syntax_punctuation_special_color
export const syntax_selector_pseudo_color = magenta_500; // @todo no idea, but it is the same as attribute in one dark and ayu-light

// Other
export const syntax_primary_color = text;
export const syntax_embedded_color = text; // @todo no idea what this is; interestingly oceanic v1 uses green_700
export const syntax_predictive_color = cyan_700; // @todo no idea what this is
export const syntax_hint_color = magenta_500; // @todo no idea what this is; the other themes are using the same color as hint
