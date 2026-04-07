# Oceanic Next

A minimalist dark theme, port of the popular [Oceanic Next Color Scheme](https://github.com/voronianski/oceanic-next-color-scheme) with slight changes.

## Preview

![dark and light themes](/screenshots/docs/01-split.png)

---

<details><summary><h3>More Screenshots</h3></summary>
    
![javascript](/screenshots/docs/02-file-jsx.png)
    
![markdown](/screenshots/docs/03-file-markdown.png)

![bash](/screenshots/docs/04-file-shell.png)

![cmd-palette](/screenshots/docs/05-command-palette.png)

![terminal](/screenshots/docs/06-terminal.png)

</details>

## Companion config & tweaks

Screenshots from the preview were generated with this extra config:

- font family: `Inconsolata`
- font size: `17`
- line height: `1.4`
- terminal theme: robbyrussell (default [Oh My Zsh](https://ohmyz.sh) theme)

## Contributing

### Building

One of the quickest feedback loops that I've achieved is through Zed's tasks. The `scripts/theme-generator.js` script interpolates the colors from `src/dark.js` and `src/light.js` in the `src/theme.template.json` and prints to stdout the theme in JSON format. This can be placed in a custom theme (e.g. `~/.config/zed/themes/oceanic-wip.json`) and the final step is to update Zed's settings to use that theme. Quickest way is `cmd-k cmd-t` (a.k.a Theme Selector). Putting everything together:

```jsonc
// ~/.config/zed/tasks.json
[
    {
        "label": "Build Oceanic Next (WIP)",
        "command": "node scripts/theme-generator.js --wip > ~/.config/zed/themes/oceanic-wip.json",
        "reveal": "never",
    },
]
```

> [!TIP]
> Spawn a task through the Command Palette and then you can re-run a task with `cmd-alt-r`.

To build the theme for publishing the extension: `node scripts/theme-generator.js > themes/oceanic-next.json`

### Testing

There are a 2 AppleScript files in the `scripts` directory. One for taking the screenshots for the documentation and another that performs visual regression testing. 100% repeatability between screenshots is impractical. The aim is to minimize the delta reported by ImageMagick, but expect to see red diff in the screenshot with the Git Panel and the Terminal dock. In order to achieve that, here's a preflight checklist:

- [ ] Install [cliclick](https://formulae.brew.sh/formula/cliclick). It automates mouse movements and clicks.
- [ ] Provide autmation permissions to your terminal app:
    - [ ] Accessibility permissions: Settings -> Privacy & Security -> Accessibility
    - [ ] Autmation permissions: Settings -> Privacy & Security -> Automation
    - [ ] Screen & System Audio Recording permissions: Settings -> Privacy & Security -> Screen & System Audio Recording
- [ ] Hide desktop items: Settings -> Desktop & Dock -> Show items. Otherwise they might be visible in the docs screenshots.
- [ ] Add `"cursor_blink": false` to Zed's settings. Blinking cursors might come up as a delta.
- [ ] Close all open file tabs. `cmd-k w` should do the trick. Already opened tabs might come up as a delta. Close the Buffer Search toolbar too (pressing `Esc` should suffice).
- [ ] Quit Zed. Otherwise a second window might be also visible in the screenshots.
- [ ] Run from the root dir of the repo.
- [ ] Run only with a clean `git status` and on `main` branch.
- [ ] (Optional) Maximize (a.k.a Fill) and clear your terminal where you'll run the script. `screencapture` takes screenshots of a specified rectangle of your screen and the baseline screenshots were taken with a solid dark background that can be seen in the area behind the rounded corners of the app's window. If you don't maximize & clear the screenshot comparison will highlight those edges as a delta.
- [ ] (Optional) The docs screenshots were taken with "Reservoir Day" live wallpaper on macOS Tahoe.

```sh
# Runs the script for taking the docs screenshots
osascript scripts/docs-screenshots.applescript

# Performs the visual regression and pretty-prints the delta
osascript scripts/visual-regression.applescript | column -t -s ","
```
