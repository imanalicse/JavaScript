<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <script src="file_validation.js?v=<?php echo time(); ?>"></script>
    <script src="form.js?v=<?php echo time(); ?>"></script>
</head>
<body>
    <form action="submit.php" method="post" enctype="multipart/form-data" id="file_form">
        <label>First Name</label>
        <input type="text" name="first_name" class=""><br>
        <label>Picture</label>
        <input type="file" name="picture" class="picture"><br>
        <label>files</label>
        <input type="file" name="multiple_files[]" class="" multiple>
        <input type="submit" value="Submit">
    </form>
    <button id="clear_file">Clear file</button>
</body>
</html>

