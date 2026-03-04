# Oceanic Next

A minimalist dark theme, port of the popular [Oceanic Next Color Scheme](https://github.com/voronianski/oceanic-next-color-scheme) with slight changes.

## Preview

![javascript](/screenshots/docs/01-file-jsx.png)

![markdown](/screenshots/docs/02-file-markdown.png)

![bash](/screenshots/docs/03-file-shell.png)

![cmd-palette](/screenshots/docs/04-command-palette.png)

![terminal](/screenshots/docs/05-terminal.png)

## Companion config & tweaks

Screenshots from the preview were generated with this extra config:
* font family: `Inconsolata`
* font size: `17`
* line height: `1.4`
* terminal theme: robbyrussell (default [Oh My Zsh](https://ohmyz.sh) theme)

## Contributing

There are a 2 AppleScript files in the `scripts` directory. One for taking the screenshots for the documentation and another that performs visual regression testing. In order to have maximum repeatability in screenshots, especially important during visual regression testing, here's a preflight checklist:
- [ ] Hide desktop items: Settings -> Desktop & Dock -> Show items. Otherwise they might be visible in the docs screenshots. 
- [ ] Add `"cursor_blink": false` to Zed's settings. Blinking cursors might come up as a delta.
- [ ] Close all open file tabs. `cmd-k w` should do the trick. Already opened tabs might come up as a delta.
- [ ] Quit Zed. Otherwise a second window might be also visible in the screenshots.
- [ ] Run from the root dir of the repo.
- [ ] Run only with a clean `git status`. 
- [ ] (Optional) Maximize (a.k.a Fill) and clear your terminal where you'll run the script. `screencapture` takes screenshots of a specified rectangle of your screen and the baseline screenshots were taken with a solid dark background that can be seen in the area behind the rounded corners of the app's window. If you don't maximize & clear the screenshot comparison will highlight those edges as a delta.
- [ ] (Optional) The docs screenshots were taken with "Reservoir Day" live wallpaper on macOS Tahoe. 

```sh
# Runs the script for taking the docs screenshots
osascript scripts/docs-screenshots.applescript

# Performs the visual regression and pretty-prints the delta
osascript scripts/visual-regression.applescript | column -t -s ","
```