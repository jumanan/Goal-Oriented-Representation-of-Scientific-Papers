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
			{ data: { id:'t3', name: 'Pre-process - Pb2 - pb 2 - p b 2' }, css: {'width' : '132', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'Heuristic-3 - H3' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t22', name: 'M2+H123' }, css: {'width' : '32', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'Transliteration' }, css: {'width' : '64', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'H123' }, css: {'width' : '20', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'M1+H12' }, css: {'width' : '28', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'H23' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t24', name: 'H y' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t27', name: 'statistical machine translation (SMT)' }, css: {'width' : '152', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'Heuristic-1 - H1 - H 1' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t26', name: 'adding the unknown words with their topcandidate transliteration to the training corpus' }, css: {'width' : '352', 'height': '10'}, classes:'task'},
			{ data: { id:'t12', name: 'M2+H1' }, css: {'width' : '24', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'M2+H3' }, css: {'width' : '24', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'M2+H2' }, css: {'width' : '24', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'Pb0 - Moses Koehn et al., 2007' }, css: {'width' : '124', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'Heuristic-2 - H2' }, css: {'width' : '68', 'height': '10'}, classes:'task'},
			{ data: { id:'t23', name: 'M x' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'Post-process - Pb1 - p b 1 -  pb1' }, css: {'width' : '136', 'height': '10'}, classes:'task'},
			{ data: { id:'t21', name: 'M2+H23' }, css: {'width' : '28', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'H13' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'Model-1 - M1 - conditional probability model - M 1' }, css: {'width' : '204', 'height': '10'}, classes:'task'},
			{ data: { id:'t25', name: 'OOV words in the phrase-based output are replaced with their top-candidate transliteration' }, css: {'width' : '364', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'Model-2 - M2 - joint probability model - M 2' }, css: {'width' : '180', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'M1+H1' }, css: {'width' : '24', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'M1+H2' }, css: {'width' : '24', 'height': '10'}, classes:'task'},
			{ data: { id:'t20', name: 'M2+H13' }, css: {'width' : '28', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'M2+H12' }, css: {'width' : '28', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'H 12' }, css: {'width' : '20', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t23', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t23', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t24', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t24', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t24', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t24', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t24', target: 't16', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t24', target: 't17', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t24', target: 't18', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t27', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t27', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t27', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t27', target: 't4', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t27', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t27', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t27', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t27', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t27', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_18', weight: 1, source:'t27', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_19', weight: 1, source:'t27', target: 't14', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_20', weight: 1, source:'t27', target: 't19', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_21', weight: 1, source:'t27', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_22', weight: 1, source:'t27', target: 't21', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_23', weight: 1, source:'t27', target: 't22', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_24', weight: 1, source:'t1', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_25', weight: 1, source:'t25', target: 't2', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_26', weight: 1, source:'t1', target: 't3', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_27', weight: 1, source:'t26', target: 't3', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_28', weight: 1, source:'t4', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_29', weight: 1, source:'t8', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_30', weight: 1, source:'t4', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_31', weight: 1, source:'t9', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_32', weight: 1, source:'t4', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_33', weight: 1, source:'t10', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_34', weight: 1, source:'t5', target: 't12', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_35', weight: 1, source:'t8', target: 't12', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_36', weight: 1, source:'t5', target: 't13', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_37', weight: 1, source:'t9', target: 't13', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_38', weight: 1, source:'t5', target: 't14', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_39', weight: 1, source:'t10', target: 't14', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_40', weight: 1, source:'t5', target: 't19', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_41', weight: 1, source:'t15', target: 't19', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_42', weight: 1, source:'t5', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_43', weight: 1, source:'t16', target: 't20', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_44', weight: 1, source:'t5', target: 't21', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_45', weight: 1, source:'t17', target: 't21', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_46', weight: 1, source:'t5', target: 't22', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_47', weight: 1, source:'t18', target: 't22', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_48', weight: 1, source:'t8', target: 't10', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_49', weight: 1, source:'t9', target: 't10', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_50', weight: 1, source:'t8', target: 't16', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_51', weight: 1, source:'t15', target: 't16', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_52', weight: 1, source:'t9', target: 't17', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_53', weight: 1, source:'t15', target: 't17', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_54', weight: 1, source:'t8', target: 't18', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_55', weight: 1, source:'t9', target: 't18', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_56', weight: 1, source:'t15', target: 't18', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_57', weight: 1, source:'t0', target: 't23', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_58', weight: 1, source:'t27', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_59', weight: 1, source:'t27', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_60', weight: 1, source:'t1', target: 'a0', name: '14.3:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_61', weight: 1, source:'t2', target: 'a0', name: '16.25:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_62', weight: 1, source:'t3', target: 'a0', name: '16.13:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_63', weight: 1, source:'t4', target: 'a0', name: '18.6:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_64', weight: 1, source:'t5', target: 'a0', name: '17.05:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_65', weight: 1, source:'t6', target: 'a0', name: '18.86:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_66', weight: 1, source:'t7', target: 'a0', name: '18.97:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_67', weight: 1, source:'t11', target: 'a0', name: '19.35:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_68', weight: 1, source:'t12', target: 'a0', name: '17.56:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_69', weight: 1, source:'t13', target: 'a0', name: '17.85:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_70', weight: 1, source:'t14', target: 'a0', name: '18.34:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_71', weight: 1, source:'t19', target: 'a0', name: '18.52:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_72', weight: 1, source:'t20', target: 'a0', name: '18.93:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_73', weight: 1, source:'t21', target: 'a0', name: '18.55:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_74', weight: 1, source:'t22', target: 'a0', name: '19.00:EMILLE'}, classes: 'contributes_to'},
			{data: { id: 'e_75', weight: 1, source:'t0', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_76', weight: 1, source:'a0', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_77', weight: 1, source:'t24', target: 'a1', name: '+'}, classes: 'contributes_to'}
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