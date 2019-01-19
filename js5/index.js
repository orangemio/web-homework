
$(function () {

    $("#submit").click(() => {
        if ($("#username").val() != "") {
            var username = ($("#username").val());

            if ($("#password").val() != "") {
                var password = ($("#password").val());

                // 利用jQuery实现
                // var postParam = {
                //     "name": username,
                //     "pwd":password
                // };
                // $.ajax({
                //     type: "post",
                //     url: 'http://dev.admin.carrots.ptteng.com/a/login',
                //     data:postParam,
                //     dataType: 'json',
                //     success: function (data) {
                //         console.log(data);
                //     }
                //   });

                //利用 fetch 实现
                var options = {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': "application/x-www-form-urlencoded"
                    },
                    body: JSON.stringify({ name: username, pwd: password }),
                    credentials: 'include'
                  };
                
                fetch('http://dev.admin.carrots.ptteng.com/a/login', options).then(response => response.json())
                  .then(data => console.log(data))
                  .catch(error => console.log('Oops, error: ', error))

                // 利用Axios实现
                // let config = {
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //     }
                // }

                // axios.post('http://dev.admin.carrots.ptteng.com/a/login', {
                //     name: username,
                //     pwd: password
                // }, config)
                //     .then(function (response) {
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });

            } else {
                alert("请输入密码");
            }
        } else {
            alert("请输入用户名");
        }
    }
    )
})


