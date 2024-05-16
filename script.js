<script>
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.querySelector('input[name="name"]').value;
    if(name.length < 3) {
        alert('Имя должно быть длиннее 2 символов');
        event.preventDefault();
    }
});
</script>
