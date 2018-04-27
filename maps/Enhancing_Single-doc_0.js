$(function(){ // on dom ready
var cy = cytoscape({
	container: document.getElementById('cy'),
	style: cytoscape.stylesheet()
		.selector('node')
			.css({
				'content': 'data(name)',
				'text-valign': 'center',
				'border-style' : 'solid',
				'text-outline-color': 'black',
				'border-color' : 'black',
				'border-width' : 1,
				'background-color': 'white',
				'line-color': '#61bffc',
				'font-size' :8,
				'text-opacity': 1,
				'padding-left' : 2.5,
				'padding-right':2.5,
				'padding-top':2.5,
				'padding-bottom':2.5
})
		.selector('node.task')
			.css({
				'shape' :'roundrectangle'
})
		.selector('node.taskset')
			.css({
				'border-opacity':'0',
				'shape':'rectangle'
})
		.selector('node.attribute')
			.css({
				'shape':'ellipse'
})
		.selector('edge')
			.css({
				'content': 'data(name)',
				'width': 1,
				'line-color': 'black',
				'source-arrow-color': 'black',
				'target-arrow-color': 'black',
				'font-size': 6,
				'curve-style':'bezier',
				'control-point-weight': 0.7,
				'text-outline-width': 1,
				'text-outline-color': '#ddd',
				'target-arrow-shape':'triangle'
})
		.selector('edge.associated_with')
			.css({
				'source-arrow-shape': 'none',
				'target-arrow-shape':'none',
				'content':''
})
		.selector('$node > node')
			.css({
				'content' : '',
				'shape': 'roundrectangle',
				'height': 'data(name)',
				'width': 'data(name)',
				'background-color': 'lightgray'
})
		.selector('.highlighted')
			.css({
				'background-color': '#61bffc',
				'line-color': '#61bffc',
				'target-arrow-color': '#61bffc',
				'transition-property': 'background-color, line-color, target-arrow-color',
				'transition-duration': '0.5s'
}),
	elements: {
		nodes: [
			{ data: { id:'t8', name: 'NetSum(2)' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'picking the n th sentence of the document' }, css: {'width' : '168', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'NetSum(3)' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'NetSum(1)' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'RankNet' }, css: {'width' : '32', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'Single-document Summarization' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'NetSum(b)' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'first 3 sentences' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'NetSum(n)' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'highlight extraction' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'a1', name: 'ROUGE-2' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a6', name: 'Av. ROUGE-2' }, css: {'width' : '48', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a5', name: 'Av. ROUGE-1' }, css: {'width' : '48', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a4', name: 'ROUGE-1' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t0', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t1', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t3', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t0', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t3', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t3', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t5', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t5', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t5', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t0', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t5', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t5', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t5', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t0', target: 'a4', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_14', weight: 1, source:'t0', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_15', weight: 1, source:'t0', target: 'a5', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_16', weight: 1, source:'t0', target: 'a6', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_17', weight: 1, source:'t3', target: 'a4', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_18', weight: 1, source:'t3', target: 'a5', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_19', weight: 1, source:'t3', target: 'a6', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_20', weight: 1, source:'t4', target: 'a5', name: '0.4642 ± 0.0084:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_21', weight: 1, source:'t1', target: 'a5', name: '0.4956 ± 0.0075:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_22', weight: 1, source:'t4', target: 'a6', name: '0.1726 ± 0.0064:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_23', weight: 1, source:'t1', target: 'a6', name: '0.1775 ± 0.0066:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_24', weight: 1, source:'t4', target: 'a4', name: '0.36:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_25', weight: 1, source:'t1', target: 'a4', name: '0.52:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_26', weight: 1, source:'t7', target: 'a5', name: '0.4478 ± 0.0133:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_27', weight: 1, source:'t8', target: 'a5', name: '0.3036 ± 0.0117:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_28', weight: 1, source:'t9', target: 'a5', name: '0.2603 ± 0.0133:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_29', weight: 1, source:'t8', target: 'a4', name: '0.556:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_30', weight: 1, source:'t9', target: 'a4', name: '0.4:CNN.com, 2007a'}, classes: 'contributes_to'},
			{data: { id: 'e_31', weight: 1, source:'t7', target: 'a4', name: '0.167:CNN.com, 2007a'}, classes: 'contributes_to'}
		]
	},
	layout: {
		name: 'cose',
		fit: true, // whether to fit the viewport to the graph
		padding: 20, // padding used on fit
		boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
		avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
		avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
		condense: true, // uses all available space on false, uses minimal space on true
		rows: undefined, // force num of rows in the grid
		cols: undefined, // force num of columns in the grid
		position: function( node ){}, // returns { row, col } for element
		sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
		animate: false, // whether to transition the node positions
		animationEasing: undefined, // easing of animation if enabled
		ready: undefined, // callback on layoutready
		stop: undefined // callback on layoutstop
	},
	ready: function(){
		window.cy = this;
	}
});
});