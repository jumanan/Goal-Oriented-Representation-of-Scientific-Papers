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
			{ data: { id:'t1', name: 'textual query' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'triple-based co-occurrence' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'query rewriting' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'n-gram model' }, css: {'width' : '52', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'determine the most suitable derived words from linguistic resources' }, css: {'width' : '272', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'question answering system' }, css: {'width' : '104', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'graph-structured RDF knowledge bases' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'this paper - we' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'bootstrapped with three statistical distributions' }, css: {'width' : '200', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'yielding a large number of irrelevant words' }, css: {'width' : '176', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'a Hidden Markov Model' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'Query expansion' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'recognizing co-occurred words in RDF data' }, css: {'width' : '168', 'height': '10'}, classes:'task'},
			{ data: { id:'a2', name: 'performance' }, css: {'width' : '48', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a0', name: 'run time' }, css: {'width' : '36', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'accuracy' }, css: {'width' : '36', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t0', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t1', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t1', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t4', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t4', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t3', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t8', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t10', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t10', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t8', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_10', weight: 1, source:'t11', target: 't9', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_11', weight: 1, source:'t0', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_12', weight: 1, source:'t0', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_13', weight: 1, source:'t10', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_14', weight: 1, source:'t4', target: 'a0', name: '-'}, classes: 'contributes_to'},
			{data: { id: 'e_15', weight: 1, source:'t4', target: 'a1', name: '-'}, classes: 'contributes_to'},
			{data: { id: 'e_16', weight: 1, source:'t9', target: 'a2', name: 'x'}, classes: 'contributes_to'},
			{data: { id: 'e_17', weight: 1, source:'t12', target: 'a2', name: '<x'}, classes: 'contributes_to'}
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