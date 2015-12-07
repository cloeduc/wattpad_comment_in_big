document.addEventListener('DOMNodeInserted', OnChangeDocument, false);
function OnChangeDocument(event){
	autosize(document.querySelectorAll('.message-replies textarea'));
	autosize(document.querySelectorAll('#commentform textarea'));
	autosize(document.querySelectorAll('#comments textarea'));
	autosize(document.querySelectorAll('.activity-feed textarea'));
}
