export class RootAction {
  loadingActivity(activity, type) {
    return { type, payload: activity }
  }
}
