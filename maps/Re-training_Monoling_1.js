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
			{ data: { id:'t8', name: 'monolingual parser' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t20', name: 'standard self-training (SST)' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'forced alignment - Wuebker et al., 2010' }, css: {'width' : '160', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'Targeted Self-Training with Frontier Set Based Evaluation (TST-FS)' }, css: {'width' : '268', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'Giza++ - Och Ney, 2003' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'Forced Alignment-based Parser ReTraining (FA-PR)' }, css: {'width' : '196', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'IDSG then FA-PR' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'intersect-diag-grow (IDG)' }, css: {'width' : '104', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'syntactic statistical machine translation (SSMT) - syntactic SMT' }, css: {'width' : '260', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'calculate features' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'string-to-tree - Galley et al., 2006' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'extract rules' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'machine  translation  (MT)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'targeted self-training (TST) -  Katz-Brown et al., 2011' }, css: {'width' : '224', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'FA-PR then IDSG' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'word alignment' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'Berkeley parser - Petrov and Klein, 2007' }, css: {'width' : '164', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'Word Alignment Symmetrization' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'Intersect-Diag-Syntactic-Grow (IDSG)' }, css: {'width' : '148', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'IDG - Baseline' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'Parser Re-training Strategies' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU-4' }, css: {'width' : '28', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'consistency between parse trees and alignment matrices' }, css: {'width' : '220', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a2', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t5', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t6', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t11', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t11', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t14', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t14', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t7', target: 't16', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t8', target: 't17', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t11', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t6', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t6', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t6', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t6', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t6', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t6', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t6', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t7', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_17', weight: 1, source:'t8', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_18', weight: 1, source:'t12', target: 't10', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_19', weight: 1, source:'t13', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_20', weight: 1, source:'t15', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_21', weight: 1, source:'t16', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_22', weight: 1, source:'t17', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_23', weight: 1, source:'t18', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_24', weight: 1, source:'t19', target: 't0', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_25', weight: 1, source:'t1', target: 't3', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_26', weight: 1, source:'t2', target: 't3', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_27', weight: 1, source:'t1', target: 't4', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_28', weight: 1, source:'t2', target: 't4', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_29', weight: 1, source:'t5', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_30', weight: 1, source:'t6', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_31', weight: 1, source:'t7', target: 'a2', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_32', weight: 1, source:'t0', target: 'a0', name: '49.85:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_33', weight: 1, source:'t1', target: 'a0', name: '51.8:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_34', weight: 1, source:'t2', target: 'a0', name: '52.8:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_35', weight: 1, source:'t3', target: 'a0', name: '53.32:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_36', weight: 1, source:'t4', target: 'a0', name: '53.26:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_37', weight: 1, source:'t0', target: 'a0', name: '36.44:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_38', weight: 1, source:'t1', target: 'a0', name: '37.07:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_39', weight: 1, source:'t2', target: 'a0', name: '37.69:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_40', weight: 1, source:'t3', target: 'a0', name: '37.95:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_41', weight: 1, source:'t4', target: 'a0', name: '37.94:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_42', weight: 1, source:'t0', target: 'a0', name: '24.87:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_43', weight: 1, source:'t1', target: 'a0', name: '25.67:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_44', weight: 1, source:'t2', target: 'a0', name: '25.89:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_45', weight: 1, source:'t3', target: 'a0', name: '26.74:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_46', weight: 1, source:'t4', target: 'a0', name: '26.52:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_47', weight: 1, source:'t8', target: 'a1', name: '-'}, classes: 'contributes_to'},
			{data: { id: 'e_48', weight: 1, source:'t11', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_49', weight: 1, source:'t14', target: 'a2', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_50', weight: 1, source:'t20', target: 'a0', name: '51.26:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_51', weight: 1, source:'t10', target: 'a0', name: '52.51:dev9'}, classes: 'contributes_to'},
			{data: { id: 'e_52', weight: 1, source:'t20', target: 'a0', name: '36.79:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_53', weight: 1, source:'t10', target: 'a0', name: '37.39:NIST\'05'}, classes: 'contributes_to'},
			{data: { id: 'e_54', weight: 1, source:'t20', target: 'a0', name: '25.3:NIST\'08'}, classes: 'contributes_to'},
			{data: { id: 'e_55', weight: 1, source:'t10', target: 'a0', name: '25.79:NIST\'08'}, classes: 'contributes_to'}
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