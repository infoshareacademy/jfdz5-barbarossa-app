export const transformTime = seconds => ({
    hours: Math.floor(seconds) / 3600 >= 24 ?
        Math.floor(seconds / 3600) - 24 : Math.floor(seconds / 3600),
    minutes:
        9 >= Math.floor(seconds % 3600 / 60) ?
            '0' + Math.floor(seconds % 3600 / 60) : Math.floor(seconds % 3600 / 60),
    seconds:
        Math.floor(seconds % 60)
})