
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        var my_color = request.dark_flag ? "#b6ff00" : "#2196f3";
        document.querySelectorAll("span.DPvwYc,a.fIqyif.MdgzLb,path.ugRcF").forEach(v => (v.style.color = my_color, v.style.fill = my_color));
        document.querySelectorAll("circle.zbdB4c,circle.iIDD2e").forEach(v => v.style.stroke = my_color);

    }
);