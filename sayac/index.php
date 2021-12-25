<?php include "functions.php"; ?>
<!doctype html>
<html lang="tr">
    <head>
        <meta charset="utf-8">
        <title><?php echo replace_en(ucwords($city)); ?> için iftara kalan süre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="<?php echo replace_en(ucwords($city)); ?> için iftara kalan süre">
        <meta name="robots" content="index, follow"/>
        <link rel="stylesheet" href="assest/css/bootstrap.min.css">
        <link rel="stylesheet" href="assest/css/style.css">
        <link rel="shortcut icon" href="assest/img/mosque.png">
    </head>
    <body>
        <div class="col-md-12 home text-center">
            <div id="clock"></div>
            <div class="form-group padding">
                <div class="col-md-4 col-md-offset-4">
                    <select class="form-control city-select" onchange="location = this.value;" id="sel1">
                        <?php
                            if(isset($city))
                            {
                                echo '<option value="'.replace_tr($city).'">Seçili Şehir: '.replace_en(ucwords($city)).'</option>',PHP_EOL;
                            }
                            else{
                                echo '<option>Şehir Seç</option>';
                            }
                            foreach ($citys as $city_list) {
                                echo '<option value="'.replace_tr($city_list).'">'.$city_list.'</option>',PHP_EOL;

                            }

                        ?>
                    </select>                          
                </div>
        
            </div>
            
            <p class="footer">Coded with <span style="color:red;">❤</span> by <a href="https://yazilimgelistirici.com">Yazılım Geliştirici</a></p>
        </div>
        <script src="assest/js/jquery.min.js"></script>
        <script type="text/javascript">
            var countDownDate = new Date("<?php echo date('Y/m/d').' '.$iftar; ?>").getTime();
            var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("clock").innerHTML = "<span id='tire'><?php echo replace_en(ucwords($city)); ?></span> <span class='text-1'>için İftara Kalan Süre:</span> <br /><span class='remaining'>" + hours + " saat "
                + minutes + " dakika " + seconds + " saniye </span>";
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("clock").innerHTML = "<img src='assest/img/mosque.png'> <br/> İftar açılmıştır. Hayırlı iftarlar!";
                }
            }, 1000);
        </script>
    </body>
</html>
