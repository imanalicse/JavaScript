<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="file_validation.js"></script>
<script src="form.js"></script>

<form action="submit.php" method="post" enctype="multipart/form-data" id="file_form">
    <label>First Name</label>
    <input type="text" name="first_name" class=""><br>
    <label>Picture</label>
    <input type="file" name="picture" class=""><br>
    <label>files</label>
    <input type="file" name="multiple_files[]" class="" multiple>
    <input type="submit" value="Submit">
</form>
<div></div>

