export const transformTime = seconds => ({
    hours: Math.floor(seconds) / 3600 >= 24 ?
        Math.floor(seconds / 3600) - 24 : Math.floor(seconds / 3600),
    minutes:
        Math.floor(seconds % 3600 / 60) < 9 ?
            '0' + Math.floor(seconds % 3600 / 60) : Math.floor(seconds % 3600 / 60),
    seconds:
        Math.floor(seconds % 60)
})