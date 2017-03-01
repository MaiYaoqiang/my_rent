<?php
    header('Content-Type:application/json');
    @$uname=$_REQUEST['uname'] or die('{"code":"2","msg":"uname required"}');
    @$upwd=$_REQUEST['upwd'] or die('{"code":"2","msg":"upwd required"}');
    require('init.php');
    $sql="SELECT * FROM rent_user WHERE uname='$uname' AND upwd='$upwd'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row){
        echo('{"code":"1","msg":"success"}');
    }else{
        echo('{"code":"3","msg":"error"}');
    }