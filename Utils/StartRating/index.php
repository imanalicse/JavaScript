<html>

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="rating.js"></script>
  <title>Star rating using pure CSS</title>
</head>

<?php
    echo "<pre>";
    print_r($_REQUEST);
    echo "</pre>";
?>


<body>
  <form method="post">
      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
      <div>
        <input type="submit" value="Submit">
      </div>
  </form>
</body>

</html>