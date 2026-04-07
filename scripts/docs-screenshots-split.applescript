set AppleScript's text item delimiters to {","}

tell application "Finder"
	set displayBounds to get bounds of window of desktop
	set displayWidth to item 3 of displayBounds
	set displayHeight to item 4 of displayBounds
end tell

-- open an empty project for the first test
-- ensures Zed is running before we reach `tell application process "Zed"`
do shell script "/usr/local/bin/zed -n ./"

do shell script "rm -f ./screenshots/docs/*.png"

tell application "System Events"
	tell application process "Zed"
		set frontmost to true

		-- with Shottr 1554x932
		set width to 1440
		set height to 864

		set x to (displayWidth - width) div 2
		set y to (displayHeight - height) div 2

		-- move & resize the window to the center
		set size of window 1 to {width, height}
        set position of window 1 to {x, y}

		-- 1554x932 is the 1440x864 window size + ~8% padding
		set rect to {(displayWidth - 1554) div 2, (displayHeight - 932) div 2, 1554, 932} as string

		click menu item "Hide Others" of menu 1 of menu bar item "Zed" of menu bar 1

        -- move the mouse cursor away from the screencapture area
        tell me to do shell script "/opt/homebrew/bin/cliclick m:75,75"

        delay 0.2 -- wait for the macOS animations to complete

		-- 1. take a screenshot of a JSX file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/App.jsx"
		delay 1 -- give the LSP server a second to bootstrap itself and to run the diagnostics
        click menu item "Command Palette..." of menu 1 of menu bar item "Go" of menu bar 1
		delay 0.2
        tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/docs/split-light.png"
        click menu item "Command Palette..." of menu 1 of menu bar item "Go" of menu bar 1

		-- End. Perform clean up.
		click menu item "Close Window" of menu 1 of menu bar item "File" of menu bar 1
	end tell
end tell

return "✓ Done"
