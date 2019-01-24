 //平台识别：是手机端还是PC端
 platformToIdentify = () => {
    if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
        this.platform = 'mobile';
    } else {
        this.platform = 'PC';
    }
}