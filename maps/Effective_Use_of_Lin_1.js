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
			{ data: { id:'t12', name: 'string-to-dependency decoder' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t15', name: 'source dependency language model' }, css: {'width' : '132', 'height': '10'}, classes:'task'},
			{ data: { id:'t1', name: 'LBL+LEN+CLM Rescoring (5-gram LM)' }, css: {'width' : '136', 'height': '10'}, classes:'task'},
			{ data: { id:'t3', name: 'LBL+LEN+CLM Decoding (3-gram LM)' }, css: {'width' : '132', 'height': '10'}, classes:'task'},
			{ data: { id:'t13', name: 'non-terminal syntactic labels - non-terminal labels' }, css: {'width' : '208', 'height': '10'}, classes:'task'},
			{ data: { id:'t20', name: 'LEN Decoding (3-gram LM)' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t26', name: 'context language model' }, css: {'width' : '92', 'height': '10'}, classes:'task'},
			{ data: { id:'t22', name: 'LBL Decoding (3-gram LM)' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t2', name: 'BASE Rescoring (5-gram LM)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t4', name: 'machine translation (MT)' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t9', name: 'LBL' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t7', name: 'CLM' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t21', name: 'LEN  Rescoring (5-gram LM)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t25', name: 'LBL+LEN Rescoring (5-gram LM)' }, css: {'width' : '120', 'height': '10'}, classes:'task'},
			{ data: { id:'t19', name: 'CLM  Rescoring (5-gram LM)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t5', name: 'BASE - Baseline - BBN’s HierDec - Shen et al., 2008' }, css: {'width' : '208', 'height': '10'}, classes:'task'},
			{ data: { id:'t23', name: 'LBL  Rescoring (5-gram LM)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'t6', name: 'SLM' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t24', name: 'LBL+LEN Decoding (3-gram LM)' }, css: {'width' : '116', 'height': '10'}, classes:'task'},
			{ data: { id:'t10', name: 'LBL+LEN' }, css: {'width' : '32', 'height': '10'}, classes:'task'},
			{ data: { id:'t18', name: 'CLM Decoding (3-gram LM)' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t0', name: 'BASE Decoding (3-gram LM)' }, css: {'width' : '104', 'height': '10'}, classes:'task'},
			{ data: { id:'t8', name: 'LEN' }, css: {'width' : '16', 'height': '10'}, classes:'task'},
			{ data: { id:'t14', name: 'length distribution' }, css: {'width' : '80', 'height': '10'}, classes:'task'},
			{ data: { id:'t16', name: 'SLM Decoding (3-gram LM)' }, css: {'width' : '100', 'height': '10'}, classes:'task'},
			{ data: { id:'t11', name: 'LBL+LEN+CLM' }, css: {'width' : '48', 'height': '10'}, classes:'task'},
			{ data: { id:'t17', name: 'SLM  Rescoring (5-gram LM)' }, css: {'width' : '108', 'height': '10'}, classes:'task'},
			{ data: { id:'a0', name: 'BLEU' }, css: {'width' : '20', 'height': '10'}, classes:'attribute'},
			{ data: { id:'a1', name: 'quality' }, css: {'width' : '32', 'height': '10'}, classes:'attribute'}
		],
		edges: [
			{data: { id: 'e_0', weight: 1, source:'t4', target: 't12', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_1', weight: 1, source:'t12', target: 't5', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_2', weight: 1, source:'t15', target: 't15', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_3', weight: 1, source:'t15', target: 't13', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_4', weight: 1, source:'t15', target: 't14', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_5', weight: 1, source:'t15', target: 't26', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_6', weight: 1, source:'t5', target: 't0', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_7', weight: 1, source:'t5', target: 't2', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_8', weight: 1, source:'t11', target: 't1', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_9', weight: 1, source:'t11', target: 't3', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_10', weight: 1, source:'t4', target: 't6', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_11', weight: 1, source:'t4', target: 't7', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_12', weight: 1, source:'t4', target: 't8', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_13', weight: 1, source:'t4', target: 't9', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_14', weight: 1, source:'t4', target: 't10', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_15', weight: 1, source:'t4', target: 't11', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_16', weight: 1, source:'t6', target: 't16', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_17', weight: 1, source:'t6', target: 't17', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_18', weight: 1, source:'t7', target: 't18', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_19', weight: 1, source:'t7', target: 't19', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_20', weight: 1, source:'t8', target: 't20', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_21', weight: 1, source:'t8', target: 't21', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_22', weight: 1, source:'t9', target: 't22', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_23', weight: 1, source:'t9', target: 't23', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_24', weight: 1, source:'t10', target: 't24', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_25', weight: 1, source:'t10', target: 't25', name: 'is_achieved_by'}, classes: 'is_achieved_by'},
			{data: { id: 'e_26', weight: 1, source:'t5', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_27', weight: 1, source:'t15', target: 't6', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_28', weight: 1, source:'t5', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_29', weight: 1, source:'t26', target: 't7', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_30', weight: 1, source:'t5', target: 't8', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_31', weight: 1, source:'t14', target: 't8', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_32', weight: 1, source:'t5', target: 't9', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_33', weight: 1, source:'t13', target: 't9', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_34', weight: 1, source:'t9', target: 't10', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_35', weight: 1, source:'t8', target: 't10', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_36', weight: 1, source:'t10', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_37', weight: 1, source:'t7', target: 't11', name: 'is_a_subtask_of'}, classes: 'is_a_subtask_of'},
			{data: { id: 'e_38', weight: 1, source:'t4', target: 'a0', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_39', weight: 1, source:'t4', target: 'a1', name: 'is_associated_with'}, classes: 'is_associated_with'},
			{data: { id: 'e_40', weight: 1, source:'t0', target: 'a0', name: '48.75:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_41', weight: 1, source:'t3', target: 'a0', name: '50.75:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_42', weight: 1, source:'t2', target: 'a0', name: '51.24:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_43', weight: 1, source:'t1', target: 'a0', name: '52.61:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_44', weight: 1, source:'t0', target: 'a0', name: '49.58:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_45', weight: 1, source:'t3', target: 'a0', name: '51.24:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_46', weight: 1, source:'t2', target: 'a0', name: '51.23:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_47', weight: 1, source:'t1', target: 'a0', name: '52.6:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_48', weight: 1, source:'t0', target: 'a0', name: '37.44:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_49', weight: 1, source:'t3', target: 'a0', name: '38.41:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_50', weight: 1, source:'t2', target: 'a0', name: '38.91:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_51', weight: 1, source:'t1', target: 'a0', name: '39.58:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_52', weight: 1, source:'t0', target: 'a0', name: '33.05:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_53', weight: 1, source:'t3', target: 'a0', name: '33.83:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_54', weight: 1, source:'t2', target: 'a0', name: '34.34:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_55', weight: 1, source:'t1', target: 'a0', name: '35.72:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_56', weight: 1, source:'t13', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_57', weight: 1, source:'t14', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_58', weight: 1, source:'t26', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_59', weight: 1, source:'a0', target: 'a1', name: '+'}, classes: 'contributes_to'},
			{data: { id: 'e_60', weight: 1, source:'t18', target: 'a0', name: '49.44:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_61', weight: 1, source:'t20', target: 'a0', name: '49.37:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_62', weight: 1, source:'t22', target: 'a0', name: '49.33:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_63', weight: 1, source:'t24', target: 'a0', name: '49.91:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_64', weight: 1, source:'t18', target: 'a0', name: '49.73:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_65', weight: 1, source:'t20', target: 'a0', name: '50.29:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_66', weight: 1, source:'t22', target: 'a0', name: '50.46:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_67', weight: 1, source:'t24', target: 'a0', name: '51.1:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_68', weight: 1, source:'t19', target: 'a0', name: '51.57:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_69', weight: 1, source:'t21', target: 'a0', name: '52.05:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_70', weight: 1, source:'t23', target: 'a0', name: '51.8:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_71', weight: 1, source:'t25', target: 'a0', name: '51.9:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_72', weight: 1, source:'t19', target: 'a0', name: '51.44:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_73', weight: 1, source:'t21', target: 'a0', name: '51.88:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_74', weight: 1, source:'t23', target: 'a0', name: '51.93:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_75', weight: 1, source:'t25', target: 'a0', name: '52.42:NIST MT08 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_76', weight: 1, source:'t16', target: 'a0', name: '37.3:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_77', weight: 1, source:'t18', target: 'a0', name: '37.66:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_78', weight: 1, source:'t20', target: 'a0', name: '38.09:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_79', weight: 1, source:'t22', target: 'a0', name: '38.37:NISTMT06 A2E'}, classes: 'contributes_to'},
			{data: { id: 'e_80', weight: 1, source:'t24', target: 'a0', name: '38.36:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_81', weight: 1, source:'t16', target: 'a0', name: '33.03:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_82', weight: 1, source:'t18', target: 'a0', name: '32.97:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_83', weight: 1, source:'t20', target: 'a0', name: '33.23:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_84', weight: 1, source:'t22', target: 'a0', name: '33.25:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_85', weight: 1, source:'t24', target: 'a0', name: '33.72:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_86', weight: 1, source:'t17', target: 'a0', name: '38.27:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_87', weight: 1, source:'t19', target: 'a0', name: '38.79:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_88', weight: 1, source:'t21', target: 'a0', name: '39.22:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_89', weight: 1, source:'t23', target: 'a0', name: '39.11:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_90', weight: 1, source:'t25', target: 'a0', name: '38.91:NIST MT06 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_91', weight: 1, source:'t17', target: 'a0', name: '34.25:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_92', weight: 1, source:'t19', target: 'a0', name: '35.01:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_93', weight: 1, source:'t21', target: 'a0', name: '34.65:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_94', weight: 1, source:'t23', target: 'a0', name: '35.02:NIST MT08 C2E'}, classes: 'contributes_to'},
			{data: { id: 'e_95', weight: 1, source:'t25', target: 'a0', name: '35.03:NIST MT08 C2E'}, classes: 'contributes_to'}
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