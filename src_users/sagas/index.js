import usersWatchers from './users'

function runWatchers(watchers) {
  return Object
    .values(watchers)
    .map(watcher => watcher())
}

export default function* rootSaga() {
  yield [
    ...runWatchers(usersWatchers)
  ]
}