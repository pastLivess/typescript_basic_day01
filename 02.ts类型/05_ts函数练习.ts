type lyricType = {
  time: number
  text: string
}

function parseLyric(lyric: string): lyricType[] {
  const lyrics: lyricType[] = []
  lyrics.push({ time: 1111, text: '天空好像下雨' })
  return lyrics
}

const lyricInfos = parseLyric('fafafadada')

for (const item of lyricInfos) {
  console.log(item.time, item.text)
}
