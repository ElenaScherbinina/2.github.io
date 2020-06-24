function markAsCompleted() {
    if (!confirm('Обращение будет отмечено как обработанное. Желаете продолжить?')) {
        return false;
    }
    var id = $(this).attr('data-id');
    var self = this;
    $.ajax({
        type: 'POST',
        url: '/appeal/default/mark-as-completed/',
        data: {id: id},
        success: function(resp) {
            resp = JSON.parse(resp);
            if (resp.code === '1') {
                $(self).remove();
                alert(resp.message);
            }
        },
        error: function() {
            alert('Не удалось отметить обращение обработанным!');
        }
    });
}
$(document).ready(function() {
    $('.mark_as_completed').click(markAsCompleted);

    $('.my-selectpicker').selectpicker();
});
$(document).on('pjax:end', function() {
    $('.mark_as_completed').click(markAsCompleted);

    $('.my-selectpicker').selectpicker();
});