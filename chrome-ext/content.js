var bw_listen_mutation = false;
var select_fiction_init = function init(m, ob) {
  m.forEach(function (mutation) {
  		bw_listen_mutation = bw_is_listened_mutation(mutation);
  });
  if (bw_listen_mutation) {
    autosize(document.querySelectorAll('.message-replies textarea'));
    autosize(document.querySelectorAll('#commentform textarea'));
    autosize(document.querySelectorAll('#comments textarea'));
    autosize(document.querySelectorAll('.activity-feed textarea'));
  }
};

/*
 Launch observer
*/
new MutationObserver(select_fiction_init).observe(document.body, {
  attributes: true,
  childList:true,
  attributeFilter: [
    'class'
  ]
});
/* UTILS FUNCTIONS */

function bw_is_listened_mutation(m) {
	var listen_element_mutation = "HTML BODY";
	if(m.target.className.indexOf("advertisement skyscraper") > -1)
		return true
	if(listen_element_mutation.indexOf(m.target.nodeName) > -1)
		return true;
	return false;
}