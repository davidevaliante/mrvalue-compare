export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
}

export const configuration : Config = {
    streamerId : 2,
    streamerName : 'mrvalue',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#000000',
    secondaryColor : '#fadb14',
    fontString : "https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap",
    font : 'Roboto',
}

