const onClickMore = () => {
    $('#more').on('click', function() {
        $('.bio-container').removeClass('hidden');
    })
}

onClickMore();