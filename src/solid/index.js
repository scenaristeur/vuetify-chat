export const solid = {
  constructor() {
    this.storage = ""
    this.folder = ""
  },
  initializeApp(config){
  //  console.log(config)
    this.storagePod = config.storagePod
    this.folder = config.folder
  }
};
