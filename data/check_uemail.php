<?php
    header('Content-Type:application/json');
    @$uemail=$_REQUEST['uemail'];
    require('init.php');
    $sql="SELECT * FROM rent_user WHERE uemail='$uemail'";
    $result=mysqli_query($conn,$sql);
    $obj=mysqli_fetch_row($result);
    if($obj){
        echo '{"msg":"该邮箱已注册过"}';
    }
