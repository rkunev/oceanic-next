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
    green_600,
    green_500,
    green_300,
    cyan_700,
    cyan_600,
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
export const light_background = neutral_400;
export const light_surface_background = neutral_300; // Markdown Preview, tripple backticks code snippet bg
export const light_elevated_surface_background = neutral_300;
export const light_panel_background = light_background;
export const light_panel_focused_border = cyan_600; // focus outline in the file tree
export const light_panel_indent_guide = withAlpha(neutral_600, 0.27);
export const light_panel_indent_guide_hover = cyan_600;
export const light_panel_indent_guide_active = neutral_500;
export const light_panel_overlay_background = null; // @todo no idea what this is; other themes aren't using it at all
export const light_panel_overlay_hover = null; // @todo no idea what this is; other themes aren't using it at all
export const light_pane_focused_border = light_panel_focused_border; // @todo no idea what this is

// Border
export const light_border = light_background; // a transparent border looks best for the editor/panels, but will make the checkbox in Markdown preview illegible
export const light_border_variant = light_panel_indent_guide;
export const light_border_focused = light_panel_focused_border; // Git panel, file focus indicator
export const light_border_selected = blue_600; // @todo no idea what this is; one-dark uses the same value for hint/info/renamed border
export const light_border_transparent = transparent;
export const light_border_disabled = cyan_700; // @todo no idea what this is; one-dark and other built-in themes use the same value as hidden_border

// Text
export const light_text = neutral_700;
export const light_text_muted = cyan_700;
export const light_text_placeholder = cyan_700;
export const light_text_disabled = withAlpha(cyan_700, 0.6);
export const light_text_accent = light_panel_focused_border;
export const light_link_text_hover = yellow_600;

// Icon
export const light_icon = light_text;
export const light_icon_muted = light_text_muted;
export const light_icon_disabled = withAlpha(cyan_700, 0.6);
export const light_icon_accent = light_text_accent;

// Editor
export const light_editor_foreground = light_text;
export const light_editor_background = neutral_200;
export const light_editor_gutter_background = light_editor_background;
export const light_editor_active_line_background = cyan_300;
export const light_editor_highlighted_line_background = cyan_400;
export const light_editor_debugger_active_line_background = null; // @todo no idea what this is and built-in themes don't provide anything for this
export const light_editor_subheader_background = light_background; // Git panel and References panel, the collapsible file name accordion title box
export const light_editor_active_line_number = light_text;
export const light_editor_line_number = neutral_500;
export const light_editor_hover_line_number = light_panel_focused_border; // editor line number color on hover in the References panel
export const light_editor_invisible = light_editor_line_number;
export const light_editor_wrap_guide = light_panel_indent_guide; // set `"wrap_guides": [80],` in settings to show the editor wrap guides
export const light_editor_active_wrap_guide = light_panel_indent_guide_active;
export const light_editor_indent_guide = light_panel_indent_guide;
export const light_editor_indent_guide_active = light_panel_indent_guide_active;
export const light_editor_document_highlight_read_background = withAlpha(cyan_500, 0.15); // highlights the current token (and everywhere it repeats)
export const light_editor_document_highlight_write_background = withAlpha(light_editor_invisible, 0.4); // @todo no idea what this is; other built-in themes use editor_invisible with 40% opacity
export const light_editor_document_highlight_bracket_background = withAlpha(cyan_500, 0.1); // adds a background to other occurances of the selection; also adds background for surrounding brackets
export const light_search_match_background = withAlpha(cyan_500, 0.1);
export const light_search_active_match_background = withAlpha(cyan_500, 0.6);

// Navigation
export const light_status_bar_background = light_background;
export const light_title_bar_background = light_status_bar_background;
export const light_title_bar_inactive_background = light_status_bar_background;
export const light_toolbar_background = light_editor_background;

// Element
export const light_element_background = light_background;
export const light_element_hover = cyan_400; // this is the hover bg color of file tree items
export const light_element_active = light_editor_background; // @todo no idea what this is
export const light_element_selected = light_editor_background; // bg color of the currently opened file tree item
export const light_element_selection_background = null; // @todo no idea what this is
export const light_element_disabled = light_editor_background; // @todo no idea what this is

// Ghost Element
export const light_ghost_element_background = transparent;
export const light_ghost_element_disabled = light_element_disabled;
export const light_ghost_element_hover = light_element_hover; // cmd palette line bg on hover
export const light_ghost_element_active = light_element_active;
export const light_ghost_element_selected = light_editor_active_line_background; // cmd pallete and intellisense line background

// Drop Target
export const light_drop_target_background = withAlpha(cyan_500, 0.4);
export const light_drop_target_border = blue_200; // not used in the default Ayu/One themes; is in the default fallback theme with a contrasting light color close to drop target background

// Tabs
export const light_tab_bar_background = light_background;
export const light_tab_inactive_background = light_background;
export const light_tab_active_background = light_editor_background;

// Scrollbar
export const light_scrollbar_thumb_background = withAlpha(neutral_500, 0.2);
export const light_scrollbar_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const light_scrollbar_thumb_active_background = withAlpha(neutral_500, 0.2);
export const light_scrollbar_thumb_border = transparent;
export const light_scrollbar_track_background = light_editor_background;
export const light_scrollbar_track_border = light_background;

// Minimap
export const light_minimap_thumb_background = withAlpha(neutral_500, 0.2);
export const light_minimap_thumb_hover_background = withAlpha(neutral_500, 0.27);
export const light_minimap_thumb_active_background = withAlpha(neutral_500, 0.2);
export const light_minimap_thumb_border = light_background;

// Status
export const light_hint = magenta_600; // controls git lens commit author text color, and TypeScript hint popovers for unused declarations, and also the debugger marker in the gutter
export const light_hint_background = withAlpha(light_hint, 0.1);
export const light_hint_border = light_hint;
export const light_info = blue_600;
export const light_info_background = withAlpha(light_info, 0.1);
export const light_info_border = light_info;
export const light_success = green_600;
export const light_success_background = withAlpha(light_success, 0.1);
export const light_success_border = light_success;
export const light_warning = orange_600; // @todo test out if this needs a darker value for the light theme
export const light_warning_background = withAlpha(light_warning, 0.1);
export const light_warning_border = light_warning;
export const light_error = red_600;
export const light_error_background = withAlpha(light_error, 0.1);
export const light_error_border = light_error;
export const light_created = light_success; // color of file tree item that was just created
export const light_created_background = light_success_background;
export const light_created_border = light_success_border;
export const light_modified = light_warning;
export const light_modified_background = light_warning_background;
export const light_modified_border = light_warning_border;
export const light_deleted = light_error;
export const light_deleted_background = light_error_background;
export const light_deleted_border = light_error_border;
export const light_conflict = light_warning; // @todo this needs to be manually tested; oceanic-next v1 used a very light background and border for conflict and modified
export const light_conflict_background = light_warning_background;
export const light_conflict_border = light_warning_border;
export const light_renamed = blue_500;
export const light_renamed_background = withAlpha(light_renamed, 0.1);
export const light_renamed_border = light_renamed;
export const light_hidden = cyan_700;
export const light_hidden_background = withAlpha(light_hidden, 0.1);
export const light_hidden_border = light_hidden;
export const light_ignored = cyan_700;
export const light_ignored_background = withAlpha(light_ignored, 0.1);
export const light_ignored_border = light_ignored;
export const light_predictive = cyan_700; // @todo haven't tested this; it may look wonky
export const light_predictive_background = withAlpha(light_predictive, 0.1);
export const light_predictive_border = light_predictive;
export const light_unreachable = cyan_700; // @todo haven't tested this; it may look wonky
export const light_unreachable_background = withAlpha(light_unreachable, 0.1);
export const light_unreachable_border = light_unreachable;

// Version Control
export const light_version_control_added = green_500; // lighter colors look better; controls the color of the indicators in the gutter and the background of the git diff
export const light_version_control_deleted = red_500;
export const light_version_control_modified = orange_500;
export const light_version_control_renamed = blue_500;
export const light_version_control_conflict = orange_500; // @todo no idea what this is and needs a revisit
export const light_version_control_ignored = cyan_700; // @todo no idea what this is; ayu-light uses a gray color
export const light_version_control_conflict_marker_ours = green_300; // @todo haven't tested this; one-dark uses the same bg as success_background
export const light_version_control_conflict_marker_theirs = light_background; // @todo haven't tested this; one-dark uses the same bg as info_background

// Terminal
// bright colors are a hardcoded version of the regular color adjust by (+6% lightness, -5.3% chroma, -2 hue)
// most terminals use the same color but a different font weight to represent dim colors
export const light_terminal_background = light_editor_background;
export const light_terminal_foreground = light_text;
export const light_terminal_bright_foreground = light_terminal_foreground;
export const light_terminal_dim_foreground = light_terminal_foreground;
export const light_terminal_ansi_red = red_600;
export const light_terminal_ansi_dim_red = light_terminal_ansi_red;
export const light_terminal_ansi_bright_red = '#e2485aff'; // oklch(0.623 0.190 18)
export const light_terminal_ansi_blue = blue_600;
export const light_terminal_ansi_dim_blue = light_terminal_ansi_blue;
export const light_terminal_ansi_bright_blue = '#3c8fd6ff'; // oklch(0.631 0.134 248)
export const light_terminal_ansi_cyan = cyan_600;
export const light_terminal_ansi_dim_cyan = light_terminal_ansi_cyan;
export const light_terminal_ansi_bright_cyan = '#4ca5a3ff'; // oklch(0.668 0.085 193)
export const light_terminal_ansi_black = neutral_800;
export const light_terminal_ansi_dim_black = light_terminal_ansi_black;
export const light_terminal_ansi_bright_black = '#1b3038ff'; // oklch(0.296 0.031 223)
export const light_terminal_ansi_green = green_600;
export const light_terminal_ansi_dim_green = light_terminal_ansi_green;
export const light_terminal_ansi_bright_green = '#6dae5eff'; // oklch(0.687 0.130 140)
export const light_terminal_ansi_white = cyan_300;
export const light_terminal_ansi_dim_white = light_terminal_ansi_white;
export const light_terminal_ansi_bright_white = '#f0f6f6ff'; // oklch(0.969 0.007 195)
export const light_terminal_ansi_yellow = yellow_500;
export const light_terminal_ansi_dim_yellow = light_terminal_ansi_yellow;
export const light_terminal_ansi_bright_yellow = '#ffd87cff'; // oklch(0.909 0.124 81)
export const light_terminal_ansi_magenta = magenta_600;
export const light_terminal_ansi_dim_magenta = light_terminal_ansi_magenta;
export const light_terminal_ansi_bright_magenta = '#a952b2ff'; // oklch(0.583 0.166 324)

// Players
export const light_players_0_cursor = light_text; // a cyan color between 500 and 600 looks really good, but I don't like how you almost can't see the text cursor when cycling through search matches
export const light_players_0_background = cyan_500;
export const light_players_0_selection = withAlpha(cyan_500, 0.24);
export const light_players_1_cursor = red_500;
export const light_players_1_background = light_players_1_cursor;
export const light_players_1_selection = withAlpha(light_players_1_background, 0.24);
export const light_players_2_cursor = blue_500;
export const light_players_2_background = light_players_2_cursor;
export const light_players_2_selection = withAlpha(light_players_2_background, 0.24);
export const light_players_3_cursor = orange_500;
export const light_players_3_background = light_players_3_cursor;
export const light_players_3_selection = withAlpha(light_players_3_background, 0.24);
export const light_players_4_cursor = green_500;
export const light_players_4_background = light_players_4_cursor;
export const light_players_4_selection = withAlpha(light_players_4_background, 0.24);
export const light_players_5_cursor = yellow_500;
export const light_players_5_background = light_players_5_cursor;
export const light_players_5_selection = withAlpha(light_players_5_background, 0.24);
export const light_players_6_cursor = magenta_500;
export const light_players_6_background = light_players_6_cursor;
export const light_players_6_selection = withAlpha(light_players_6_background, 0.24);
export const light_players_7_cursor = brown_500;
export const light_players_7_background = light_players_7_cursor;
export const light_players_7_selection = withAlpha(light_players_7_background, 0.24);

// Comments & Docs
export const light_syntax_comment_color = light_editor_line_number;
export const light_syntax_comment_doc_color = brown_500; // tripple-slash comments in languages that support them like Rust

// Strings & Literals
export const light_syntax_string_color = green_600;
export const light_syntax_string_escape_color = light_syntax_comment_doc_color;
export const light_syntax_string_regex_color = orange_600;
export const light_syntax_string_special_color = light_syntax_string_color;
export const light_syntax_string_special_symbol_color = light_syntax_string_color;
export const light_syntax_text_literal_color = light_syntax_string_color;

// Numbers & Constants
export const light_syntax_number_color = orange_600;
export const light_syntax_boolean_color = light_syntax_number_color;
export const light_syntax_constant_color = yellow_600;

// Keywords & Operators
export const light_syntax_keyword_color = magenta_600;
export const light_syntax_operator_color = cyan_600;
export const light_syntax_preproc_color = light_text; // @todo no idea what this is

// Functions & Methods
export const light_syntax_function_color = blue_600;
export const light_syntax_constructor_color = light_syntax_function_color; // oceanic v1 used orange, but I liked red (stands out from methods), but will keep it subtle, same as method color
export const light_syntax_attribute_color = light_syntax_keyword_color; // html attributes

// Types & Classes
export const light_syntax_type_color = light_syntax_function_color;
export const light_syntax_enum_color = orange_600;
export const light_syntax_namespace_color = light_text; // @todo no idea what this is, I'll just use the same as preproc
export const light_syntax_variant_color = light_syntax_type_color; // @todo no idea what this is, I'll just use the same as syntax_type_color

// Variables & Properties
export const light_syntax_variable_color = light_text;
export const light_syntax_variable_special_color = brown_600; // Markdown Preview, tripple backticks code snippet
export const light_syntax_property_color = light_syntax_variable_special_color; // JSON keys, CSS properties
export const light_syntax_label_color = light_text; // Markdown Preview, tripple backticks code snippet; brackets

// Punctuation
export const light_syntax_punctuation_color = light_text;
export const light_syntax_punctuation_bracket_color = light_text;
export const light_syntax_punctuation_delimiter_color = light_syntax_operator_color;
export const light_syntax_punctuation_list_marker_color = orange_600; // @todo no idea what this is
export const light_syntax_punctuation_markup_color = orange_600; // Markdown color of list item markers, tripple backtick color, angle brackets, etc.
export const light_syntax_punctuation_special_color = cyan_500; // @todo no idea what this is; ayu-light uses the same color as boolean

// Markup & Tags
export const light_syntax_tag_color = light_syntax_type_color;
export const light_syntax_title_color = light_text; // Markdown, # headings
export const light_syntax_emphasis_color = cyan_600; // Markdown, _italic_
export const light_syntax_emphasis_strong_color = brown_500; // Markdown, **bolded**
export const light_syntax_link_text_color = cyan_600;
export const light_syntax_link_uri_color = blue_600;
export const light_syntax_selector_color = light_syntax_keyword_color; // @todo no idea what this is, but in one-dark it is the same as constant and in ayu-light it is the same as boolean and syntax_punctuation_special_color
export const light_syntax_selector_pseudo_color = light_text; // CSS pseudo

// Other
export const light_syntax_primary_color = light_text;
export const light_syntax_embedded_color = light_text; // @todo no idea what this is; interestingly oceanic v1 uses green_700
export const light_syntax_predictive_color = cyan_700; // @todo no idea what this is
export const light_syntax_hint_color = magenta_500; // @todo no idea what this is; the other themes are using the same color as hint
