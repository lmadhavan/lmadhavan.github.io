// redirect in-app links from Fotografix 1.x
if (location.search == '?ref=fotografix141') {
	var cta = '';
	if (location.href.includes('/help/')) {
		cta = 'help';
	} else if (location.href.includes('/contact/')) {
		cta = 'feedback';
	}

	location.replace('/fotografix/?utm_source=fotografix&utm_medium=app&utm_campaign=fotografix-1.x&utm_content=' + cta);
}