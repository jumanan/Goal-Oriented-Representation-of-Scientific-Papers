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
			{ data: { id:'t2', name: 'filtered baseline phrase table - baseline filt.' }, css: {'width' : '192', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'Log-linear interpolation' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'full' }, css: {'width' : '20', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'Baseline' }, css: {'width' : '36', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'fixed interpol. -  fixed interpolation' }, css: {'width' : '156', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'training phrase models' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'leaving-one-out (l1o)' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'cross-validation (cv)' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'phrase-based statistical machine translation' }, css: {'width' : '180', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'count, iter. 2' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'count (cv)' }, css: {'width' : '44', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'reordering models' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'count (l1o)' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'feat. comb.' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'count model' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'single word lexica' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'weighted count model - weight. count' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a2', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'over-fitting' }, css: {'width' : '52', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t13', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t13', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t9', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t9', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t9', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t9', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t9', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t9', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t9', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t13', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t9', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t9', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t15', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t15', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t15', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t15', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t15', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t11', target: 't3', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_18', weight: 1, source:'t12', target: 't4', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_19', weight: 1, source:'t1', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_20', weight: 1, source:'t11', target: 't8', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_21', weight: 1, source:'t12', target: 't8', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_22', weight: 1, source:'t13', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_23', weight: 1, source:'t14', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_24', weight: 1, source:'t3', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_25', weight: 1, source:'t4', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_26', weight: 1, source:'t14', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_27', weight: 1, source:'t16', target: 't15', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_28', weight: 1, source:'t10', target: 't15', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_29', weight: 1, source:'t9', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_30', weight: 1, source:'t9', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_31', weight: 1, source:'t9', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_32', weight: 1, source:'t15', target: 'a2', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_33', weight: 1, source:'t13', target: 'a2', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_34', weight: 1, source:'t11', target: 'a1', name: '-'}, classes: 'contributes_to'},
			{data: { id: 'e_35', weight: 1, source:'t1', target: 'a0', name: '26.3:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_36', weight: 1, source:'t2', target: 'a0', name: '26.9:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_37', weight: 1, source:'t3', target: 'a0', name: '27.2:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_38', weight: 1, source:'t4', target: 'a0', name: '27.0:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_39', weight: 1, source:'t5', target: 'a0', name: '26.4:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_40', weight: 1, source:'t6', target: 'a0', name: '27.0:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_41', weight: 1, source:'t0', target: 'a0', name: '27.7:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_42', weight: 1, source:'t7', target: 'a0', name: '27.6:WMT08'}, classes: 'contributes_to'},
			{data: { id: 'e_43', weight: 1, source:'t8', target: 'a0', name: '27.2:WMT08'}, classes: 'contributes_to'}
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