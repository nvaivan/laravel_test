import { ActivityStatus } from "../common/enum/activity";


export class RootState {
  activityStatus;
  constructor(opt = {}) {
    this.activityStatus = opt.activityStatus || ActivityStatus.NoActivity
  }
}

export const initialState = new RootState({ activityStatus: ActivityStatus.NoActivity })