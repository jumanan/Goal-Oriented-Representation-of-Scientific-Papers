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
			{ data: { id:'t7', name: 'rule-based - Genzel, 2010' }, css: {'width' : '104', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'distortion limits d' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'depth-first branch-and-bound search' }, css: {'width' : '144', 'height': '10'}, classes:'task'},
			{ data: { id:'t33', name: 'df-bnb + d10' }, css: {'width' : '52', 'height': '10'}, classes:'task'},
			{ data: { id:'t27', name: 'rule-based + d4' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t25', name: 'df-bnb + d' }, css: {'width' : '44', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'lexicalised reordering model (LRM)' }, css: {'width' : '140', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'multi-class + LRM + d4' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t24', name: 'multi-class + d' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'machine translation' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'baseline' }, css: {'width' : '36', 'height': '10'}, classes:'task'},
			{ data: { id:'t23', name: 'rule-based + d' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'multi-class + LRM + d10' }, css: {'width' : '96', 'height': '10'}, classes:'task'},
			{ data: { id:'t31', name: 'rule-based + d10' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'baseline + LRM + d10' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'t20', name: 'multi-class + LRM + d' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t30', name: 'baseline + d10' }, css: {'width' : '60', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'baseline + LRM + d' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'Source-side preordering' }, css: {'width' : '96', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'rule-based + LRM + d' }, css: {'width' : '84', 'height': '10'}, classes:'task'},
			{ data: { id:'t22', name: 'baseline + d' }, css: {'width' : '52', 'height': '10'}, classes:'task'},
			{ data: { id:'t28', name: 'multi-class + d4' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'df-bnb + LRM + d10' }, css: {'width' : '76', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'baseline + LRM + d4' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'multi-class - Lerner and Petrov, 2013' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'df-bnb + LRM + d4' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'rule-based + LRM + d4' }, css: {'width' : '88', 'height': '10'}, classes:'task'},
			{ data: { id:'t26', name: 'baseline + d4' }, css: {'width' : '56', 'height': '10'}, classes:'task'},
			{ data: { id:'t21', name: 'df-bnb + LRM + d' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t32', name: 'multi-class + d10' }, css: {'width' : '72', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'logistic regression' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t29', name: 'df-bnb + d4' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'rule-based + LRM + d10' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'preordering approach with logistic regression and depth-first branch-and-bound search (df-bnb)' }, css: {'width' : '380', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'speed' }, css: {'width' : '24', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t0', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t0', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t0', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t0', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t1', target: 't18', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t1', target: 't19', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t1', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t1', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t1', target: 't22', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t1', target: 't23', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t1', target: 't24', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t1', target: 't25', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t2', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t18', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t19', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t19', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t20', target: 't14', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t20', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_18', weight: 1, source:'t21', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_19', weight: 1, source:'t21', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_20', weight: 1, source:'t22', target: 't26', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_21', weight: 1, source:'t22', target: 't30', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_22', weight: 1, source:'t23', target: 't27', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_23', weight: 1, source:'t23', target: 't31', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_24', weight: 1, source:'t24', target: 't28', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_25', weight: 1, source:'t24', target: 't32', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_26', weight: 1, source:'t25', target: 't29', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_27', weight: 1, source:'t25', target: 't33', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_28', weight: 1, source:'t1', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_29', weight: 1, source:'t6', target: 't22', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_30', weight: 1, source:'t10', target: 't18', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_31', weight: 1, source:'t11', target: 't22', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_32', weight: 1, source:'t7', target: 't23', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_33', weight: 1, source:'t10', target: 't19', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_34', weight: 1, source:'t11', target: 't23', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_35', weight: 1, source:'t8', target: 't24', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_36', weight: 1, source:'t10', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_37', weight: 1, source:'t11', target: 't24', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_38', weight: 1, source:'t9', target: 't25', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_39', weight: 1, source:'t10', target: 't21', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_40', weight: 1, source:'t11', target: 't25', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_41', weight: 1, source:'t22', target: 't18', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_42', weight: 1, source:'t23', target: 't19', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_43', weight: 1, source:'t24', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_44', weight: 1, source:'t25', target: 't21', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_45', weight: 1, source:'t16', target: 't9', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_46', weight: 1, source:'t17', target: 't9', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_47', weight: 1, source:'t1', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_48', weight: 1, source:'t1', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_49', weight: 1, source:'t30', target: 'a0', name: '25.39:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_50', weight: 1, source:'t31', target: 'a0', name: '25.93:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_51', weight: 1, source:'t32', target: 'a0', name: '25.60:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_52', weight: 1, source:'t33', target: 'a0', name: '26.73:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_53', weight: 1, source:'t9', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_54', weight: 1, source:'t2', target: 'a0', name: '26.62:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_55', weight: 1, source:'t3', target: 'a0', name: '27.65:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_56', weight: 1, source:'t4', target: 'a0', name: '26.10:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_57', weight: 1, source:'t5', target: 'a0', name: '28.09:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_58', weight: 1, source:'t26', target: 'a0', name: '25.07:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_59', weight: 1, source:'t27', target: 'a0', name: '26.35:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_60', weight: 1, source:'t28', target: 'a0', name: '25.37:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_61', weight: 1, source:'t29', target: 'a0', name: '26.98:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_62', weight: 1, source:'t12', target: 'a0', name: '25.92:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_63', weight: 1, source:'t13', target: 'a0', name: '27.54:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_64', weight: 1, source:'t14', target: 'a0', name: '26.31:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'},
			{data: { id: 'e_65', weight: 1, source:'t15', target: 'a0', name: '28.13:Jehl et al, 2014 - EJ'}, classes: 'contributes_to'}
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