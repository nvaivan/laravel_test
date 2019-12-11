import ActivityStatus from "../../common/enum/activity";

export class FileReaderState {
  /**
   *
   */
  constructor() {
    this.fileReaders = [];
    this.fileReader = {};
    this.errorDetail = null;
    this.activityStatus = ActivityStatus.NoActivity;
    this.error = null;
  }

}