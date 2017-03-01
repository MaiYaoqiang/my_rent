<?php
    header('Content-Type:application/json');
    @$uphone=$_REQUEST['uphone'];
    require('init.php');
    $sql="SELECT * FROM rent_user WHERE uphone='$uphone'";
    $result=mysqli_query($conn,$sql);
    $obj=mysqli_fetch_row($result);
    if($obj){
        echo '{"msg":"该手机号已注册过"}';
    }
