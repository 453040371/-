$(function() {
    //红包数量
    $("#count").change(function() {
        var count = $("#count").val();
        console.log(count)
        if (count < 1) {
            $("#count").val("")
        }


    })


    //日期插件
    $('.datepicker').datepicker({
        autoclose: true
    });


    //图片预览
    //活动图像
    var activePic = document.getElementById('activePic')
    activePic.onchange = function(e) {
        preview(e, "#preview1");
    }

    //红包图像
    var packetAvatar = document.getElementById('packetAvatar')
    packetAvatar.onchange = function(e) {
        preview(e, "#preview2");
    }
    var arr = []

    function preview(e, imgId) {
        var file = e.target.files[0];
        // console.log(e.target.files)
        var img = $(imgId)[0];
        // console.log(file)
        arr.push(file)
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            // console.log(this)
            img.src = this.result;
        }
    }
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
    $("#activeForm").ajaxForm({
        success:function(data){
            console.log(data);
        }
    })
  /*   $("#activeForm").on("submit", function() {
        console.log(123)
        // var data = {
        //     "uploadActivityFile": arr[0],
        //     "uploadRedbagFile": arr[1]
        // };
        // console.log($(this));
        // var formData = new FormData(document.getElementById("activeForm"));
        // var formData = new FormData($(this));
        // var formData = '';
        // console.log(formData)
        // return false;
        $.ajax({
            type: "POST",
            url: "http://192.168.0.138:8080/btc-cms/manager/square/save",
            //data: formData,
            // dataType: "json",
            success: function(info) {
                console.log(info)
            }
        })
        return false;
        
    }); */
    //验证
     $("#activeForm").bootstrapValidator({
             // submitHandler: function(validator, form, submitButton) {
             //     // a)  
             //     // Use Ajax to submit form data  
             //     //$.post(form.attr('action'), form.serialize(), function(result) {  
             //     // ... process the result ...  
             //     //}, 'json');  

             //     //b)  
             //     // Do your task  
             //     // ...  
             //     // Submit the form 
             //         // validator.defaultSubmit();
             // }
         })
        //  .on("submit", function() {
        //      console.log(123)
        //          // var formData = $('#activeForm').serialize();
        //          // console.log(formData)
        //          // formData += "&uploadActivityFile=" + $("#preview1")[0]+ "&uploadRedbagFile=" + $("#preview1")[0].src;
        //          // var data = "uploadActivityFile=" + $("#preview1")[0] + "&uploadRedbagFile=" + $("#preview1")[0].src;

        //  });
})