import { theme } from '../config'

const basicTheme = {
    mainViewBg: '#dbf0ff',

    inputBg: '#ffffff',

    iconContainerBg: '#008cff',

    messagePrimaryBg: '#ffffff',
    messageSecondaryBg: '#bae5f5',

    chatTextColor: '#000',
    chatListTextColor: '#000'
}

const darkTheme = {
    mainViewBg: '#333333',

    inputBg: '#CACACA',

    iconContainerBg: '#CACACA',

    messagePrimaryBg: '#222',
    messageSecondaryBg: '#000',

    chatTextColor: '#CACACA',
    chatListTextColor: '#CACACA'
}

export default function getTheme() {
    switch (theme) {
        case 'dark':
            return darkTheme
        default:
            return basicTheme
    }
}