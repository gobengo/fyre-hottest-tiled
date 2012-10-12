require([
'jquery',
'text!templates/collection-large.html',
'text!templates/collection-medium.html',
'text!templates/collection-small.html'
],

// TODO
// * Don't require external HTML. Swap it in from a main template. User shouldn't have to put any class on their shit or anything

function($, tCollectionLarge, tCollectionMedium, tCollectionSmall) {
	var URL = "http://bootstrap.engadget.fyre.co/api/v3.0/hottest/";
	var USE_EMBEDLY_IMAGES = false;
    var EMBEDLY_API_KEY = "";

	$.ajax({
		url: URL,
		dataType: 'jsonp',
		success: heatRequestCallback
	});
	
	function heatRequestCallback (response) {
		if (response.code !== 200) {
			console.log("Error fetching Heat API", arguments);
		}
		parseHeatData(response.data);
	}

	function parseHeatData (data) {
		var parsedData = $.map(data, function (c, index) {
			return ({
				title: c.title,
				url: c.url,
				heat: c.heat,
			});
		});
		buildHtml(parsedData);
	}

	function buildHtml (data) {
		var parts = []
		  , html;
		// First, hottest item is large
		parts.push(
			renderCollection(tCollectionLarge, data[0])
		);
		// Next, second hottest item is medium
		parts.push(
			renderCollection(tCollectionMedium, data[1])
		);
		// Next 3 are small
		$.each([2,3,4], function (index, item) {
			parts.push(
				renderCollection(tCollectionSmall, data[item])
			);
		});
		render(parts.join(''));
	}

	function renderCollection (template, collection) {
		return template
			.replace('{{ url }}', collection.url)
			.replace('{{ title }}', collection.title)
			.replace('{{ heat }}', collection.heat.toFixed(1));
	}

	function render (html) {
		var $main;
		$(function($) {
			var $main = $main || $('#hottest .grid_holder');
			$main.append(html);
			if (USE_EMBEDLY_IMAGES) {
				fetchBackgroundImages($main);
			}
		});
	}

	function fetchBackgroundImages ($el) {
		var $elements = $el.find('.a_block');
		var done = $elements.lenth;
		$elements.each(function(index, collectionElement) {
			var url = $(collectionElement).attr('href');
			console.log('url', url);
			url = "http://api.embed.ly/1/oembed?apikey="+EMBEDLY_API_KEY+"&url=" + url;
			$.ajax({
				url: url,
				dataType: 'jsonp',
				success: function(data, status) {
					embedlyRequestCallback(collectionElement, data, status)
				}
			});
		});
	}

	function embedlyRequestCallback (element, data, status) {
		console.log('emreq', arguments);
		$(element)
			.find('img').attr('src', data.thumbnail_url);
	}
})
