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
			{ data: { id:'t11', name: 'this paper - we' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'optimal ordering of rules and predicates in this context' }, css: {'width' : '228', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'inspect the result' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'the matching function' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'design and maintain sets of matching rules' }, css: {'width' : '172', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'a “debugging” cycle' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'conjunctive normal form (CNF)' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: '“early exit”' }, css: {'width' : '52', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'modification to the matching rules' }, css: {'width' : '140', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'a set of rules where each rule is in conjunctive normal form (CNF)' }, css: {'width' : '268', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'Entity Matching (EM) -  identifies pairs of records referring to the same real-world entity' }, css: {'width' : '368', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'apply the modified rules to a labeled subset of the data' }, css: {'width' : '228', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: '“dynamic memoing”' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'techniques to reuse previous results' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'a3', name: 'time' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a2', name: 'computation' }, css: {'width' : '48', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a0', name: 'interactive' }, css: {'width' : '48', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t0', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t6', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t6', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t7', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t1', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t13', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t2', target: 't1', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_7', weight: 1, source:'t3', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_8', weight: 1, source:'t4', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_9', weight: 1, source:'t5', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_10', weight: 1, source:'t8', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_11', weight: 1, source:'t9', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_12', weight: 1, source:'t10', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_13', weight: 1, source:'t12', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_14', weight: 1, source:'t2', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_15', weight: 1, source:'t3', target: 'a3', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_16', weight: 1, source:'t4', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_17', weight: 1, source:'t0', target: 'a3', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_18', weight: 1, source:'a0', target: 'a3', name: 'minimize'}, classes: 'contributes_to'},
			{data: { id: 'e_19', weight: 1, source:'t11', target: 'a2', name: 'limit'}, classes: 'contributes_to'},
			{data: { id: 'e_20', weight: 1, source:'t11', target: 'a3', name: 'reduction'}, classes: 'contributes_to'}
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