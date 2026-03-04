set AppleScript's text item delimiters to {","}

tell application "Finder"
	set displayBounds to get bounds of window of desktop
	set displayWidth to item 3 of displayBounds
	set displayHeight to item 4 of displayBounds
end tell

-- open an empty project for the first test
-- ensures Zed is running before we reach `tell application process "Zed"`
tell me to do shell script "/usr/local/bin/zed -n ./fixtures"

tell application "System Events"
	tell application process "Zed"
		set frontmost to true

		-- with Shottr 1554x978
		set width to 1440
		set height to 864

		set x to (displayWidth - width) div 2
		set y to (displayHeight - height) div 2

		-- move & resize the window to the center
		set size of window 1 to {width, height}
        set position of window 1 to {x, y}

		-- 1554x978 is the 1440x864 window size + ~8% padding
		set rect to {(displayWidth - 1554) div 2, (displayHeight - 978) div 2, 1554, 978} as string

		click menu item "Hide Others" of menu 1 of menu bar item "Zed" of menu bar 1
        delay 0.2 -- wait for the macOS animations to complete

		-- 1. take a screenshot of a JSX file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/App.jsx"
		delay 1 -- give the LSP server a second to bootstrap itself and to run the diagnostics
		delay 0.2
		tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/01-file-jsx.png"

		-- 2. take a screenshot of a Markdown file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/README.md"
		delay 0.2
		tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/02-file-markdown.png"

		-- 3. take a screenshot of a Shell file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/upload-cli.sh"
		delay 0.2
		tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/03-file-shell.png"

		-- 4. take a screenshot of the Command Palette
        click menu item "Command Palette..." of menu 1 of menu bar item "Go" of menu bar 1
		delay 0.2
        tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/04-command-palette.png"
        click menu item "Command Palette..." of menu 1 of menu bar item "Go" of menu bar 1

		-- 5. take a screenshot of the Terminal Panel
		click menu item "Terminal Panel" of menu 1 of menu bar item "View" of menu bar 1
		delay 0.2 -- give the Terminal emulator enough time to bootstrap itself
		delay 0.2
		tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/05-terminal.png"
		click menu item "Close All Docks" of menu 1 of menu bar item "View" of menu bar 1
		click menu item "Project Panel" of menu 1 of menu bar item "View" of menu bar 1

		-- End. Perform clean up.
		click menu item "Close Window" of menu 1 of menu bar item "File" of menu bar 1
	end tell
end tell

return "✓ Done"
