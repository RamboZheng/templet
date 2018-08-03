module.exports = {
    isOutLog: false,
    isOpenMock: false,
    isDebugSourceMap: false,
    serverURL: "",
    newServerURL: "",
    nodeServerURL: "",
    domain: "",
    isTestDev: false,
    isShowDataSource: true,

    init: function() {
        let obj = window.icityConfig;
        if(obj != undefined) {
            let config = obj.data();
            this.serverURL = config.serverURL;
            this.newServerURL = config.newServerURL;
            this.nodeServerURL = config.nodeServerURL;
            this.domain = config.domain;
            this.isTestDev = config.isTestEnv;
            this.isShowDataSource = obj.isShowDataSource();
            if(config.type == 2) {
                this.isOutLog = true;
            } else if(config.type == -1) {
                this.isOutLog = true;
                this.isOpenMock = true;
            }
        } else {
            alert("资源文件加载失败，请重试~");
        }

        if(iCityBridge != undefined) {
            iCityBridge.setNativeCloseState(this.isOpenMock);
        }
    }
};