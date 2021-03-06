Mplayer wrapper for wmii.
Application is controlled by named pipe.
It uses config file for settings, config must place in folder with program with name `player-config.json`

Config example:
---------------

```javascript
{"music_directory": ".", 	// default directory with music
"base_directory": ".", 		// in which directory start change-directory command
"mplayer_options": [], 		// additional options for mplayer
"sound_bar": "", 			// wmii bar for output current song
"seek_seconds": 10, 		// seconds of relative seek
// file that stores current working directory of player
"current_directory_storage": "/tmp/.wmii-player-dir",
// fifo used by program to control mplayer
"mplayer_fifo": "/tmp/.mplayer-input",
// fifo used to control program
"input_fifo": "/tmp/.wmii-player-input"
}
```

Available commands:
-------------------

 - `next` - start next random song
 - `pause` - pause player
 - `loop` - infinitely play current song / disable infinite loop
 - `play-file` - shows window to select what file to play
 - `change-folder` - shows window to select music folder
 - `seek-forward` - seek forward to `seek_seconds` seconds
 - `seek-forward` - seek backward to `seek_seconds` seconds
 - `increase-volume`
 - `decrease-volume`

Usage example:
-------

```bash
... # your wmiirc
# wmii-player fifo
PLAYER_FIFO_IN=/tmp/.wmii-player-input
startup() {
	# run wmii-player at startup
	cd /home/userr/.wmii
	nw wmii-player.nw &>> player.log &
	cd ~
	# cd's is necessary for the program to find the configuration file
}
...
# somewhere at shortcut definitions
KeyGroup Helper
Key Mod3-q
	echo pause > $PLAYER_FIFO_IN &
Key Mod3-x
	echo next > $PLAYER_FIFO_IN &
Key Mod3-z
	echo play-file > $PLAYER_FIFO_IN &
```

Copyright © 2015 Alexey Kolpakov

Distributed under DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE.
