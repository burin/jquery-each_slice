# each\_slice

jQuery plugin that lets you iterate the given function for each slice of *`n`* elements


## Usage

The plugin acts much like each except each iteration is a collection of *`n`* elements.

	$('li').each_slice(2, function() {
		// this == jQuery collection containing two li elements
	});


## License

The expandable plugin is dual licensed *(just like jQuery)* under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2008 [Burin Asavesna](http://helloburin.com) and [Brandon Aaron](http://brandonaaron.net)