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
			{ data: { id:'t9', name: 'qualitative taxonomical relations that occur between individuals and concepts' }, css: {'width' : '312', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'ontology alignments' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'aggregate alignments disjunctively  or  conjunctively' }, css: {'width' : '216', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'relations only between classes' }, css: {'width' : '124', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'managing ontology alignments' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'Algebras of relations' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'compositional inference' }, css: {'width' : '96', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'new algebra of relations' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'relations “is a”' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'propagate  alignments  within  a  network  of  ontologies' }, css: {'width' : '232', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'relations “is not”' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'taxonomical relations between classes' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'sound' }, css: {'width' : '24', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a3', name: 'coherent' }, css: {'width' : '36', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'classes which occur  in alignments have nonempty extensions' }, css: {'width' : '240', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a2', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t1', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t1', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t1', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t3', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t4', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t2', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t9', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t9', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t9', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t1', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_10', weight: 1, source:'t5', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_11', weight: 1, source:'t9', target: 't8', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_12', weight: 1, source:'t6', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_13', weight: 1, source:'t0', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_14', weight: 1, source:'t7', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_15', weight: 1, source:'t8', target: 'a3', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_16', weight: 1, source:'a1', target: 'a2', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_17', weight: 1, source:'t7', target: 'a0', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_18', weight: 1, source:'a3', target: 'a0', name: ''}, classes: 'contributes_to'}
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