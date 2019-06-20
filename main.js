$(document).ready(() => {
    let output = ''
    let cmd = 0
    let currentlyPressed = []
    $(document).keydown(({ which }) => {
        let add
        switch (which) {
            case 83: // s
                add =  1
                break
            case 78: // n
                add =  2
                break
            case 84: // t
                add =  4
                break
            case 72: // h
                add =  8
                break
            case 85: // u
                add =  16
                break
            case 69: // e
                add =  32
                break
            case 79: // o
                add =  64
                break
            case 65: // a
                add =  128
                break
            case 32: // space
                cmd = 0
                break
            default: return
        }
        if (!currentlyPressed.find((key) => key === add)) {
            currentlyPressed.push(add)
            cmd += add
            $('#cmd').text(parseInt(cmd) ? cmd : '')
        }
    })
    $(document).keyup(() => {
        currentlyPressed = []
        c = String.fromCharCode(cmd)
        tmp = cmd
        cmd = 0
        if (tmp == 8 && output.length > 0) {
            output = output.substr(0, output.length - 1)
            $('#last').text('<BACK')
            $('#output').text(output)
            return
        }
        if (tmp < 33 || tmp > 126) return
        output += c
        $('#last').text(c)
        $('#output').text(output)
    })
})