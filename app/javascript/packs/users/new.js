import $ from 'jquery'
import 'select2'

$(function () {
  $('.js-searchable').select2({
    dropdownAutoWidth: true,
    placeholder: "検索語句を入力",
    allowClear: true,
    theme: 'bootstrap4'
  });
  
  $('.js-searchable-multiple').select2({
    dropdownAutoWidth: true,
    theme: 'bootstrap4',
    placeholder: "検索語句を入力",
    allowClear: true,
    multiple: true
  });
});