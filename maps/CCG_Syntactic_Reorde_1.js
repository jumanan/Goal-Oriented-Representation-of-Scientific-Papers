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
			{ data: { id:'t6', name: 'CCG chart-derived reordering' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'an additional CCG supertag reordering - ST' }, css: {'width' : '172', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'LR MBR - Baseline' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'lexicalized reordering' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'NO-LR NON-MBR' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'ST+LR NON-MBR' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'IRST LM - Federico and Cettolo, 2007' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'syntactic reordering' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'ST+LR MBR' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'CCG chart-derived reordering model (CCG+LR)' }, css: {'width' : '176', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'language model inference' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'CCG+LR MBR' }, css: {'width' : '44', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'a system with only a distance-based distortion model (NO-LR) - Baseline' }, css: {'width' : '288', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'a system with an additional CCG supertag reordering model (ST+LR) - Baseline' }, css: {'width' : '308', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'LR NON-MBR - Baseline' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'Statistical phrase-based machine translation (PMT)' }, css: {'width' : '204', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'CCG+LR NON-MBR' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'NO-LR MBR' }, css: {'width' : '40', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'Moses - Koehn et al., 2007' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'lexicalized reordering (LR) - Baseline' }, css: {'width' : '156', 'height': '10'}, classes:'task'},
			{ data: { id:'a2', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a0', name: 'BLEU-4' }, css: {'width' : '28', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t4', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t4', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t4', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t5', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t5', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t7', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t7', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t11', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t4', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t4', target: 't14', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t12', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t12', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t13', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t13', target: 't16', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t14', target: 't17', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t14', target: 't18', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t5', target: 't19', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t9', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_18', weight: 1, source:'t10', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_19', weight: 1, source:'t7', target: 't12', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_20', weight: 1, source:'t6', target: 't12', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_21', weight: 1, source:'t7', target: 't14', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_22', weight: 1, source:'t8', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_23', weight: 1, source:'t19', target: 't14', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_24', weight: 1, source:'t4', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_25', weight: 1, source:'t4', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_26', weight: 1, source:'t4', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_27', weight: 1, source:'t1', target: 'a0', name: '28.8:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_28', weight: 1, source:'t3', target: 'a0', name: '29.2:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_29', weight: 1, source:'t2', target: 'a0', name: '29.1:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_30', weight: 1, source:'t0', target: 'a0', name: '29.1:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_31', weight: 1, source:'t15', target: 'a0', name: '26.2:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_32', weight: 1, source:'t17', target: 'a0', name: '28.5:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_33', weight: 1, source:'t3', target: 'a0', name: '25.2:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_34', weight: 1, source:'t2', target: 'a0', name: '25.3:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_35', weight: 1, source:'t15', target: 'a0', name: '22.5:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_36', weight: 1, source:'t17', target: 'a0', name: '24.5:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_37', weight: 1, source:'t0', target: 'a0', name: '25.6:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_38', weight: 1, source:'t5', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_39', weight: 1, source:'a0', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_40', weight: 1, source:'t16', target: 'a0', name: '25.8:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_41', weight: 1, source:'t18', target: 'a0', name: '28.2:OpenMT 2009 evaluation  TEST (NIST-09)'}, classes: 'contributes_to'},
			{data: { id: 'e_42', weight: 1, source:'t16', target: 'a0', name: '22.1:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_43', weight: 1, source:'t18', target: 'a0', name: '24.2:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'},
			{data: { id: 'e_44', weight: 1, source:'t1', target: 'a0', name: '24.7:OpenMT 2008 evaluation (NIST-08)'}, classes: 'contributes_to'}
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