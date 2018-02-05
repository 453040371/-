$(function () {
    //币种
    $.ajax({
        type: "post",
        url: "http://192.168.0.138:8080/btc-cms/manager/withdrawal/init",
        success: function (data) {
            if (data.code == 1) {
                // console.log(data);
                var html = template('template1', data);
                document.getElementById('type').innerHTML = html;
            }
        }
    })
    //搜索
    $('#search').click(function () {

        var data = {
            btcType: $("#type").val(),
            idType: $("#search-id").val(),
            userId: "",
            pageSize: "15",
            pageIndex: "1"
        }
        $.ajax({
            type: 'post',
            url: "http://192.168.0.138:8080/btc-cms/manager/withdrawal/data",
            data: data,
            success: function (data) {
                console.log(data);
                var html = template('template2', data);
                console.log(html)
                // document.getElementById('type').innerHTML = html;
            }
        })
    })
    //上架
    $("#grounding").click(function () {

        $.ajax({
            type: "",
            url: "",
            data: "",
            success: function () {
                //刷新页面
            }
        })
    })
    //下架
    $("#undercarriage").click(function () {

        $.ajax({
            type: "",
            url: "",
            data: "",
            success: function () {
                //刷新页面
            }
        })
    })
})