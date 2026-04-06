set AppleScript's text item delimiters to {","}

set output to "name,diff\n"

tell application "Finder"
	set displayBounds to get bounds of window of desktop
	set displayWidth to item 3 of displayBounds
	set displayHeight to item 4 of displayBounds
end tell

do shell script "rm -f ./screenshots/target/*.png ./screenshots/diff/*.png"

-- open an empty project for the first test
-- ensures Zed is running before we reach `tell application process "Zed"`
do shell script "/usr/local/bin/zed -n"

tell application "System Events"
	tell application process "Zed"
		set frontmost to true

		set width to 1440
		set height to 864
		set x to (displayWidth - width) div 2
		set y to (displayHeight - height) div 2

		-- move & resize the window to the center
		set size of window 1 to {width, height}
        set position of window 1 to {x, y}
		set rect to {x, y, width, height} as string

        -- move the mouse cursor away from the screencapture area
        tell me to do shell script "/opt/homebrew/bin/cliclick m:75,75"

        delay 0.2 -- wait for the macOS animations to complete

		-- 1. take a screenshot of an empty project
		click menu item "Project Panel" of menu 1 of menu bar item "View" of menu bar 1
		set output to output & captureAndCompare("01-empty-project.png", rect) of me

		-- 2. take a screenshot of a JSX file
		tell me to do shell script "/usr/local/bin/zed -a ."
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/App.jsx"
		delay 1 -- give the LSP server a second to bootstrap itself and to run the diagnostics
		set output to output & captureAndCompare("02-file-jsx.png", rect) of me

		-- 3. take a screenshot of a TS info popover and error popover
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/with-typescript.ts"
		delay 1 -- give the LSP server a second to bootstrap itself and to run the diagnostics
		tell me to do shell script "/opt/homebrew/bin/cliclick m:" & {x + 400, y + 245} as string
		delay 0.3 -- Zed/LSP server has a delay of ~300ms to the info display popover
		set output to output & captureAndCompare("03-with-typescript-popover-error.png", rect) of me
		tell me to do shell script "/opt/homebrew/bin/cliclick m:" & {x + 900, y + 150} as string
		delay 0.3 -- wait for Zed to hide the error popover
		tell me to do shell script "/opt/homebrew/bin/cliclick m:" & {x + 370, y + 150} as string
		delay 0.3 -- Zed/LSP server has a delay of ~300ms to the info display popover
		set output to output & captureAndCompare("03-with-typescript-popover-info.png", rect) of me

		-- 4. take a screenshot of a Markdown file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/README.md"
		set output to output & captureAndCompare("04-file-markdown.png", rect) of me

		-- 5. take a screenshot of a Shell file
		tell me to do shell script "/usr/local/bin/zed -a ./fixtures/upload-cli.sh"
		set output to output & captureAndCompare("05-file-shell.png", rect) of me

		-- 6. take a screenshot of the Diagnostics page
		click menu item "Diagnostics" of menu 1 of menu bar item "View" of menu bar 1
		set output to output & captureAndCompare("06-diagnostics.png", rect) of me
		click menu item "Close Editor" of menu 1 of menu bar item "File" of menu bar 1

		-- 7. take a screenshot of the git changes in the project panel and the git panel
		click menu item "Cut" of menu 1 of menu bar item "Edit" of menu bar 1
		click menu item "Save" of menu 1 of menu bar item "File" of menu bar 1
		tell me to do shell script "echo 'hello world' > ./fixtures/new-file.txt"
		tell me to do shell script "rm ./fixtures/empty.txt"
		set output to output & captureAndCompare("07-project-panel-git.png", rect) of me

		tell me to do shell script "/opt/homebrew/bin/cliclick c:" & {x + 45, y + height - 20} as string
		tell me to do shell script "/opt/homebrew/bin/cliclick c:" & {x + 75, y + 110} as string
		set output to output & captureAndCompare("08-git-panel.png", rect) of me
		click menu item "Project Panel" of menu 1 of menu bar item "View" of menu bar 1

		-- 8. take a screenshot of the Terminal Panel
		click menu item "Terminal Panel" of menu 1 of menu bar item "View" of menu bar 1
		delay 0.5 -- give the Terminal emulator enough time to bootstrap itself
		set output to output & captureAndCompare("09-terminal.png", rect) of me
		click menu item "Toggle Bottom Dock" of menu 1 of menu bar item "View" of menu bar 1
		click menu item "Project Panel" of menu 1 of menu bar item "View" of menu bar 1

		-- 9. take a screenshot of the Command Palette
        click menu item "Command Palette..." of menu 1 of menu bar item "Go" of menu bar 1
		set output to output & captureAndCompare("10-command-palette-base.png", rect) of me
    	tell me to do shell script "/opt/homebrew/bin/cliclick m:" & {x + width div 2, y + 150} as string
		set output to output & captureAndCompare("11-command-palette-hover.png", rect) of me

		-- End. Perform clean up.
		click menu item "Close Window" of menu 1 of menu bar item "File" of menu bar 1
		tell me to do shell script "rm ./fixtures/new-file.txt"
        tell me to do shell script "git restore ./fixtures"
	end tell
end tell

on captureAndCompare(fn, rect)
    delay 0.2
    tell me to do shell script "screencapture -x -R" & rect & " ./screenshots/target/" & fn
    tell me to set diff to do shell script "magick compare ./screenshots/baseline/" & fn & " ./screenshots/target/" & fn & " -compose Src ./screenshots/diff/" & fn & " 2>&1 || true"

    return fn & "," & diff & "\n"
end captureAndCompare

return output
