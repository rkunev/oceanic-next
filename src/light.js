import {
    withAlpha,
    transparent,
    red_600,
    red_500,
    brown_600,
    brown_500,
    orange_600,
    orange_500,
    yellow_600,
    yellow_500,
    green_650,
    green_500,
    green_300,
    cyan_700,
    cyan_650,
    cyan_500,
    cyan_400,
    cyan_300,
    blue_600,
    blue_500,
    blue_200,
    magenta_600,
    magenta_500,
    neutral_800,
    neutral_700,
    neutral_600,
    neutral_500,
    neutral_400,
    neutral_300,
    neutral_200,
} from './base-tokens.js';

// Surface
export const background = neutral_400;
export const surface_background = neutral_300; // Markdown Preview, tripple backticks code snippet bg
export const elevated_surface_background = neutral_300;
export const panel_background = background;
export const panel_focused_border = cyan_650; // focus outline in the file tree
export const panel_indent_guide = withAlpha(neutral_600, 0.27);
export const panel_indent_guide_hover = cyan_650;
export const panel_indent_guide_active = neutral_500;
export const panel_overlay_background = null; // @todo no idea what this is; other themes aren't using it at all
export const panel_overlay_hover = null; // @todo no idea what this is; other themes aren't using it at all
export const pane_focused_border = panel_focused_border; // @todo no idea what this is

// Border
export const border = background; // a transparent border looks best for the editor/panels, but will make the checkbox in Markdown preview illegible
export const border_variant = panel_indent_guide;
export const border_focused = panel_focused_border; // Git panel, file focus indicator
export const border_selected = blue_600; // @todo no idea what this is; one-dark uses the same value for hint/info/renamed border
export const border_transparent = transparent;
export const border_disabled = cyan_700; // @todo no idea what this is; one-dark and other built-in themes use the same value as hidden_border

// Text
export const text = neutral_700;
export const text_muted = cyan_700;
export const text_placeholder = cyan_700;
export const text_disabled = withAlpha(cyan_700, 0.6);
export const text_accent = panel_focused_border;
export const link_text_hover = yellow_600;

// Icon
export const icon = text;
export const icon_muted = text_muted;
export const icon_disabled = withAlpha(cyan_700, 0.6);
export const icon_accent = text_accent;

// Editor
export const editor_foreground = text;
export const editor_background = neutral_200;
export const editor_gutter_background = editor_background;
export const editor_active_line_background = cyan_300;
export const editor_highlighted_line_background = cyan_400;
export const editor_debugger_active_line_background = null; // @todo no idea what this is and built-in themes don't provide anything for this
export const editor_subheader_background = background; // Git panel and References panel, the collapsible file name accordion title box
export const editor_active_line_number = text;
export const editor_line_number = neutral_500;
export const editor_hover_line_number = panel_focused_border; // editor line number color on hover in the References panel
export const editor_invisible = editor_line_number;
export const editor_wrap_guide = panel_indent_guide; // set `"wrap_guides": [80],` in settings to show the editor wrap guides
export const editor_active_wrap_guide = panel_indent_guide_active;
export const editor_indent_guide = panel_indent_guide;
export const editor_indent_guide_active = panel_indent_guide_active;
export const editor_document_highlight_read_background = withAlpha(cyan_500, 0.15); // highlights the current token (and everywhere it repeats)
export const editor_document_highlight_write_background = withAlpha(editor_invisible, 0.4); // @todo no idea what this is; other built-in themes use editor_invisible with 40% opacity
export const editor_document_highlight_bracket_background = withAlpha(cyan_500, 0.1); // adds a background to other occurances of the selection; also adds background for surrounding brackets
export const search_match_background = withAlpha(cyan_500, 0.1);
export const search_active_match_background = withAlpha(cyan_500, 0.6);

// Navigation
export const status_bar_background = background;
export const title_bar_background = status_bar_background;
export const title_bar_inactive_background = status_bar_background;
export const toolbar_background = editor_background;

// Element
export const element_background = background;
export const element_hover = cyan_400; // this is the hover bg color of file tree items
export const element_active = editor_background; // @todo no idea what this is
export const element_selected = editor_background; // bg color of the currently opened file tree item
export const element_selection_background = null; // @todo no idea what this is
export const element_disabled = editor_background; // @todo no idea what this is

// Ghost Element
export const ghost_element_background = transparent;
export const ghost_element_disabled = element_disabled;
export const ghost_element_hover = element_hover; // cmd palette line bg on hover
export const ghost_element_active = element_active;
export const ghost_element_selected = editor_active_line_background; // cmd pallete and intellisense line background

// Drop Target
export const drop_target_background = withAlpha(cyan_500, 0.4);
export const drop_target_border = blue_200; // not used in the default Ayu/One themes; is in the default fallback theme with a contrasting light color close to drop target background

// Tabs
export const tab_bar_background = background;
export const tab_inactive_background = background;
export const tab_active_background = editor_background;

// Scrollbar
export const scrollbar_thumb_background = withAlpha(neutral_500, 0.2);
export const scrollbar_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const scrollbar_thumb_active_background = withAlpha(neutral_500, 0.2);
export const scrollbar_thumb_border = transparent;
export const scrollbar_track_background = editor_background;
export const scrollbar_track_border = background;

// Minimap
export const minimap_thumb_background = withAlpha(neutral_500, 0.2);
export const minimap_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const minimap_thumb_active_background = withAlpha(neutral_500, 0.2);
export const minimap_thumb_border = background;

// Status
export const hint = magenta_600; // controls git lens commit author text color, and TypeScript hint popovers for unused declarations, and also the debugger marker in the gutter
export const hint_background = withAlpha(hint, 0.1);
export const hint_border = hint;
export const info = blue_600;
export const info_background = withAlpha(info, 0.1);
export const info_border = info;
export const success = green_650;
export const success_background = withAlpha(success, 0.1);
export const success_border = success;
export const warning = orange_600; // @todo test out if this needs a darker value for the light theme
export const warning_background = withAlpha(warning, 0.1);
export const warning_border = warning;
export const error = red_600;
export const error_background = withAlpha(error, 0.1);
export const error_border = error;
export const created = success; // color of file tree item that was just created
export const created_background = success_background;
export const created_border = success_border;
export const modified = warning;
export const modified_background = warning_background;
export const modified_border = warning_border;
export const deleted = error;
export const deleted_background = error_background;
export const deleted_border = error_border;
export const conflict = warning; // @todo this needs to be manually tested; oceanic-next v1 used a very light background and border for conflict and modified
export const conflict_background = warning_background;
export const conflict_border = warning_border;
export const renamed = blue_500;
export const renamed_background = withAlpha(renamed, 0.1);
export const renamed_border = renamed;
export const hidden = cyan_700;
export const hidden_background = withAlpha(hidden, 0.1);
export const hidden_border = hidden;
export const ignored = cyan_700;
export const ignored_background = withAlpha(ignored, 0.1);
export const ignored_border = ignored;
export const predictive = cyan_700; // @todo haven't tested this; it may look wonky
export const predictive_background = withAlpha(predictive, 0.1);
export const predictive_border = predictive;
export const unreachable = cyan_700; // @todo haven't tested this; it may look wonky
export const unreachable_background = withAlpha(unreachable, 0.1);
export const unreachable_border = unreachable;

// Version Control
export const version_control_added = green_500; // lighter colors look better; controls the color of the indicators in the gutter and the background of the git diff
export const version_control_deleted = red_500;
export const version_control_modified = orange_500;
export const version_control_renamed = blue_500;
export const version_control_conflict = orange_500; // @todo no idea what this is and needs a revisit
export const version_control_ignored = cyan_700; // @todo no idea what this is; ayu-light uses a gray color
export const version_control_conflict_marker_ours = green_300; // @todo haven't tested this; one-dark uses the same bg as success_background
export const version_control_conflict_marker_theirs = background; // @todo haven't tested this; one-dark uses the same bg as info_background

// Terminal
// bright colors are a hardcoded version of the regular color adjust by (+6% lightness, -5.3% chroma, -2 hue)
// most terminals use the same color but a different font weight to represent dim colors
export const terminal_background = editor_background;
export const terminal_foreground = text;
export const terminal_bright_foreground = terminal_foreground;
export const terminal_dim_foreground = terminal_foreground;
export const terminal_ansi_red = red_600;
export const terminal_ansi_dim_red = terminal_ansi_red;
export const terminal_ansi_bright_red = '#e2485aff'; // oklch(0.623 0.190 18)
export const terminal_ansi_blue = blue_600;
export const terminal_ansi_dim_blue = terminal_ansi_blue;
export const terminal_ansi_bright_blue = '#3c8fd6ff'; // oklch(0.631 0.134 248)
export const terminal_ansi_cyan = cyan_650;
export const terminal_ansi_dim_cyan = terminal_ansi_cyan;
export const terminal_ansi_bright_cyan = '#4ca5a3ff'; // oklch(0.668 0.085 193)
export const terminal_ansi_black = neutral_800;
export const terminal_ansi_dim_black = terminal_ansi_black;
export const terminal_ansi_bright_black = '#1b3038ff'; // oklch(0.296 0.031 223)
export const terminal_ansi_green = green_650;
export const terminal_ansi_dim_green = terminal_ansi_green;
export const terminal_ansi_bright_green = '#6dae5eff'; // oklch(0.687 0.130 140)
export const terminal_ansi_white = cyan_300;
export const terminal_ansi_dim_white = terminal_ansi_white;
export const terminal_ansi_bright_white = '#f0f6f6ff'; // oklch(0.969 0.007 195)
export const terminal_ansi_yellow = yellow_500;
export const terminal_ansi_dim_yellow = terminal_ansi_yellow;
export const terminal_ansi_bright_yellow = '#ffd87cff'; // oklch(0.909 0.124 81)
export const terminal_ansi_magenta = magenta_600;
export const terminal_ansi_dim_magenta = terminal_ansi_magenta;
export const terminal_ansi_bright_magenta = '#a952b2ff'; // oklch(0.583 0.166 324)

// Players
export const players_0_cursor = text; // a cyan color between 500 and 600 looks really good, but I don't like how you almost can't see the text cursor when cycling through search matches
export const players_0_background = cyan_500;
export const players_0_selection = withAlpha(cyan_500, 0.24);
export const players_1_cursor = red_500;
export const players_1_background = players_1_cursor;
export const players_1_selection = withAlpha(players_1_background, 0.24);
export const players_2_cursor = blue_500;
export const players_2_background = players_2_cursor;
export const players_2_selection = withAlpha(players_2_background, 0.24);
export const players_3_cursor = orange_500;
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
export const syntax_comment_color = editor_line_number;
export const syntax_comment_doc_color = brown_500; // is this the tripple-slash type of comments in languages that support them like Rust

// Strings & Literals
export const syntax_string_color = green_650;
export const syntax_string_escape_color = syntax_comment_doc_color;
export const syntax_string_regex_color = orange_600;
export const syntax_string_special_color = syntax_string_color;
export const syntax_string_special_symbol_color = syntax_string_color;
export const syntax_text_literal_color = syntax_string_color;

// Numbers & Constants
export const syntax_number_color = orange_600;
export const syntax_boolean_color = syntax_number_color;
export const syntax_constant_color = yellow_600;

// Keywords & Operators
export const syntax_keyword_color = magenta_600;
export const syntax_operator_color = cyan_650;
export const syntax_preproc_color = text; // @todo no idea what this is

// Functions & Methods
export const syntax_function_color = blue_600;
export const syntax_constructor_color = syntax_function_color; // oceanic v1 used orange, but I liked red (stands out from methods), but will keep it blue (subtle, same as method color)
export const syntax_attribute_color = syntax_keyword_color; // html attributes; @todo maybe try with red?

// Types & Classes
export const syntax_type_color = syntax_function_color;
export const syntax_enum_color = orange_600;
export const syntax_namespace_color = text; // @todo no idea what this is, I'll just use the same as preproc
export const syntax_variant_color = syntax_type_color; // @todo no idea what this is, I'll just use the same as syntax_type_color

// Variables & Properties
export const syntax_variable_color = text;
export const syntax_variable_special_color = brown_600; // Markdown Preview, tripple backticks code snippet
export const syntax_property_color = syntax_variable_special_color; // JSON keys, CSS properties
export const syntax_label_color = text; // Markdown Preview, tripple backticks code snippet; brackets

// Punctuation
export const syntax_punctuation_color = text;
export const syntax_punctuation_bracket_color = text;
export const syntax_punctuation_delimiter_color = syntax_operator_color;
export const syntax_punctuation_list_marker_color = orange_600; // @todo no idea what this is
export const syntax_punctuation_markup_color = orange_600; // Markdown color of list item markers, tripple backtick color, angle brackets, etc.
export const syntax_punctuation_special_color = cyan_500; // @todo no idea what this is; ayu-light uses the same color as boolean

// Markup & Tags
export const syntax_tag_color = syntax_type_color;
export const syntax_title_color = text; // Markdown, # headings
export const syntax_emphasis_color = cyan_650; // Markdown, _italic_
export const syntax_emphasis_strong_color = brown_500; // Markdown, **bolded**
export const syntax_link_text_color = cyan_650;
export const syntax_link_uri_color = blue_600;
export const syntax_selector_color = syntax_keyword_color; // @todo no idea what this is, but in one-dark it is the same as constant and in ayu-light it is the same as boolean and syntax_punctuation_special_color
export const syntax_selector_pseudo_color = text; // CSS pseudo

// Other
export const syntax_primary_color = text;
export const syntax_embedded_color = text; // @todo no idea what this is; interestingly oceanic v1 uses green_700
export const syntax_predictive_color = cyan_700; // @todo no idea what this is
export const syntax_hint_color = magenta_500; // @todo no idea what this is; the other themes are using the same color as hint
