fronter.bind('.js-sortable-table', ['appConfig'], function ($el, appConfig) {
	var cl = console.log,
		decimalPoint = appConfig.decimalSep,
		thouSep = appConfig.thousandSep,
		cleanUpRegex = new RegExp('[+%' + thouSep + ']', 'g'),
		$header = $el.find('.headerRow'),
		$rows = $el.find('article[id]'),
		stringColumnsClasses = '.js-col-pair_name',
		numberColumnsClasses = '.js-col-change, .js-col-changePerc',
		arrowsClasses = 'headerSortUp headerSortDown',
		defaultArrowsClass = 'headerSortDefault',
		sortState = { index: -1, direction: -1 }; // 0 Desc, 1 Asc

	function getNumericValue($row, index) {
		return cleanNumberFormatting($row.find('div:eq(' + index + ')').text().trim())
	}

	function getStringyValue($row, index) {
		return $row.find('div:eq(' + index + ')').text().trim()
	}

	function cleanNumberFormatting(str) {
		return +(str.replace(cleanUpRegex, '').replace(decimalPoint, '.'));
	}

	function makeSortStrings(index, direction) {
		return function (a, b) {
			return getStringyValue($(direction ? a : b), index).localeCompare(getStringyValue($(direction ? b : a), index));
		}
	}

	function makeSortNumbers(index, direction) {
		return function (a, b) {
			return getNumericValue($(direction ? a : b), index) - getNumericValue($(direction ? b : a), index);
		}
	}

	function sortTableByIndex(index, $th, makeSortFunction) {
		var sortedRows;

		removeArrowsClasses($header.find('div:eq(' + sortState.index + ')'));
		sortState.direction = getNewDirection(index);
		sortState.index = index;
		sortedRows = $rows.sort(makeSortFunction(index, sortState.direction));
		setArrowsDirection($th, sortState.direction);
		$el.find('article[id]').remove();
		$el.append(sortedRows);
	}

	function setArrowsDirection($th, direction) {
		removeArrowsClasses($th).removeClass(defaultArrowsClass).addClass(direction  ? 'headerSortDown' : 'headerSortUp');
	}

	function removeArrowsClasses($th) {
		return $th.find('.js-sort-arrows-icon').removeClass(arrowsClasses).addClass(defaultArrowsClass);
	}

	function getNewDirection(index) {
		return sortState.index === index ? +!sortState.direction : 0;
	}

	$header.find(stringColumnsClasses).on('click', function () {
		var $this = $(this);
		sortTableByIndex($this.index(), $this, makeSortStrings);
	});

	$header.find(numberColumnsClasses).on('click', function () {
		var $this = $(this);
		sortTableByIndex($this.index(), $this, makeSortNumbers);
	});
});