<?php
require_once './Database.php';
$obj = Database::getConnection();
$data = file_get_contents('php://input');
$json = json_decode($data);
$op = $json->{'op'};
if (isset($op)) {
    switch ($op) {
        case "addUser":
            $fname = addslashes($json->{'data'}->{'fname'});
            $city = addslashes($json->{'data'}->{'city'});
            $email = addslashes($json->{'data'}->{'email'});
            $address = addslashes($json->{'data'}->{'address'});
            $username = addslashes($json->{'data'}->{'username'});
            $password = addslashes($json->{'data'}->{'password'});
            $phone = addslashes($json->{'data'}->{'phone'});

            $count = $obj->getRowsNum("Select * From tbusers WHERE username='{$username}' And password='{$password}'");
            if ($count > 0) {
                $ret = -999;
                $resp = array('code' => $ret, 'msg' => 'Username and Password exist yet');
            } else {
                $code = $obj->insertData(['fname', 'address', 'city', 'email', 'password', 'phone', 'username'], [$fname, $address, $city, $email, $password, $phone, $username], 'tbusers', null);
                $resp = array('code' => $code, 'msg' => $obj->getMsg());
            }

            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case "getUser":
            $userId = $json->{'data'}->{'userId'};
            $result = $obj->select(['fname', 'address', 'city', 'email', 'phone'], 'tbusers', "WHERE id_user = {$userId}");
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);

            break;
        case "login":
            $username = addslashes($json->{'data'}->{'username'});
            $password = addslashes($json->{'data'}->{'password'});

            $count = $obj->getRowsNum("Select * From tbusers WHERE username='{$username}' And password='{$password}'");
            if ($count > 0) {
                $result = $obj->select(['id_user', 'fname', 'email', 'phone', 'address', 'city', 'username'], 'tbusers', "WHERE username='{$username}' And password='{$password}'");
                $resp = array('code' => $result, 'msg' => $obj->getMsg());
            } else {
                $ret = -999;
                $resp = array('code' => $ret, 'msg' => 'Username or Password are not valid ');
            }

            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case "add":
            $fname = addslashes($json->{'data'}->{'fname'});
            $short = addslashes($json->{'data'}->{'short'});
            $description = addslashes($json->{'data'}->{'description'});
            $email = addslashes($json->{'data'}->{'email'});
            $code = $obj->insertData(['fullname', 'short', 'description', 'email'], [$fname, $short, $description, $email], 'artisans', null);
            $resp = array('code' => $code, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'page';
            $idpage = $json->{'data'}->{'idpage'};
            $table = $json->{'data'}->{'table'};
            $result = $obj->select(['id_content', 'page', 'title', 'content', 'img'], $table, "WHERE id_content = {$idpage}");
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'game';
            $type = $json->{'data'}->{'type'};
            $home = $json->{'data'}->{'home'};
            $table = 'tbgames';
            $result = $obj->selectList(['id_games', 'name', 'shorts', 'descriptions', 'img', 'type', 'home'], $table, "WHERE type = '{$type}' And home = '{$home}'");
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'userAccount';
            $userId = $json->{'data'}->{'userId'};
            $table = 'tbaccount';
            $join = " Left Join tbgames on tbaccount.id_game=tbgames.id_games";
            $result = $obj->selectJoin(['id_games', 'id_game', 'result', 'name', 'shorts', 'img', 'type'], $table, $join, " WHERE id_user = {$userId}");
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'winners';
            $table = 'tbhomewinners';
            $result = $obj->selectList(['id_winners', 'name', 'game', 'price'], $table, null);
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'recomendations';
            $table = 'tbrecomendations';
            $result = $obj->selectList(['text', 'color', 'id'], $table, null);
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'news';
            $table = 'tbnews';
            $result = $obj->selectList(['id_news', 'news'], $table, null);
//            echo "<pre>Result:";
//            print_r($result);
//            echo "</pre>";
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'list';
            $idpage = $json->{'data'}->{'id'};
            $idname = $json->{'data'}->{'idname'};
            $table = $json->{'data'}->{'table'};
            if ($idpage == 0) {
                $result = $obj->selectList(['idart', 'fullname', 'short', 'description', 'picture', 'email'], $table, null);
            } else {
                $result = $obj->selectList(['idart', 'fullname', 'short', 'description', 'picture', 'email'], $table, "WHERE {$idname} = {$idpage}");
            }
            $resp = array('data' => $result, 'msg' => $obj->getMsg());
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        case 'delete':
            $idpage = $json->{'data'}->{'id'};
            $idname = $json->{'data'}->{'fieldname'};
            $table = $json->{'data'}->{'table'};
            $query_conditional = "Where $idname = $idpage";
            $resp = $obj->deleteWithPictures($table, ['picture'], $query_conditional);
            header('Content-type: application/json');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            echo json_encode($resp);
            break;
        default:
            $ret = -999;
            $resp = array('code' => $ret, 'msg' => 'invalid operation');
            echo json_encode($resp);
            break;
    }
} else {
    $ret = -999;
    $resp = array('code' => $ret, 'msg' => 'invalid operation');
    //header('Content-type:application/json');
    //header('Access-Control-Allow-Origin: *');
    echo json_encode($resp);
}