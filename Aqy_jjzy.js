// 爱奇艺2025尖叫之夜礼盒抢购 - currentTime修改 QX重写脚本
try {
    $notify("爱奇艺抢购脚本", "开始执行", "正在修改currentTime时间戳");
    let body = $response.body;
    if (!body) throw new Error("响应体为空，拦截接口可能错误");
    const targetTimeStamp = "1763620154168";
    let modifiedBody = body.replace(/"currentTime"\s*:\s*\d+/gi, `"currentTime" : ${targetTimeStamp}`);
    const isModified = modifiedBody.includes(`"currentTime" : ${targetTimeStamp}`);
    $notify(
        "修改结果",
        isModified ? "成功" : "失败",
        isModified ? `currentTime已改为：${targetTimeStamp}` : "未找到currentTime字段"
    );
    $done({ body: modifiedBody });
} catch (error) {
    $notify("爱奇艺抢购脚本错误", "执行失败", error.message);
    $done({ body: $response.body });
}
