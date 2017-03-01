<?php
    header('Content-Type:application/json');
    @$uname=$_REQUEST['uname'];
    require('init.php');
    $sql="SELECT * FROM rent_user WHERE uname='$uname'";
    $result=mysqli_query($conn,$sql);
    $obj=mysqli_fetch_row($result);
    if($obj){
        echo '{"msg":"用户名已存在"}';
    }
