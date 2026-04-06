import {
    withAlpha,
    transparent,
    red_500,
    brown_500,
    orange_500,
    yellow_500,
    green_500,
    green_400,
    green_300,
    cyan_900,
    cyan_800,
    cyan_700,
    cyan_600,
    cyan_500,
    blue_500,
    blue_200,
    magenta_500,
    neutral_900,
    neutral_800,
    neutral_600,
    neutral_500,
} from './base-tokens.js';

// Surface
export const dark_background = neutral_900;
export const dark_surface_background = neutral_800;
export const dark_elevated_surface_background = dark_background;
export const dark_panel_background = dark_background;
export const dark_panel_focused_border = cyan_500; // focus outline in the file tree
export const dark_panel_indent_guide = withAlpha(neutral_600, 0.27);
export const dark_panel_indent_guide_hover = cyan_700;
export const dark_panel_indent_guide_active = neutral_600;
export const dark_panel_overlay_background = null; // @todo no idea what this is
export const dark_panel_overlay_hover = null; // @todo no idea what this is
export const dark_pane_focused_border = dark_panel_focused_border; // @todo no idea what this is

// Border
export const dark_border = neutral_900; // a transparent border looks best for the editor/panels, but will make the checkbox in Markdown preview illegible
export const dark_border_variant = cyan_900;
export const dark_border_focused = dark_panel_focused_border; // Git panel, file focus indicator
export const dark_border_selected = blue_500; // @todo no idea what this is; one-dark uses the same value for hint/info/renamed border
export const dark_border_transparent = transparent;
export const dark_border_disabled = cyan_700; // @todo no idea what this is; one-dark and other built-in themes use the same value as hidden_border

// Text
export const dark_text = blue_200;
export const dark_text_muted = cyan_700;
export const dark_text_placeholder = cyan_700;
export const dark_text_disabled = cyan_700;
export const dark_text_accent = cyan_500;
export const dark_link_text_hover = yellow_500;

// Icon
export const dark_icon = dark_text;
export const dark_icon_muted = dark_text_muted;
export const dark_icon_disabled = cyan_700;
export const dark_icon_accent = dark_text_accent;

// Editor
export const dark_editor_foreground = dark_text;
export const dark_editor_background = neutral_800;
export const dark_editor_gutter_background = dark_editor_background;
export const dark_editor_active_line_background = cyan_800;
export const dark_editor_highlighted_line_background = withAlpha(cyan_700, 0.27);
export const dark_editor_debugger_active_line_background = null; // @todo no idea what this is and built-in themes don't provide anything for this
export const dark_editor_subheader_background = dark_background; // Git panel and References panel, the collapsible file name accordion title box
export const dark_editor_active_line_number = dark_text;
export const dark_editor_line_number = neutral_600;
export const dark_editor_hover_line_number = cyan_500; // editor line number color on hover in the References panel
export const dark_editor_invisible = dark_editor_line_number;
export const dark_editor_wrap_guide = dark_panel_indent_guide; // set `"wrap_guides": [80],` in settings to show the editor wrap guides
export const dark_editor_active_wrap_guide = dark_panel_indent_guide_active;
export const dark_editor_indent_guide = dark_panel_indent_guide;
export const dark_editor_indent_guide_active = dark_panel_indent_guide_active;
export const dark_editor_document_highlight_read_background = withAlpha(blue_200, 0.1); // highlights the current token (and everywhere it repeats)
export const dark_editor_document_highlight_write_background = withAlpha(dark_editor_invisible, 0.4); // @todo no idea what this is; other built-in themes use editor_invisible with 40% opacity
export const dark_editor_document_highlight_bracket_background = transparent; // adds a background to other occurances of the selection; also adds background for surrounding brackets
export const dark_search_match_background = withAlpha(cyan_500, 0.15);
export const dark_search_active_match_background = withAlpha(cyan_600, 0.8);

// Navigation
export const dark_status_bar_background = dark_background;
export const dark_title_bar_background = dark_status_bar_background;
export const dark_title_bar_inactive_background = dark_status_bar_background;
export const dark_toolbar_background = dark_editor_background;

// Element
export const dark_element_background = dark_background;
export const dark_element_hover = cyan_900; // this is the hover color of file tree items
export const dark_element_active = neutral_800; // @todo no idea what this is
export const dark_element_selected = neutral_800; // bg color of the currently opened file tree item
export const dark_element_selection_background = null; // @todo no idea what this is
export const dark_element_disabled = neutral_800; // @todo no idea what this is

// Ghost Element
export const dark_ghost_element_background = transparent;
export const dark_ghost_element_disabled = dark_element_disabled;
export const dark_ghost_element_hover = dark_element_hover; // cmd palette line bg on hover
export const dark_ghost_element_active = dark_element_active;
export const dark_ghost_element_selected = dark_editor_active_line_background; // cmd pallete and intellisense line background

// Drop Target
export const dark_drop_target_background = withAlpha(cyan_700, 0.27);
export const dark_drop_target_border = blue_200; // not used in the default Ayu/One themes; is in the default fallback theme with a contrasting light color close to drop target background

// Tabs
export const dark_tab_bar_background = dark_background;
export const dark_tab_inactive_background = dark_background;
export const dark_tab_active_background = dark_editor_background;

// Scrollbar
export const dark_scrollbar_thumb_background = withAlpha(neutral_500, 0.2);
export const dark_scrollbar_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const dark_scrollbar_thumb_active_background = withAlpha(neutral_500, 0.2);
export const dark_scrollbar_thumb_border = transparent;
export const dark_scrollbar_track_background = dark_editor_background;
export const dark_scrollbar_track_border = dark_background;

// Minimap
export const dark_minimap_thumb_background = withAlpha(neutral_500, 0.2);
export const dark_minimap_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const dark_minimap_thumb_active_background = withAlpha(neutral_500, 0.2);
export const dark_minimap_thumb_border = dark_background;

// Status
export const dark_hint = magenta_500; // controls git lens commit author text color, and TypeScript hint popovers for unused declarations, and also the debugger marker in the gutter
export const dark_hint_background = neutral_900;
export const dark_hint_border = dark_hint;
export const dark_info = blue_500;
export const dark_info_background = neutral_900;
export const dark_info_border = dark_info;
export const dark_success = green_500;
export const dark_success_background = green_300;
export const dark_success_border = green_400;
export const dark_warning = orange_500;
export const dark_warning_background = neutral_900;
export const dark_warning_border = dark_warning;
export const dark_error = red_500;
export const dark_error_background = neutral_900;
export const dark_error_border = dark_error;
export const dark_created = dark_success; // color of file tree item that was just created
export const dark_created_background = dark_success_background;
export const dark_created_border = dark_success_border;
export const dark_modified = dark_warning;
export const dark_modified_background = dark_warning_background;
export const dark_modified_border = dark_warning_border;
export const dark_deleted = red_500;
export const dark_deleted_background = neutral_900;
export const dark_deleted_border = dark_deleted;
export const dark_conflict = dark_warning; // @todo this needs to be manually tested; oceanic-next v1 used a very light background and border for conflict and modified
export const dark_conflict_background = dark_warning_background;
export const dark_conflict_border = dark_warning_border;
export const dark_renamed = blue_500;
export const dark_renamed_background = neutral_900;
export const dark_renamed_border = dark_renamed;
export const dark_hidden = cyan_700;
export const dark_hidden_background = neutral_900;
export const dark_hidden_border = dark_hidden;
export const dark_ignored = cyan_700;
export const dark_ignored_background = neutral_900;
export const dark_ignored_border = dark_ignored;
export const dark_predictive = cyan_700; // @todo haven't tested this; it may look wonky
export const dark_predictive_background = green_300;
export const dark_predictive_border = green_400;
export const dark_unreachable = cyan_700; // @todo haven't tested this; it may look wonky
export const dark_unreachable_background = neutral_900;
export const dark_unreachable_border = dark_unreachable;

// Version Control
export const dark_version_control_added = green_500; // controls the color of the indicators in the gutter and the background of the git diff
export const dark_version_control_deleted = red_500;
export const dark_version_control_modified = orange_500;
export const dark_version_control_renamed = blue_500;
export const dark_version_control_conflict = orange_500; // @todo no idea what this is and needs a revisit
export const dark_version_control_ignored = cyan_700; // @todo no idea what this is; ayu-light uses a gray color
export const dark_version_control_conflict_marker_ours = green_300; // @todo haven't tested this; one-dark uses the same bg as success_background
export const dark_version_control_conflict_marker_theirs = neutral_900; // @todo haven't tested this; one-dark uses the same bg as info_background

// Terminal
// bright colors are a hardcoded version of the regular color adjust by (-6% lightness, +5.3% chroma, +2 hue)
// most terminals use the same color but a different font weight to represent dim colors
export const dark_terminal_background = dark_editor_background;
export const dark_terminal_foreground = dark_text;
export const dark_terminal_bright_foreground = dark_terminal_foreground;
export const dark_terminal_dim_foreground = dark_terminal_foreground;
export const dark_terminal_ansi_red = red_500;
export const dark_terminal_ansi_dim_red = dark_terminal_ansi_red;
export const dark_terminal_ansi_bright_red = '#e24e54ff'; // oklch(0.628 0.183 22)
export const dark_terminal_ansi_blue = blue_500;
export const dark_terminal_ansi_dim_blue = dark_terminal_ansi_blue;
export const dark_terminal_ansi_bright_blue = '#598cc2ff'; // oklch(0.628 0.099 251)
export const dark_terminal_ansi_cyan = cyan_500;
export const dark_terminal_ansi_dim_cyan = dark_terminal_ansi_cyan;
export const dark_terminal_ansi_bright_cyan = '#4ba6a8ff'; // oklch(0.671 0.086 197)
export const dark_terminal_ansi_black = neutral_800;
export const dark_terminal_ansi_dim_black = dark_terminal_ansi_black;
export const dark_terminal_ansi_bright_black = '#102832ff'; // oklch(0.262 0.035 227)
export const dark_terminal_ansi_green = green_500;
export const dark_terminal_ansi_dim_green = dark_terminal_ansi_green;
export const dark_terminal_ansi_bright_green = '#87b985ff'; // oklch(0.737 0.091 144)
export const dark_terminal_ansi_white = dark_text;
export const dark_terminal_ansi_dim_white = dark_terminal_ansi_white;
export const dark_terminal_ansi_bright_white = '#bcc2ceff'; // oklch(0.814 0.018 265)
export const dark_terminal_ansi_yellow = yellow_500;
export const dark_terminal_ansi_dim_yellow = dark_terminal_ansi_yellow;
export const dark_terminal_ansi_bright_yellow = '#e9b848ff'; // oklch(0.807 0.138 85)
export const dark_terminal_ansi_magenta = magenta_500;
export const dark_terminal_ansi_dim_magenta = dark_terminal_ansi_magenta;
export const dark_terminal_ansi_bright_magenta = '#b985b7ff'; // oklch(0.685 0.093 328)

// Players
export const dark_players_0_cursor = dark_text;
export const dark_players_0_background = dark_players_0_cursor;
export const dark_players_0_selection = withAlpha(dark_players_0_background, 0.24);
export const dark_players_1_cursor = red_500;
export const dark_players_1_background = dark_players_1_cursor;
export const dark_players_1_selection = withAlpha(dark_players_1_background, 0.24);
export const dark_players_2_cursor = blue_500;
export const dark_players_2_background = dark_players_2_cursor;
export const dark_players_2_selection = withAlpha(dark_players_2_background, 0.24);
export const dark_players_3_cursor = cyan_500;
export const dark_players_3_background = dark_players_3_cursor;
export const dark_players_3_selection = withAlpha(dark_players_3_background, 0.24);
export const dark_players_4_cursor = green_500;
export const dark_players_4_background = dark_players_4_cursor;
export const dark_players_4_selection = withAlpha(dark_players_4_background, 0.24);
export const dark_players_5_cursor = yellow_500;
export const dark_players_5_background = dark_players_5_cursor;
export const dark_players_5_selection = withAlpha(dark_players_5_background, 0.24);
export const dark_players_6_cursor = magenta_500;
export const dark_players_6_background = dark_players_6_cursor;
export const dark_players_6_selection = withAlpha(dark_players_6_background, 0.24);
export const dark_players_7_cursor = brown_500;
export const dark_players_7_background = dark_players_7_cursor;
export const dark_players_7_selection = withAlpha(dark_players_7_background, 0.24);

// Comments & Docs
export const dark_syntax_comment_color = neutral_600;
export const dark_syntax_comment_doc_color = brown_500; // tripple-slash comments in languages that support them like Rust

// Strings & Literals
export const dark_syntax_string_color = green_500;
export const dark_syntax_string_escape_color = dark_syntax_comment_doc_color;
export const dark_syntax_string_regex_color = orange_500;
export const dark_syntax_string_special_color = dark_syntax_string_color;
export const dark_syntax_string_special_symbol_color = dark_syntax_string_color;
export const dark_syntax_text_literal_color = dark_syntax_string_color;

// Numbers & Constants
export const dark_syntax_number_color = orange_500;
export const dark_syntax_boolean_color = dark_syntax_number_color;
export const dark_syntax_constant_color = dark_syntax_number_color;

// Keywords & Operators
export const dark_syntax_keyword_color = magenta_500;
export const dark_syntax_operator_color = cyan_500;
export const dark_syntax_preproc_color = dark_text; // @todo no idea what this is

// Functions & Methods
export const dark_syntax_function_color = blue_500;
export const dark_syntax_constructor_color = dark_syntax_function_color; // oceanic v1 used orange, but I liked red (stands out from methods), but will keep it blue (subtle, same as method color)
export const dark_syntax_attribute_color = dark_syntax_keyword_color; // html attributes

// Types & Classes
export const dark_syntax_type_color = blue_500;
export const dark_syntax_enum_color = orange_500;
export const dark_syntax_namespace_color = blue_200; // @todo no idea what this is, I'll just use the same as preproc
export const dark_syntax_variant_color = blue_500; // @todo no idea what this is, I'll just use the same as syntax_type_color

// Variables & Properties
export const dark_syntax_variable_color = dark_text;
export const dark_syntax_variable_special_color = blue_200; // Markdown Preview, tripple backticks code snippet
export const dark_syntax_property_color = yellow_500; // JSON keys, CSS properties
export const dark_syntax_label_color = blue_500;  // Markdown Preview, tripple backticks code snippet; brackets

// Punctuation
export const dark_syntax_punctuation_color = dark_text;
export const dark_syntax_punctuation_bracket_color = dark_text;
export const dark_syntax_punctuation_delimiter_color = dark_syntax_operator_color;
export const dark_syntax_punctuation_list_marker_color = orange_500; // @todo no idea what this is
export const dark_syntax_punctuation_markup_color = orange_500; // Markdown color of list item markers, tripple backtick color, angle brackets, etc.
export const dark_syntax_punctuation_special_color = cyan_500; // @todo no idea what this is; ayu-light uses the same color as boolean

// Markup & Tags
export const dark_syntax_tag_color = red_500;
export const dark_syntax_title_color = orange_500; // Markdown, # headings
export const dark_syntax_emphasis_color = blue_500; // Markdown, _italic_
export const dark_syntax_emphasis_strong_color = brown_500; // Markdown, **bolded**
export const dark_syntax_link_text_color = cyan_500;
export const dark_syntax_link_uri_color = blue_500;
export const dark_syntax_selector_color = dark_syntax_keyword_color; // CSS class/id selectors
export const dark_syntax_selector_pseudo_color = dark_text; // CSS pseudo

// Other
export const dark_syntax_primary_color = dark_text;
export const dark_syntax_embedded_color = dark_text; // @todo no idea what this is; interestingly oceanic v1 uses green_700
export const dark_syntax_predictive_color = cyan_700; // @todo no idea what this is
export const dark_syntax_hint_color = magenta_500; // @todo no idea what this is; the other themes are using the same color as hint
