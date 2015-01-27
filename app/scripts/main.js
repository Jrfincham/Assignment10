
repos.forEach( function (item){
  var name = item.name;
  var description = item.description;
  var updated_at = item.updated_at;

  var listDiv = $('<div></div>');
  $(listDiv).addClass('icons');
  $(listDiv).append($('<span></span>').text(name).prop('id', 'nameSpan'));
  $(listDiv).append($('<span></span>').text(description).prop('id', 'descriptionSpan'));
  $(listDiv).append($('<span></span>').text(updated_at).prop('id', 'updated_atSpan'));

  $('.reposList').append(listDiv);
});
