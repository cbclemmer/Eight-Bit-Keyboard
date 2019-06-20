# Hexvorak

NOTE: the keycodes used are from a dvorak keyboard

A simple and inefficient keyboard scheme. Instead of using several dozen keys to have a button for every thing that the computer needs to do, simply use 8 keys to function as 8 bits on a command register. Each key represents a power of 2 for each of the 8 bits: 1, 2, 4, 8, 16, 32, 64, 128 with the most significant bit being on the left most key. Instead of registering the command whenever the key is pressed, wait for a combination of keys to be pressed and the command is computed. This command is an integer that is converted to a character based on the ascii chart. This allows for 255 possible key combinations from just 8 keys. The keys used in dvorak (in order from msb to lsb) are: a, o, e, u, h, t, n, s